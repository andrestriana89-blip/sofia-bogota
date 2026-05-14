# Actualizaciones de Andrés — AJ Business Advisory
> Este archivo es el punto de sincronización entre el sitio USA (aj-business-advisory) y el sitio Colombia (sofia-bogota).
> **Andrés:** agrega una entrada aquí al terminar cada sesión de trabajo.
> **Valentina:** este archivo se lee automáticamente al iniciar cada sesión.

---

## 2026-05-14 — Sesión Valentina (globos + hero fotorealista)

**Repos tocados:**
- `sofia-bogota` → `index.html` (commits `2e87c4b`, `e174fce`)

**Cambios realizados:**

### Globos de los planes de precios — colores y animaciones únicas
- ✅ **Plan 1 — Appointment Recovery:** violeta/púrpura · órbita suave estándar
- ✅ **Plan 2 — Instagram Growth + ManyChat:** naranja + rosado fuerte (colores Instagram) · giro rápido con eje oscilante
- ✅ **Plan 3 — SMB Digital Presence:** azul + teal/verde · wobble lento
- ✅ **Plan 4 — Dormant Client Reactivation:** amarillo/gold + verde · pulso rítmico (surge)
- ✅ **Plan 5 — Google Reputation:** indigo/navy + cian · rotación inversa + tilt dramático

