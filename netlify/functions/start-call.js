// ─────────────────────────────────────────────────────────────
//  Netlify Function: start-call.js
//  Called by the Sofia demo form to initiate an outbound call.
//  The Vapi Private Key stays here — never exposed to the browser.
// ─────────────────────────────────────────────────────────────

const VAPI_PRIVATE_KEY  = process.env.VAPI_API_KEY;
const VAPI_ASSISTANT_ID = "b142512e-ba3a-4267-beb9-2cf042862770";
const VAPI_PHONE_ID     = "fa257cfb-c786-4d72-8106-fad9b3b8e4dd"; // +1 (669) 310 5168

exports.handler = async function(event) {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { customerPhone: rawPhone, bizName, ownerName, nicho, phone: rawPhone2, email, social, lang } = body;

  const rawPhoneInput = rawPhone || rawPhone2;
  if (!rawPhoneInput) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Phone number required" }) };
  }

  // Normalize to E.164 format required by Vapi
  // Strips spaces, dashes, dots, parentheses then adds +1 if missing
  const digitsOnly = rawPhoneInput.replace(/[^\d+]/g, '');
  let customerPhone;
  if (digitsOnly.startsWith('+')) {
    customerPhone = digitsOnly;           // already has country code e.g. +15551234567
  } else if (digitsOnly.length === 10) {
    customerPhone = '+1' + digitsOnly;    // US number without country code
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
    customerPhone = '+' + digitsOnly;     // 1XXXXXXXXXX → +1XXXXXXXXXX
  } else {
    customerPhone = '+' + digitsOnly;     // best effort
  }

  console.log('[start-call] Raw input:', rawPhoneInput, '→ Normalized:', customerPhone);

  // ── Build Sofia's system prompt with prospect's business context ──
  const isES = lang === "es";

  const wrapUp = isES
    ? `Como puedes ver, puedo atender llamadas como esta las 24 horas para ${bizName}. AJ Business Assistant puede tenerme trabajando para ti en solo 5 días hábiles.`
    : `As you can see, I can handle calls like this 24/7 for ${bizName}. AJ Business Assistant can have me working for you within 5 business days.`;

  const firstMessage = isES
    ? `¡Hola! Soy Sofia, la recepcionista de inteligencia artificial para ${bizName}. ¿En qué te puedo ayudar hoy?`
    : `Hi there! This is Sofia, the AI receptionist for ${bizName}. How can I help you today?`;

  const phoneLine  = phone  ? (isES ? `\n- Teléfono del negocio: ${phone}`        : `\n- Business phone: ${phone}`)        : "";
  const emailLine  = email  ? (isES ? `\n- Email del negocio: ${email}`            : `\n- Business email: ${email}`)         : "";
  const socialLine = social ? (isES ? `\n- Web/redes del negocio: ${social}`       : `\n- Business website/social: ${social}`) : "";

  const systemPrompt = isES
    ? `Eres Sofia, una recepcionista de IA cálida y profesional para ${bizName}, un negocio de ${nicho}.

IMPORTANTE — ESTA ES UNA LLAMADA DE DEMO:
- Estás mostrándole al dueño del negocio (${ownerName}) cómo funciona un asistente de IA.
- Saluda como si ya trabajaras en ${bizName}.
- Responde preguntas sobre servicios, horarios y citas de manera natural.
- Si te preguntan sobre horarios, precios o servicios, inventa respuestas realistas para un negocio de ${nicho}.
- Después de 2-3 preguntas y cuando la conversación sea natural, cierra diciendo: "${wrapUp}"
- NO apresures la llamada. Deja que la conversación fluya naturalmente.
- Responde SIEMPRE en español.${phoneLine}${emailLine}${socialLine}

TONO: Cálida, profesional, humana. Nunca suenes a robot. Respuestas cortas y naturales.`
    : `You are Sofia, a warm, professional AI receptionist for ${bizName}, a ${nicho} business.

IMPORTANT — THIS IS A LIVE DEMO CALL:
- You are showing the business owner (${ownerName}) how an AI receptionist works for their business.
- Act as if you already work at ${bizName} — answer the phone naturally.
- Answer questions about services, hours, and appointments naturally.
- If asked about hours, services, or pricing, invent realistic answers for a ${nicho} business.
- After 2-3 questions and once the conversation feels complete, wrap up by saying: "${wrapUp}"
- Do NOT rush the call. Let the conversation flow naturally.
- Always respond in English.${phoneLine}${emailLine}${socialLine}

TONE: Warm, professional, human. Never sound robotic. Keep responses short and natural.`;

  // ── Call Vapi API to initiate outbound call ──
  const vapiPayload = {
    phoneNumberId: VAPI_PHONE_ID,
    customer: {
      number: customerPhone
    },
    assistantId: VAPI_ASSISTANT_ID,
    assistantOverrides: {
      firstMessage: firstMessage,
      model: {
        provider: "openai",
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: systemPrompt }]
      },
      voice: {
        provider: "11labs",
        model: "eleven_turbo_v2_5",
        voiceId: "DbSecejUVkMJPcrM407R",
        stability: 0.5,
        similarityBoost: 0.75
      },
      transcriber: {
        provider: "deepgram",
        model: "nova-2-conversationalai",
        language: isES ? "es" : "en-US"
      },
      maxDurationSeconds: 180,
      silenceTimeoutSeconds: 30
    }
  };

  try {
    const response = await fetch("https://api.vapi.ai/call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${VAPI_PRIVATE_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vapiPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Vapi API error:", JSON.stringify(data));
      // Pass back the full Vapi error so the frontend can show it
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({
          error: data.message || data.error || "Vapi API error",
          vapiDetail: data
        })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, callId: data.id })
    };

  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
