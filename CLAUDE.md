# CLAUDE.md — Instrucciones para AJ Business Advisory Website
### Archivo leído automáticamente por Claude Code al abrir este proyecto

---

## ⚠️ REGLA DE ORO — LEE ESTO PRIMERO

Este sitio tiene un diseño, sistema de animaciones y estructura visual que fue construido y aprobado por el equipo. **Andrés solo tiene tareas de conexión técnica.** Claude no debe sugerir, modificar ni "mejorar" nada del diseño visual bajo ninguna circunstancia.

---

## 🔴 ZONA PROTEGIDA — NO TOCAR BAJO NINGUNA CIRCUNSTANCIA

### Diseño visual
- Colores: las variables CSS (`--pink`, `--yellow`, `--bg`, `--text`, `--muted`) están bloqueadas
- Gradientes de texto (`.grad-text`) y animación `shimmerText` — no modificar
- Opacidades, bordes, sombras (`box-shadow`, `drop-shadow`) de cualquier componente
- Modo claro / modo oscuro (`html.light-mode`) — estructura y colores aprobados

### Animaciones y efectos
- Cursor spotlight (`#cursor-spotlight`) — intensidad, tamaño y lerp definidos
- Animaciones de entrada (`fade-up`, `@keyframes`, `cubic-bezier`) — no tocar
- Efectos de tilt 3D en cards (`applyTilt`, `resetTilt`) — no modificar
- Ticker / brand strip — velocidad y estilos fijos
- Logo watermark (`#bg-logo-watermark`) — opacidad y comportamiento con IntersectionObserver

### Layout y estructura
- Orden de las secciones — no reordenar
- Grid de precios (5 columnas desktop / carrusel mobile) — no cambiar
- Header fijo (`#site-header` con `position:fixed` y ResizeObserver) — no tocar
- Distribución de cards, padding, gap de cualquier sección

### Textos de marca
- Misión, Visión y Pilares en el modal `#aj-info-modal` — texto aprobado
- Hero headline (`#hero-h1`) y subtítulo (`#hero-sub`) — no modificar
- Contenido del modal "Nosotros" — aprobado por Valentina

---

## ✅ TAREAS PERMITIDAS PARA ANDRÉS

Estas son las únicas cosas que Andrés puede modificar. Ver detalle completo en `ANDRES_LAUNCH_CHECKLIST.md`.

### 1. Número de WhatsApp Colombia 🔴 Crítico
Buscar en `index.html`:
```javascript
const WA_NUMBERS = {
  CO:   '57XXXXXXXXXX',   // ← REEMPLAZAR con número real de Colombia
  INTL: '16696662773'     // Internacional — NO tocar
};
```

### 2. Activar precios 🔴 Crítico
Buscar en `index.html`:
```html
<section class="section section-dark prices-locked" id="precios">
```
Cambiar a:
```html
<section class="section section-dark" id="precios">
```

### 3. Redirect de dominio 🔴 Crítico
En Netlify → Site Settings → Domain Management:
Agregar `sofia.ajbusinessadvisory.com` como dominio adicional.
El `netlify.toml` ya tiene el redirect configurado.

### 4. Conectar Vapi — formulario "Sofia te llama" 🟡
En `index.html`, buscar la función `submitSofiaCall` y descomentar el bloque `fetch`:
```javascript
await fetch('https://api.vapi.ai/call/phone', {
  headers: { 'Authorization': 'Bearer TU_VAPI_KEY', ... },
  body: JSON.stringify({ assistantId: 'TU_ID', phoneNumberId: 'TU_PHONE_ID', ... })
});
```

### 5. Verificar GHL widget 🟡
Confirmar que `data-widget-id="69d334e30515dd19a13c80df"` es el correcto en el `<head>`.

### 6. Crear páginas legales 🟠
Crear archivos `/terms` y `/privacy` (el footer ya tiene los links apuntando ahí).

---

## 📋 PROTOCOLO OBLIGATORIO — Siempre en este orden

```
1. git pull origin main          ← SIEMPRE primero (puede haber cambios de Valentina)
2. Hacer solo los cambios de la lista de arriba
3. git add index.html netlify.toml
4. git commit -m "descripción clara del cambio"
5. git push origin main          ← SIEMPRE al terminar
```

**Nunca editar sin hacer pull primero.**  
**Nunca terminar sin hacer push.**  
Netlify despliega automáticamente tras cada push.

---

## 🗂️ Arquitectura del proyecto

```
sofia-bogota/
├── index.html                  ← TODO el sitio (único archivo)
├── ULTIMO_LOGO_SIN_LUZ.png     ← Logo (no reemplazar sin autorización)
├── netlify.toml                ← Headers, cache y redirects
├── ANDRES_LAUNCH_CHECKLIST.md  ← Lista detallada de tareas pendientes
└── CLAUDE.md                   ← Este archivo (instrucciones para Claude)
```

**El sitio es un único archivo HTML.** No tiene build steps, no tiene npm, no tiene framework. Solo HTML + CSS + JS en `index.html`.

---

## 🧠 Contexto de diseño (para referencia, no para modificar)

| Elemento | Valor fijo |
|----------|-----------|
| Color fondo | `#210012` |
| Color primario | `#d6006e` (pink) |
| Color acento | `#f5c400` (yellow) |
| Fuente | Inter (Google Fonts) |
| Radio bordes | `14px` |
| Header | `position:fixed` z-index 200 |
| Botones oscuro | Amarillo (`--yellow`) |
| Botones claro | Rosado (`--pink`) |

---

*Este archivo fue generado por el equipo de AJ Business Advisory — Valentina + Claude.*  
*Cualquier duda sobre diseño: consultar a Valentina antes de modificar.*
