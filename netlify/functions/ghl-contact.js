const GHL_API_KEY     = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || 'fw8hTMlIVrwjGCKyzADZ';

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const { nombre, email, whatsapp, tag, etapa, negocio, necesidad, mensaje, agente, source, fecha } = data;

  // Armar nombre
  const nameParts  = (nombre || '').trim().split(/\s+/);
  const firstName  = nameParts[0] || '';
  const lastName   = nameParts.slice(1).join(' ') || '';

  // Tags: siempre incluye fuente + el tag del formulario específico
  const tags = ['Academia AJ Business Advisory'];
  if (tag) tags.push(tag);

  // Notas adicionales como customField (texto libre)
  const noteLines = [];
  if (etapa)     noteLines.push(`Etapa negocio: ${etapa}`);
  if (negocio)   noteLines.push(`Negocio/idea: ${negocio}`);
  if (necesidad) noteLines.push(`Necesidad: ${necesidad}`);
  if (agente)    noteLines.push(`Agente solicitado: ${agente}`);
  if (mensaje)   noteLines.push(`Mensaje: ${mensaje}`);
  if (fecha)     noteLines.push(`Fecha: ${fecha}`);
  if (source)    noteLines.push(`Fuente: ${source}`);

  const body = {
    locationId: GHL_LOCATION_ID,
    firstName,
    lastName,
    email:  email  || undefined,
    phone:  whatsapp || undefined,
    tags,
    source: 'Academia AJ Business Advisory',
  };

  if (noteLines.length) {
    body.customFields = [
      { key: 'source_details', field_value: noteLines.join('\n') }
    ];
  }

  try {
    const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type':  'application/json',
        'Version':       '2021-07-28',
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok) {
      console.error('[ghl-contact] GHL error:', JSON.stringify(json));
      return { statusCode: res.status, body: JSON.stringify({ error: json }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, contactId: json.contact?.id }),
    };
  } catch (err) {
    console.error('[ghl-contact] fetch error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
