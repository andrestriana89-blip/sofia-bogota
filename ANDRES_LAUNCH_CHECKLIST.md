# 🚀 ANDRÉS — CHECKLIST DE LANZAMIENTO
### AJ Business Advisory — index.html (sofia-demo)
**Preparado por:** Valentina / Sofia Demo Session  
**Fecha:** 2026-05-08  
**Archivo principal:** `index.html` (único archivo — todo el sitio)

---

## 📌 UBICACIÓN EXACTA EN GITHUB

**Repositorio:** `https://github.com/andrestriana89-blip/sofia-bogota`  
**Branch:** `main`

| Archivo | URL directa |
|---------|------------|
| 🌐 Sitio completo | `https://github.com/andrestriana89-blip/sofia-bogota/blob/main/index.html` |
| ⚙️ Config Netlify | `https://github.com/andrestriana89-blip/sofia-bogota/blob/main/netlify.toml` |
| 📋 Este checklist | `https://github.com/andrestriana89-blip/sofia-bogota/blob/main/ANDRES_LAUNCH_CHECKLIST.md` |
| 🖼️ Logo | `https://github.com/andrestriana89-blip/sofia-bogota/blob/main/ULTIMO_LOGO_SIN_LUZ.png` |

**Para editar directamente en GitHub:**  
Abre cualquiera de esos links → botón ✏️ Edit → haz el cambio → Commit changes → Netlify despliega automáticamente.

**Para buscar texto rápido en index.html:**  
`https://github.com/andrestriana89-blip/sofia-bogota/search?q=WA_NUMBERS`  
(cambia el término de búsqueda según lo que necesites encontrar)

---

## ⚡ PENDIENTES ANTES DE GO-LIVE

### 1. 📞 NÚMERO DE WHATSAPP COLOMBIA — Geo-aware activo
**Urgencia:** 🔴 Crítico  
El sitio ya tiene lógica geo-aware implementada. Los números están separados:

| Visitante de | Número que ve |
|-------------|--------------|
| 🇨🇴 Colombia | Número colombiano (placeholder `57XXXXXXXXXX`) |
| 🌎 Resto del mundo | `16696662773` — queda **permanente**, no tocar |

**Solo debes reemplazar el número de Colombia:**  
Busca en index.html:
```javascript
const WA_NUMBERS = {
  CO:   '57XXXXXXXXXX',   // ← REEMPLAZA ESTO con el número real
  INTL: '16696662773'     // Internacional — NO tocar
};
```
Cambia `57XXXXXXXXXX` por el número real de Colombia.  
Formato: código de país + número SIN + ni espacios → ejemplo: `573001234567`

El cambio aplica automáticamente a **todos** los botones de WhatsApp del sitio.

---

### 2. 💰 ACTIVAR LOS PRECIOS (quitar cerrojo)
**Urgencia:** 🔴 Crítico  
Los precios están ocultos con una clase CSS. Cuando los precios estén confirmados:

**Busca esta línea en index.html:**
```html
<section class="section section-dark prices-locked" id="precios">
```
**Cámbiala por:**
```html
<section class="section section-dark" id="precios">
```

Los precios base están en COP y se convierten automáticamente a USD y EUR.  
Precios actuales en el código:
| Plan | Setup | Mensual |
|------|-------|---------|
| Sofia Core | $1.800.000 COP | $950.000 COP |
| Contenido Social | $500.000 COP | $1.500.000 COP |
| Web + Sofia | $1.200.000 COP | $750.000 COP |
| Reactivación | $900.000 COP | $390.000 COP |
| Reputación Google | $500.000 COP | $250.000 COP |

---

### 3. 🎙️ CONECTAR VAPI — "Sofia te llama" (formulario ya activo)
**Urgencia:** 🟡 Importante  
El formulario "Sofia te llama" **ya está visible y funcional** en la sección Demo (solo versión LATAM/no-US).  
El formulario pide: nombre, teléfono, correo, tipo de negocio — y muestra confirmación.  
**Falta solo conectar el POST a Vapi.**

**Busca en index.html la función `submitSofiaCall` y descomenta este bloque:**
```javascript
await fetch('https://api.vapi.ai/call/phone', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer TU_VAPI_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    assistantId:   'TU_ASSISTANT_ID',
    phoneNumberId: 'TU_PHONE_NUMBER_ID',
    customer: { number: data.telefono, name: data.nombre }
  })
});
```

**Número para las llamadas:** usa el número que ya tienes registrado en Vapi para llamadas salientes.

**Nota sobre el número de teléfono mostrado:**  
El card de "Llamar a Sofia" en la sección LATAM fue reemplazado por el formulario.  
El número de llamadas también es geo-aware — pendiente de ajustar igual que WhatsApp:
- Colombia → número colombiano de Sofia  
- Resto del mundo → número internacional  
Esto se hace en la misma constante `WA_NUMBERS` o creando `CALL_NUMBERS` con la misma lógica.

---

### 4. 🤖 VERIFICAR GHL CHAT WIDGET
**Urgencia:** 🟡 Importante  
El widget de LeadConnector ya está embebido en el `<head>`:
```html
data-widget-id="69d334e30515dd19a13c80df"
```
✅ Verifica que este Widget ID corresponde a la cuenta de GHL correcta para el mercado que vas a lanzar.  
✅ Verifica que el widget de chat muestra a Sofia y no a un agente genérico.  
✅ **NO modifiques** el bloque del widget — está marcado como A2P 10DLC compliant.

