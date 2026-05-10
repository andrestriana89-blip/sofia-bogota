# Actualizaciones de Andrés — AJ Business Advisory
> Este archivo es el punto de sincronización entre el sitio USA (aj-business-advisory) y el sitio Colombia (sofia-bogota).
> **Andrés:** agrega una entrada aquí al terminar cada sesión de trabajo.
> **Valentina:** este archivo se lee automáticamente al iniciar cada sesión.

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
