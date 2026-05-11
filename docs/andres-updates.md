# Actualizaciones de Andrés — AJ Business Advisory
> Este archivo es el punto de sincronización entre el sitio USA (aj-business-advisory) y el sitio Colombia (sofia-bogota).
> **Andrés:** agrega una entrada aquí al terminar cada sesión de trabajo.
> **Valentina:** este archivo se lee automáticamente al iniciar cada sesión.

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