---

### 5. 🌐 REDIRECT DE DOMINIO — sofia → principal
**Urgencia:** 🔴 Crítico  
El redirect ya está escrito en `netlify.toml`. Solo falta activarlo en Netlify:

**El netlify.toml YA contiene:**
```toml
[[redirects]]
  from = "https://sofia.ajbusinessadvisory.com/*"
  to   = "https://ajbusinessadvisory.com/:splat"
  status = 301
  force  = true
```

**Paso en Netlify (obligatorio para que funcione):**
1. Ve a tu sitio en Netlify → **Site Settings → Domain Management**
2. Agrega `sofia.ajbusinessadvisory.com` como dominio adicional del mismo sitio
3. Netlify detecta el toml y aplica el 301 automáticamente

Sin este paso el redirect NO funciona aunque el toml esté correcto.

---

### 6. 📄 CREAR PÁGINAS LEGALES
**Urgencia:** 🟠 Antes del lanzamiento público  
El footer tiene links a páginas que aún no existen:
- `/terms` → Términos de Servicio
- `/privacy` → Política de Privacidad

Crea esos archivos HTML o páginas en tu CMS antes del lanzamiento.

---

### 7. 🏆 FOUNDING MEMBERS BADGE
**Urgencia:** 🟢 Opcional / Decisión editorial  
El Plan 2 (Contenido Social) tiene un badge verde:
```
"Precios Founding Members disponibles — cupos limitados, consultar."
```
Este badge está **oculto** junto con los precios (clase `prices-locked`).  
Al activar los precios (punto 2), este badge se mostrará automáticamente.  
Decide si lo quieres mantener o quitar. Si lo quieres quitar, elimina:
```html
<div id="p2-founding" ...>Precios Founding Members disponibles — cupos limitados, consultar.</div>
```

---

### 8. 🗓️ VERIFICAR CALENDLY LINK
**Urgencia:** 🟢 Verificar  
Todos los botones de "Consultoría Gratuita" apuntan a:
```
https://calendly.com/andres-ajbusinessadvisory/30min
```
✅ Confirma que este link sigue activo y con disponibilidad configurada.

---

## 📦 CÓMO CORRERLO DESDE TU CLOUD

El sitio es **un solo archivo HTML** (`index.html`). No tiene backend propio ni build steps.

```bash
# Opción 1 — Netlify (recomendado, ya configurado)
# 1. Sube index.html + ULTIMO_LOGO_SIN_LUZ.png al repo GitHub
# 2. Netlify lo despliega automáticamente desde el branch main
# 3. El netlify.toml ya tiene headers, cache y redirects configurados

# Opción 2 — Cualquier servidor estático
# Solo necesitas servir index.html + ULTIMO_LOGO_SIN_LUZ.png en la misma carpeta
```

**Archivos que deben estar en la misma carpeta:**
```
📁 raíz del sitio
├── index.html                  ← TODO el sitio
├── ULTIMO_LOGO_SIN_LUZ.png     ← Logo (usado en nav, watermark, modal)
├── netlify.toml                ← Config de Netlify (headers + redirects)
└── netlify/
    └── functions/              ← Si agregas funciones serverless (Vapi, etc.)
```

---

## 🔍 BÚSQUEDAS RÁPIDAS EN index.html

| Qué buscar | Para qué |
|-----------|---------|
| `16696662773` | Número de WhatsApp de prueba → reemplazar con el real |
| `prices-locked` | Clase que oculta precios → quitar cuando estén listos |
| `api-section` | Sección de demo de voz → cambiar `display:none` a `block` |
| `69d334e30515dd19a13c80df` | Widget ID de GHL → verificar |
| `calendly.com/andres-ajbusinessadvisory` | Links de consultoría → verificar vigencia |
| `ULTIMO_LOGO_SIN_LUZ.png` | Ruta del logo → asegurarse de que el archivo esté en la raíz |

---

## ✅ CHECKLIST RÁPIDO GO/NO-GO

**🔴 CRÍTICOS (sin estos, el sitio no está listo)**
- [ ] `WA_NUMBERS.CO` reemplazado con número real de Colombia en `index.html`
- [ ] Clase `prices-locked` removida del `<section id="precios">`
- [ ] `sofia.ajbusinessadvisory.com` agregado como dominio adicional en Netlify → redirect 301 activo

**🟡 IMPORTANTES (antes del primer cliente)**
- [ ] GHL widget ID `69d334e30515dd19a13c80df` verificado y activo
- [ ] Vapi conectado → sección `#api-section` cambiada a `display:block`
- [ ] Calendly link con disponibilidad real configurada

**🟠 ANTES DEL LANZAMIENTO PÚBLICO**
- [ ] Páginas `/terms` y `/privacy` creadas
- [ ] Founding Members badge (Plan 2) — decidir si se mantiene
- [ ] Archivo `ULTIMO_LOGO_SIN_LUZ.png` confirmado en la raíz del deploy

---

*Generado por Claude (sesión AJ Business Advisory / Sofia Demo) — 2026-05-08*