### Hero globe — tierra fotorealista
- ✅ Océano muy oscuro (#040c1e → #010308) — igual a la imagen de referencia
- ✅ Continentes con colores oscuros reales (selva, templado, árido, boreal, hielo polar)
- ✅ Parches de nubes sobre la superficie con iluminación solar
- ✅ Terminador día/noche — lado nocturno oscurecido con gradiente
- ✅ Luces de ciudad cálidas (amarillo-naranja) visibles solo en el lado nocturno
- ✅ Resplandor solar fijo en espacio superior derecho
- ✅ Arcos y partículas animadas (líneas azul-cian entre ciudades)

**Pendientes para Andrés:**
- [ ] **Netlify está devolviendo 503** — verificar en dashboard si el deploy está caído o pausado
- [ ] Si Netlify sigue sin funcionar: conectar repo `sofia-bogota` en Render como Static Site (sin build command, publish path `.`)
- [ ] Una vez en Render: actualizar CNAME de `sofia.ajbusinessadvisory.com` en Namecheap apuntando al dominio de Render
- [ ] Revisar `submitSofiaCall` — actualmente llama a `/.netlify/functions/start-call` — si pasa a Render este endpoint cambia
- [ ] Verificar que los textos en inglés estén correctos (cambiar selector a `us EN` en la barra superior)

---

## 2026-05-14 — Sesión Andrés

**Repos tocados:**
- `aj-business-advisory` → `landing/clients/bunny-burger/propuesta.html`, `landing/clients/julian-rpd/propuesta.html`, `ops/pricing.md`, `brain/MASTER_BRAIN.md`, `CLAUDE.md`

**Cambios realizados:**

### Separación propuestas Julián — RPD vs Bunny Burger
- ✅ Propuesta RPD: eliminado el add-on de Bunny Burger — ahora incluye "Missed Lead Recovery System" ($450K/mes) para la base de clientes dormidos de RPD
- ✅ Propuesta Bunny Burger: precio corregido de $1.5M a $750K/mes + $400K setup. Info real de Instagram: 2,061 seguidores, @bunnyburgerdc, Hayuelos Cll 19A #93-98, jue-dom 6pm-12am
- ⚠️ **VALENTINA: Bunny Burger ya tiene equipo de Instagram propio.** El pitch para ellos es ÚNICAMENTE Sofia para DMs (ManyChat-style). La propuesta actual habla de producción de contenido — eso hay que reescribirlo. El único servicio es: Sofia responde DMs de Instagram y/o WhatsApp mientras el local está cerrado lunes-miércoles.

### Feedback directo sobre propuesta Ruztik (propuesta-ruztik.html)
**Lo que está muy bien — no cambies:**
- Dark theme + amarillo + Bebas Neue → identidad correcta, no parece plantilla ✅
- 3 planes A/$1M · B/$2M · C/$3M con mantenimiento en B y C ✅
- Pago 50/50 ✅
- Sofia como upsell en Plan C ("Preparación para integrar Sofía IA") ✅
- Sección de protección de contenido — excelente diferenciador ✅
- CTA a WhatsApp en cada plan con mensaje pre-escrito ✅
- Bloque "¿Tienes una propuesta diferente?" → humaniza ✅
- Validez 15 días → urgencia ✅

**Lo que puedes mejorar:**
1. **Plan A no tiene mantenimiento** — agregar nota: "Mantenimiento $150.000 COP/mes disponible como add-on"
2. **Agregar argumento SEO** — "Google puede encontrarte aunque no te busquen por nombre" es el argumento más fuerte para marcas que solo tienen Instagram. Ponlo en la sección "Entendimiento del negocio"
3. **ROI en 1 cliente** — Ruztik fabrica artesanal/industrial. Si un cliente B2B vale $5M–$20M COP, un solo proyecto extra en 3 meses paga todo el Plan C. Falta esa narrativa en la sección de objetivos
4. **Agregar Sofia WA como add-on post-web** — En la sección de Sofia, mencionar precio: "Cuando el sitio esté recibiendo visitas, Sofia WhatsApp se activa desde $300.000 COP/mes" — así el cliente ya llega con expectativa de cuánto va a pagar después

### Precios estandarizados (setup = 1.5× mensual)
- ✅ pricing.md, MASTER_BRAIN.md y CLAUDE.md actualizados con regla universal
- ✅ Regla: Setup = 1.5× mensual · Mínimo $150K COP / $150 USD
- ✅ Excepción: Instagram Growth setup = 1× mensual ($1.5M COP) — NO 1.5×
- ✅ Promo estándar: paga setup → mes 1 gratis → mensualidad arranca mes 2
- ✅ Natalia tiene $950K/mes de Instagram EXCLUSIVO vitalicio — nadie más jamás

**Pendientes Valentina:**
- [ ] Reescribir propuesta Bunny Burger → SOLO Sofia DMs (sin producción de contenido)
- [ ] Agregar argumento SEO + ROI en propuesta Ruztik
- [ ] Agregar mantenimiento $150K/mes como add-on en Plan A de Ruztik
- [ ] Agregar bloque "Sofia como siguiente paso" con precio en propuesta Ruztik

---

## 2026-05-12 — Sesión Andrés

**Repos tocados:**
- `aj-business-advisory` → `status/clients/natalia-dentalia.md`

**Cambios realizados:**

### Dominio de Natalia — comprado ✅
- Dominio registrado: **`dranataliabarrantes.com`** en Namecheap
- Costo: $11.48/año · Privacy incluida · Order #202241731
- **IMPORTANTE Valentina:** La página de Natalia va en **Netlify** (igual que sofia-bogota), NO en Render
- Motivo: los clientes de Natalia son 100% de Bogotá — Netlify tiene CDN en São Paulo y carga mucho más rápido desde Colombia

### Qué falta para activar el dominio (lo hace Andres cuando tú termines la página):
1. En Netlify: agregar `dranataliabarrantes.com` como custom domain del sitio de Natalia
2. En Namecheap: agregar CNAME apuntando al sitio de Netlify
3. Listo — no hay que tocar Render para nada

**Pendientes Valentina:**
- [ ] Construir la página de Natalia (`dranataliabarrantes.com`) en Netlify
- [ ] Colores: negro `#1A1A1A`, caramelo `#C4A882`, blanco `#F8F6F3` — **SIN MORADO bajo ninguna circunstancia**
- [ ] Cuando termines, avísale a Andres para que apunte el dominio

---

## 2026-05-11 — Sesión Valentina (verificación técnica Sofia voz + GHL)

**Repos tocados:**
- `sofia-bogota` → `netlify/functions/start-call.js` (bug fix · commit `02b4939`)

**Cambios realizados:**
- ✅ Bug corregido en `start-call.js` — variable `phone` no declarada causaba ReferenceError → función devolvía 500 sin llamar a Vapi. Fix: renombrar a `rawPhone2`

**Pendientes para Andrés — ACCIONES REQUERIDAS:**

### 🔴 1. VAPI_API_KEY en Netlify (sin esto Sofia no llama)
La función serverless lee `process.env.VAPI_API_KEY` pero la variable debe estar configurada en Netlify:
- Netlify Dashboard → Site Settings → Environment variables → Add variable
- Key: `VAPI_API_KEY`
- Value: tu Private Key de Vapi → Dashboard → Account → API Keys

### 🔴 2. GHL webhook para Academia (sin esto los leads de Academia se pierden)
Los formularios de la sección Academia (descargar agente, mentoría, cuéntanos) envían datos a GHL, pero el webhook URL aún es el placeholder. Los leads **no llegan al CRM**.
- GHL Dashboard → Settings → Integrations → Webhooks → Crear nuevo webhook → copiar URL
- En `index.html` línea 4327, reemplazar:
  ```
  var GHL_WEBHOOK_URL = 'GHL_WEBHOOK_URL';
  ```
  por:
  ```
  var GHL_WEBHOOK_URL = 'https://backend.leadconnectorhq.com/hooks/TU-URL-REAL';
  ```
- Hacer push → Netlify despliega automáticamente

### 🟡 3. GHL chat widget — cambiar idioma a español
El widget de chat (burbuja verde, ID: `69d334e30515dd19a13c80df`) aparece en inglés para visitantes colombianos.
- GHL Dashboard → Settings → Conversations → Chat Widget → Language → **Español**

---

## 2026-05-11 — Sesión Andrés

**Repos tocados:**
- `aj-business-advisory` → `status/clients/natalia-dentalia.md`, `status/clients/_TEMPLATE.md`, `ops/paletas-por-nicho.md`

**Cambios realizados:**

### CRM en Notion — construido desde cero
- ✅ 5 bases de datos: Clientes, Tareas, Cobros, Reps, Cobros Reps (con relaciones)
- ✅ Natalia Barrantes cargada como primer cliente
- ✅ Cristian Becerra cargado como primer rep
- ✅ Home Dashboard + Rep Dashboard creados
- ⚠️ Workspace Notion en plan Free — bloques agotados
- 🔧 PENDIENTE VALENTINA: Andres te va a compartir las páginas del CRM como Guest (gratis). Cuando llegue el invite, acepta y tendrás acceso completo.

### 5 workflows N8N creados (CRM alerts → SMS a Andres)
- WF 13: Seguimiento diario 8am — clientes con acción hoy
- WF 14: Cobros pendientes — día 1 y 15 de cada mes
- WF 15: Tareas atascadas >5 días — 8:30am diario
- WF 16: Resumen diario 7pm — todas las tareas abiertas
- WF 17: Clientes en riesgo — lunes 9am
- ⚠️ PENDIENTE ANDRES: agregar token Notion en n8n-aj-lovk.onrender.com → Credentials → "Notion API · AJ Business Advisory" y activar los 5 workflows

### Documentación sistema de marca
- ✅ `status/clients/natalia-dentalia.md` — paleta CSS completa, tipografía, servicios/precios, horarios, logo, restricciones
- ✅ `ops/paletas-por-nicho.md` — paletas de color para 11 nichos

**Pendientes Valentina:**
- [ ] Esperar invite de Notion de Andres (como Guest) → aceptar
- [ ] Página web Natalia en `landing/dentalia.html` — continuar (colores: negro #1A1A1A, caramelo #C4A882, blanco #F8F6F3 — SIN MORADO)

---

## 2026-05-10 — Sesión Andrés

**Repos tocados:**
- `andrestriana89-blip/aj-business-advisory` → `webhook/index.html`
- `andrestriana89-blip/sofia-bogota` → `index.html`

**Cambios realizados:**

### Sitio Colombia — sofia.ajbusinessadvisory.com
- ✅ WA Colombia conectado: `573219664302` (Sofia Twilio Colombia +57 321-966-4302)
- ✅ Vapi live: `assistantId: b142512e-ba3a-4267-beb9-2cf042862770` · `phoneNumberId: fa257cfb-c786-4d72-8106-fad9b3b8e4dd`
- ✅ Sección "Sofia te llama" activada (solo versión LATAM)
- ✅ Banner USA/CA → redirige a ajbusinessadvisory.com cuando detecta visitante de Norteamérica

### Sitio USA — ajbusinessadvisory.com
- ✅ Banner rosa LATAM → aparece cuando visitante Colombia/LATAM aterriza en el sitio USA: "¿En Colombia o LATAM? → Ver sitio LATAM"
- ✅ `/precios-valentina` — página de precios en COP para uso interno de Valentina
- ✅ `/propuesta/pilar-majestic` — Precios: $950K/mes · Setup $1.800.000 · Add-on Instagram $1.500.000/mes + $300K setup
- ✅ `/propuesta/tatiana-space-glowup` — Setup corregido: $1.250.000
- ✅ `/propuesta/julian-rpd` — Setup corregido: $300.000 (estaba $900.000 por error)
- ✅ Botones "Que Sofia me llame" en propuestas conectados para Colombia

### Sistema Warm Transfer
- ✅ Número USA: SMS desde (833) 648-1697
- ✅ Número Colombia (+57): WhatsApp
- ✅ Mensajes de Sofia siempre en español sin importar el canal

**Pendientes que quedaron:**
- ⚠️ Vapi Bearer token expuesto en HTML público de sofia-bogota → Andrés debe revocar y regenerar en Vapi Dashboard, luego moverlo a función serverless
- [ ] Número WA Colombia en ANDRES_LAUNCH_CHECKLIST.md sigue con placeholder `57XXXXXXXXXX` — actualizar documentación
- [ ] Verificar GHL widget ID `69d334e30515dd19a13c80df` activo en producción

---

## 2026-05-10 — Sesión Andrés (tarde)

**Repos tocados:**
- `claude-code-g2` (~/claude-code-g2) — setup e intento de activación con Even G2

**Cambios realizados:**
- ✅ Investigado EvenHub (marketplace apps Even G2) — ~50 apps disponibles desde abril 2026
- ✅ Identificada integración Claude Code + G2: repo ya estaba clonado y configurado en Mac de Andres
- ✅ Backend de claude-code-g2 levantado en puerto 8787 — funcionando
- ✅ Investigado Sensemaker (app EvenHub): captura voz pasiva → extrae personas, proyectos, acciones, fechas

**Pendientes:**
- [ ] Conectar gafas a claude-code-g2: levantar frontend en 10.0.0.143:5173 + generar QR
- [ ] Actualizar firmware Even G2: gafas deben estar en cargador con >50% batería
- [ ] Instalar Sensemaker desde EvenHub → portal.sensemaker-app.com

---

## 2026-05-10 — Sesión Andrés (noche — seguridad + Netlify deploy)

**Repos tocados:**
- `aj-business-advisory` → `webhook/index.html`, `CLAUDE.md`
- `sofia-bogota` → `index.html`, `netlify/functions/start-call.js`

**Cambios realizados:**
- ✅ Security fix: Vapi key sacada del HTML público → `process.env.VAPI_API_KEY` en `start-call.js`
- ✅ `submitSofiaCall` en `index.html` → llama `/.netlify/functions/start-call`, no Vapi directo
- ✅ Banner LATAM en sitio USA — visitantes Colombia/LATAM ven banner rosa → `sofia.ajbusinessadvisory.com`
- ✅ sofia-bogota desplegado en Netlify: `sofiabogota.netlify.app`
- ✅ Dominio `sofia.ajbusinessadvisory.com` → Primary domain en Netlify (DNS propagando)
- ✅ Regla de sync Valentina agregada al `CLAUDE.md` del repo USA

**Pendientes:**
- [ ] Andres: CNAME en Namecheap — Host `sofia` → Value `sofiabogota.netlify.app`
- [ ] Andres: confirmar VAPI_API_KEY nueva en Netlify env vars
- [ ] Andres: revocar keys viejas Vapi (`df91a017...` y `a693a66e...`)
- [ ] Precios: clase `prices-locked` aún activa — Andres decide cuándo activar
- [ ] GHL widget `69d334e30515dd19a13c80df` — verificar activo

---

<!-- PLANTILLA PARA PRÓXIMAS ENTRADAS — copiar y llenar

## YYYY-MM-DD — Sesión Andrés

**Repos tocados:**
- `andrestriana89-blip/aj-business-advisory` → archivos
- `andrestriana89-blip/sofia-bogota` → archivos

**Cambios realizados:**
- ✅ 
- ✅ 

**Pendientes:**
- [ ] 

-->

---

## 2026-05-14 — Sesión Andrés (Mi Voz lanzamiento)

**Repos tocados:**
- `sofia-bogota` → `mi-voz/index.html`, `mi-voz/cuidador.html` (nuevos), `docs/brief-videos-abuelo.html` (ya existía)
- `aj-business-advisory` → `landing/gilberto/cuidador.html`, `landing/gilberto/don-gilberto-familia.html`, `webhook/main.py`

**Cambios realizados:**
- ✅ **Mi Voz v2 lanzada** en `sofiabogota.netlify.app/mi-voz/` — ES/EN/FR/PT, selector de voz ♂/♀, onboarding 5 pasos estilo Wispr Flow, sin Render
- ✅ **Panel del cuidador** en `sofiabogota.netlify.app/mi-voz/cuidador.html` — notificaciones en tiempo real vía ntfy.sh, compatible Apple Watch
- ✅ **Gumroad publicado** — `andrestriana3.gumroad.com/l/mi-voz` — $10 USD, ya está a la venta
- ✅ **Brief de edición de videos** ya estaba listo en `sofiabogota.netlify.app/docs/brief-videos-abuelo.html`

**Pendientes para Valentina:**
- [ ] Editar Video 1 (VIDEO-2026-05-13-13-18-27.mp4 — "quiero roscón") según el brief
- [ ] Subir el video editado a YouTube (puede ser no listado)
- [ ] Mandar el link de YouTube a Andres por WhatsApp — él lo incrusta en la página de ventas ese día

**Nota:** La app del abuelo Don Gilberto no cambia — sigue en `ajbusinessadvisory.com/gilberto/familia` con ElevenLabs. Mi Voz v2 es el producto de Gumroad para otras familias.
