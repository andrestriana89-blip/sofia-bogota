# Actualizaciones de Andrés — AJ Business Advisory
> Este archivo es el punto de sincronización entre el sitio USA (aj-business-advisory) y el sitio Colombia (sofia-bogota).
> **Andrés:** agrega una entrada aquí al terminar cada sesión de trabajo.
> **Valentina:** este archivo se lee automáticamente al iniciar cada sesión.

---

## 2026-07-07 — Sesión Andrés — Propuestas Procesos & Procesos + Regla Estilo

**Repos tocados:** aj-business-advisory → `clients/Procesos & Procesos/ThirdWish/propuestas/` · `clients/Procesos & Procesos/Wolf/propuestas/` · `clients/Procesos & Procesos/Safeti/propuestas/` · `brain/session-logs/2026-07-07.md`

**Cambios realizados:**
✅ **3 propuestas P&P finalizadas en PDF** — ThirdWish, Wolf Mensajería, Saphety by Sovos
✅ **Firmas corregidas** — firmantes: Luz Marina Torres (P&P) + Andres Camilo Triana Morales (AJ). Los clientes finales (ThirdWish/Wolf/Saphety) NO aparecen — ellos se entienden con Luz Marina directamente
✅ **Saphety — cláusula garantía de volumen** suavizada: se acuerda directamente con el cliente, sin número fijo ni penalidad de dinero
✅ **PDFs enviados a valentina@ajbusinessadvisory.com** para revisión antes de presentar a Luz Marina
✅ **Regla guardada en memoria**: todas las propuestas futuras usan HTML/CSS puro → PDF Playwright. Ver `memory/feedback_proposal_style.md`

**Para Valentina:**
- Tienes 3 PDFs en tu correo (asunto: "Propuestas P&P — ThirdWish, Wolf, Saphety") para revisar
- Una vez que las apruebes, Luz Marina las lleva directamente a cada empresa
- Andres NO contacta a ThirdWish/Wolf/Saphety — relación 100% a través de Luz Marina

---

## 2026-06-30 — Sesión Andrés — Kits Representantes Colombia + USA

**Repos tocados:** aj-business-advisory → ops/vendedores/kit-representante-colombia.html · ops/vendedores/kit-representante-usa.html · memoria/project_sofia_voice_colombia.md · memoria/reference_sofia_outbound_system.md

**Cambios realizados:**
✅ **Kit Representante Colombia** creado (`ops/vendedores/kit-representante-colombia.html`) — guía completa para vendedores Colombia con todos los planes COP, pitch scripts, manejo de objeciones y lanzador Sofia Outbound integrado
✅ **Kit Representante USA** creado (`ops/vendedores/kit-representante-usa.html`) — versión espejo para mercado USA con precios USD, misma estructura
✅ **Sofia Voice** agregada al pricing de ambos kits — $500K COP/mes · 300 min · Setup $1.2M (Colombia) y plan equivalente USD
✅ **Lanzador Sofia Outbound** integrado en ambos kits → apunta a ajbusinessadvisory.com/ops/call (sistema ya existía, no se construyó de nuevo)
✅ **Memoria actualizada** — Sofia Outbound documentada como sistema existente; Sofia Voice Colombia documentada como producto activo

**Para Valentina:**
- Los kits en `ops/vendedores/` son para Daniel (BizDev Colombia) y futuros reps. No son documentos de cliente.
- Kit Colombia incluye pitch scripts en español con tuteo. Kit USA incluye versión inglés/español.
- Si Daniel te pide algo relacionado con el kit, los archivos ya están en el repo.

**Pendientes:**
- [ ] Daniel debería revisar y validar los pitch scripts del kit Colombia antes de salir a vender

---

## 2026-06-19 — Sesión Andrés — Seguridad + Notion + Lorena CRM
**Repos tocados:** aj-business-advisory → webhook/main.py, brain/session-logs/2026-06-19.md

**Cambios realizados:**
✅ Auditoría de seguridad completa del backend FastAPI — 8 vulnerabilidades parchadas + fix adicional de PIN vacío (commits 49e9133 y 92b66f6)
✅ Notion — links `/doc/` de clientes activos actualizados con `?token=aj2026` (Natalia: 9 links, Johana: 5, Perfumería: 1, Casa Matriz: 4)
✅ Notion — creado card CRM para Lorena Rodríguez (COL-002): MRR $1.5M COP, WA +57 311 2005380, docs linkeados

**Pendientes:**
- [ ] Lorena Rodríguez — configurar ManyChat (comentarios → DM automático)
- [ ] Jaqueline Zambrano y Yineth Decor JPE — standby, reactivar cuando Andrés lo indique

**Para Valentina:**
- Lorena tiene Instagram Growth activo a $1.5M COP/mes — ya tiene card en Notion
- Si Lorena pide algo de ManyChat, avisarle a Andrés — pendiente de configurar

---

## 2026-06-09 — Sesión Valentina — El de los Datos: parrilla operativa + notificaciones diarias + estrategia 60/40

**Repos tocados:**
- `sofia-bogota` → `el-de-los-datos/Parrilla de Contenido-Los_Datos/parrilla-el-de-los-datos-junio-2026.html`, `el-de-los-datos/.../index.html`, `render.yaml`

**INFORME PARA EL CLAUDE DE ANDRÉS — leer antes de tocar la parrilla de El de los Datos:**

### 1. La parrilla ya está DESPLEGADA en Render
- Servicio nuevo: **`parrilla-eldelosdatos`** → **https://parrilla-eldelosdatos.onrender.com**
- Está en `render.yaml` + creado manualmente en el dashboard. Auto-deploy desde `main`.
- La cuenta es **@eldelosdatos.tech** ("Te Tiro El Dato"), canal de divulgación tech de AJ. Métricas reales: **121 seguidores**, 3.077 visualizaciones/30d, 61% de no seguidores, reels = 91,5% de las vistas.

### 2. Notificación diaria — YA EXISTE (vía Google Calendar, NO automática)
- Cada pieza tiene botón **"📋 Notificar el plan de este día"** → crea evento en Google Calendar en su fecha (9am).
- Hay selector **"Notificar a"**: Andrés (`andres@ajbusinessadvisory.com`), Valentina, o ambos → se añaden como **invitados** al evento (les llega la notificación sin crear cuentas).
- Tipos de notificación diferenciados: **"📋 Plan del día"** (pieza programada) vs **"💡 Idea"** (desde Mis Ideas).
- **⚠️ LO QUE NO SE DEBE / NO SE NOTIFICA al calendario:**
  - Los **días de descanso** (no son piezas, no llevan evento).
  - Las **ideas sueltas** salvo que se pulse "Notificar esta idea" — no se auto-agendan.
  - Las **historias improvisadas** del día a día (cercanía) — van aparte, no son parrilla.
  - La notificación es **manual y opt-in** (un clic por pieza). NO hay agendado automático del mes todavía → eso es un pendiente (Calendar API / Make).

### 3. Cambio de estrategia de contenido → 60 / 40 (importante)
Por solicitud de Valentina, la mezcla de El de los Datos pasa a:
- **60% Tips + Noticias de IA + Tecnología** (alcance/autoridad — el motor de la marca tech).
- **40% Contenido vendible por nicho** = "cómo un dentista/gimnasio/etc. tiene videos virales". Le habla directo a quien compra Instagram Growth; cada reel es portafolio vivo + anzuelo de lead.
- Razón: es la necesidad actual de los clientes de growth. La parrilla ya tiene el análisis de content creator + marketing y un playbook de nichos (dentistas, gimnasios) en la pestaña Estrategia.

### 4. Otras funciones nuevas de la parrilla (para que no las rompas)
- Capturador "Sube tu idea" + enlace de referencia → pestaña "Mis Ideas" (agrupa por mes).
- Checkpoint por pieza (idea→grabado→editado→publicado) + barra de progreso.
- Agenda "¿Qué toca grabar?" + Recordatorio de hoy + Calendario interno de mes.
- **Sincronización entre dispositivos = respaldo manual** (Exportar/Importar JSON). Todo se guarda en `localStorage` (por dispositivo). Pendiente evaluado: Google Sheets vía Apps Script (Valentina montará la hoja).

**Pendientes / decisiones para Andrés:**
- [ ] ¿Activaste **Auto-Deploy** en el servicio `parrilla-eldelosdatos` de Render? (para que tome siempre el último commit).
- [ ] Si quieres recibir las notificaciones de contenido, confirma que `andres@ajbusinessadvisory.com` es el correo a invitar.
- [ ] Opcional a futuro: automatizar el agendado del mes completo (Calendar API o Make) para no agendar pieza por pieza.

---

## 2026-05-21 — Solicitud de acceso — Valentina necesita permisos en 2 plataformas

**Andrés, acción requerida — dos pasos rápidos:**

### 1. GitHub — Colaboradora en `aj-business-advisory`
Para que Valentina pueda editar y hacer push directamente al repo del sitio USA sin depender de ti.

**Pasos:**
1. Ir a: `https://github.com/andrestriana89-blip/aj-business-advisory`
2. Settings → Collaborators → Add people
3. Buscar: `valentina` (preguntarle a Valentina su usuario de GitHub)
4. Rol: **Write** (puede hacer push, no puede borrar el repo)

### 2. Render — Acceso al dashboard del sitio `ajbusinessadvisory.com`
Para que Valentina pueda ver el estado de los deploys, logs de errores y variables de entorno del sitio USA.

**Pasos:**
1. Ir a: `https://dashboard.render.com`
2. Settings del equipo → Members → Invite member
3. Email de Valentina → Rol: **Member** (puede ver y hacer deploys, no puede borrar servicios)

### Por qué es importante
Hoy Valentina necesitó actualizar `landing/demo.html` y `webhook/main.py` para agregar la sección "Nuestras Marcas" con Academia + Mi Voz, y actualizar las rutas `/voz`, `/mivoz`, `/mi-voz` para la nueva landing de Mi Voz (necesaria para MinTIC el 23 mayo). Lo hizo clonando el repo localmente — funciona, pero sin acceso colaborador no puede hacer push directo.

**Los cambios están listos en la máquina de Valentina** — una vez que le des acceso, ella hace el push y Render despliega automáticamente.

---

---

## 2026-05-19 — Mensaje de Valentina para Andrés — Mi Voz: demo interactivo + perfil propio

**Para Andrés:**

### 1. Demo interactivo con frases pre-diseñadas y selector de voz

Cuando alguien abre el demo en `mi-voz-app.onrender.com` por primera vez, necesita poder **escuchar cómo suena la app** antes de decidir si la compra. Hoy la pantalla queda vacía y no se entiende qué hace.

**Lo que se necesita:**
- En la pantalla de **VoiceSetup** (la primera que ve el usuario), agregar un bloque de "Escucha cómo suena":
  - Botón voz masculina 👴 → reproduce una frase de ejemplo con la voz de George
  - Botón voz femenina 👵 → reproduce una frase de ejemplo con la voz de Norah
- **Frases sugeridas para el demo** (usar los MP3 que ya existen):
  - *"Buenos días. ¿A quién quieres llamar hoy?"*
  - *"Tu familia está aquí. Solo toca su foto."*
  - *"Muy bien. Conectándote con María..."*
- El usuario escucha → elige la voz que prefiere → entra a la app
- Esto convierte el VoiceSetup en una experiencia de venta, no solo configuración

**Por qué es importante:** Sin esto, quien abre el demo no entiende el propósito. Con esto, en 10 segundos ya escuchó la app y quiere comprarla.

**Implementación sugerida:** En `VoiceSetup.jsx`, agregar dos botones de reproducción de audio antes del botón "Confirmar". Los archivos MP3 ya están en `public/audio/male/` y `public/audio/female/`.

---

### 2. Perfil propio del adulto mayor

En la app Mi Voz, agregar la posibilidad de que el adulto mayor pueda tener **su propio perfil** dentro de la app:
- **Su nombre** — para que la app lo salude por su nombre personalizado (hoy el nombre lo pone el cuidador, pero el adulto mayor debería poder verlo/confirmarlo o que aparezca en la pantalla de inicio como "Hola, [Nombre]")
- **Su foto** — una foto de perfil del adulto mayor, que aparezca en la app (por ejemplo en el panel del cuidador o en la pantalla de inicio como identificación visual)

**Por qué:** Personaliza la experiencia y hace que el adulto mayor sienta que la app es suya, no solo una herramienta del cuidador. También es útil si hay varios dispositivos en una familia o clínica.

**Sugerencia de implementación:** En `CuidadorSetup.jsx`, agregar campo "Foto del usuario" (igual que se agregan fotos de contactos, desde galería) y campo "Nombre del usuario" ya existe pero revisar si es editable visualmente. Guardar en localStorage junto con los contactos.

---

## 2026-05-18 — Sesión Andrés (noche, Sesión 2) — Mi Voz: Voces ElevenLabs + Multi-idioma + Sales Pages

**Repos tocados:**
- `aj-business-advisory` → `clients/mi-voz/app/` — Voces, multi-idioma, landing pages

**LO QUE SE CONSTRUYÓ (sesión 2 de hoy):**

### 1. Voces ElevenLabs pre-generadas
- 64 archivos MP3 en español: `public/audio/male/` (Don Gilberto) y `public/audio/female/` (Norah)
- La app ya NO usa Web Speech API — usa ElevenLabs. Mucho mejor calidad.
- Voz masculina: **George** (`JBFqnCBsd6RMkjVDRZzb`) — misma voz de Don Gilberto
- Voz femenina: **Norah** (`kcQkGnn0HAT2JRDQ4Ljp`) — cálida, latinoamericana
- Script para regenerar: `scripts/generate-mi-voz-audio.js`

### 2. Pantalla de bienvenida nueva — Selector de voz
- Primera vez que se abre la app: el usuario elige voz masculina 👴 o femenina 👵
- Se guarda en localStorage. El cuidador puede cambiarlo desde el panel (con PIN).

### 3. Multi-idioma Español / Inglés completo
- `src/i18n.js` — sistema de traducciones (todas las frases, UI, categorías)
- Auto-detección por `navigator.language` del celular
- Toggle ES|EN en la pantalla de bienvenida y en el panel del cuidador
- 64 audios adicionales en inglés: `en-male/` + `en-female/`
- **Total: 128 audios ElevenLabs en la app**
- Toda la UI traducida: tabs, botones, frases, pantalla de PIN

### 4. Estrategia de producto acordada
- **Precio:** $19 USD pago único — TODO incluido (se cambia de $10 en Gumroad)
- **Canal clínico nuevo:** Licencia Clínica $99 — para fonoaudiólogos que la usan con sus pacientes
- Los dos canales coexisten: consumidor ($19) + institucional ($99)

### 5. Páginas de ventas creadas
- `landing/mi-voz-sales.html` — Español (para familias + fonoaudiólogos)
- `landing/mi-voz-sales-en.html` — Inglés (families + clinicians)
- 9 secciones: hero, historia Don Gilberto, problema, 4 pilares, cómo funciona, voces, planes, FAQ, CTA final
- Todos los CTAs apuntan a Gumroad

**Commits:**
- `7cdac56` — feat: voces ElevenLabs con selector masculina/femenina
- `cd4c61b` — feat: multi-idioma ES/EN completo
- `ae7e91d` — feat: sales pages ES + EN con canal clínico

**Pendientes para Valentina — Mi Voz:**
- [ ] Logo y paleta de colores de marca para Mi Voz (esto sigue pendiente)
- [ ] Dominio `mivozcuida.com` — hablar con Andres cuando esté en Colombia
- [ ] Video demo de la app para insertar en las páginas de ventas (reemplazar sección placeholder)
- [ ] Buscar 1 fonoaudiólogo(a) beta para validación clínica antes de escalar el canal $99

---

## 2026-05-18 — Sesión Andrés — App Mi Voz COMPLETA y en producción

**Repos tocados:**
- `aj-business-advisory` → `clients/mi-voz/app/` — PWA completa construida desde cero y desplegada

**LO QUE SE CONSTRUYÓ HOY (importante leer todo):**

Construimos la app completa "Mi Voz" — una Progressive Web App para el abuelito de Andres (y para adultos mayores en general). La app ya está LIVE en producción.

**URL en producción:** https://mi-voz-app.onrender.com

### Las 5 pantallas de la app:

1. **Pantalla de Inicio** — Contactos con fotos grandes. El adulto mayor toca una foto y llama.
2. **Pantalla de Llamada** — Dos opciones: videollamada por Jitsi Meet (gratis, sin descargar nada) o WhatsApp.
3. **Panel del Cuidador** — Protegido con PIN **1234**. Aquí se agregan/borran contactos con foto, nombre y WhatsApp.
4. **Hub de Juegos** — Sopa de Letras (12x12, 10 palabras en español) + Juego de Memoria (16 cartas, 8 pares de emojis).
5. **Signos Vitales** — Dashboard con SpO2, frecuencia cardíaca, pasos y temperatura. Los datos son simulados por ahora (para la presentación en Colombia está perfecto así).

### Datos técnicos:
- React 18 + Vite + PWA (instalable en celular como app nativa en Android)
- Sin backend, sin base de datos — todo en localStorage del celular
- Código en: `clients/mi-voz/app/` del repo principal
- Deploy automático en Render (cada push al repo actualiza la app en 2 minutos)
- Commit: `87b9112`

**Pendientes para Valentina:**
- [ ] Crear logo y paleta de colores de marca para Mi Voz
- [ ] Definir un contacto demo pre-cargado para las presentaciones (para que no aparezca vacío)
- [ ] Registrar dominio `mivozcuida.com` (hablar con Andres)
- [ ] Verificar con el profesor de la universidad si la propiedad intelectual es de Valentina (no de la universidad)
- [ ] PIN 1234 hay que cambiarlo antes de dársela a usuarios reales — está en `CuidadorSetup.jsx` línea donde dice `'1234'`

**Documentación completa en Notion:**
https://www.notion.so/3656fc7b0fb681e78e0ce8a3ee8e06a5

---

## 2026-05-14 — Sesión Andrés (tarde — tareas Valentina + infra)

**Repos tocados:**
- `aj-business-advisory` → `CLAUDE.md` (regla deploy 1/día agregada)
- `sofia-bogota` → `index.html`, `netlify/functions/ghl-contact.js` (nuevo)

**Cambios realizados:**
- ✅ **CLAUDE.md aj-business-advisory** — protocolo de publicación (1 deploy/día) agregado al inicio del archivo
- ✅ **Netlify function `ghl-contact.js`** creada — reemplaza el webhook placeholder de GHL. Los formularios de Academia (Mentoría, Cursos Waitlist, Cuéntanos, Preview Agente) ahora envían leads directo a GHL API v2 sin necesitar URL del dashboard
- ✅ **`index.html`** — `GHL_WEBHOOK_URL` placeholder eliminado. `sendToGHL()` ahora llama `/.netlify/functions/ghl-contact`
- ✅ **Netlify env vars** — `GHL_API_KEY` agregada (`pit-8bce0e4f-...`). `VAPI_API_KEY` ya existía

**Estado sitios Colombia:**
- `sofia.ajbusinessadvisory.com` → ✅ 200 OK
- `sofiabogota.netlify.app` → ✅ 200 OK (el 503 de Valentina se resolvió solo)

**Pendientes para Valentina (de tu sesión de hoy):**
- [ ] Reescribir propuesta Bunny Burger → SOLO Sofia DMs (sin producción de contenido). El pitch: Sofia responde DMs de Instagram y/o WhatsApp mientras el local está cerrado lunes-miércoles
- [ ] Propuesta Ruztik: agregar argumento SEO ("Google puede encontrarte aunque no te busquen por nombre")
- [ ] Propuesta Ruztik: agregar ROI en 1 cliente B2B (si un cliente vale $5M–$20M COP, un solo proyecto extra paga todo el Plan C)
- [ ] Propuesta Ruztik Plan A: agregar mantenimiento $150.000 COP/mes como add-on
- [ ] Propuesta Ruztik: agregar bloque "Sofia como siguiente paso" con precio $300.000 COP/mes
- [ ] Editar Video 1 del abuelo (VIDEO-2026-05-13-13-18-27.mp4 — "quiero roscón") según brief en `sofiabogota.netlify.app/docs/brief-videos-abuelo.html`
- [ ] Subir video editado a YouTube (puede ser no listado) → mandar link a Andrés por WhatsApp

---

## 2026-05-14 — Protocolo de publicación (Valentina → Andrés)

**⚠️ ANDRÉS — ACCIÓN REQUERIDA: agregar a tu CLAUDE.md**

Los créditos de Netlify/Render se están agotando rápido porque se hace push por cada cambio pequeño.

**Nueva regla para los dos:** máximo **1 deploy por día** por sitio.

Agrega esto al inicio de tu `CLAUDE.md` en `aj-business-advisory`:

```markdown
## 🚨 PROTOCOLO DE PUBLICACIÓN — NETLIFY Y RENDER

Regla: máximo 1 deploy por día por sitio.

Antes de cualquier git push que dispare un deploy, Claude debe:
1. Preguntar: "¿Tienes algo más para este sitio hoy? Solo podemos subir UNA vez al día."
2. Sugerir: "Revisa los cambios en el HTML local antes de publicar."
3. Solo entonces hacer el commit + push.

Aplica para: Netlify, Render, cualquier plataforma de deploy automático.
```

El `CLAUDE.md` del repo `sofia-bogota` ya tiene esta regla activa.  
Instrucciones completas en: `docs/INSTRUCCION-PARA-ANDRES-CLAUDE.md`

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

## 2026-05-14 — Sesión Andrés (tarde)

**Repos tocados:**
- `aj-business-advisory` → `landing/demo.html`, `status/clients/natalia-dentalia.md`, `brain/session-logs/2026-05-14.md`

**Cambios realizados:**

### Sitio ajbusinessadvisory.com — actualizado con diseño de Valentina ✅
- `landing/demo.html` reemplazado con el archivo index.html que Valentina mandó por WhatsApp
- Formulario "Sofia te llama" reparado: apuntaba a `/.netlify/functions/start-call` (incorrecto en Render) → corregido a `/demo/call`
- Logo reparado: el archivo referenciado (`ULTIMO_LOGO_SIN_LUZ.png`) era una tarjeta de presentación de otra persona → corregido a `/assets/logo.png` (logo real de AJ)
- 3 commits pusheados → Render desplegó automáticamente

### Meta WABA Natalia — verificación del negocio iniciada ✅
- WABA lleva +72h en PENDING → raíz del problema: BM "DENTALIA Portfolio comercial" no tenía verificación de negocio
- Verificación iniciada desde BM Security Center: nombre registrado "DENTALIA ODONTOLOGIA SAS"
- Meta confirmó: **"En revisión"** → aprobación esperada ~2026-05-16 (2 días hábiles)
- **Cuando Meta apruebe:** número pasa a CONNECTED automáticamente → Sofia responde sin tocar nada

**Pendientes Valentina:**
- [ ] Página Natalia (dranataliabarrantes.com en Netlify) — sigue pendiente de la sesión anterior
- El sitio USA (ajbusinessadvisory.com) ya tiene tu nuevo diseño publicado ✅

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

---

## 2026-07-08 — Sesión Andrés (Sofia Content Coach — WF-40 + WF-41 automatizados)

**Repos tocados:** aj-business-advisory → `webhook/main.py`, workflows N8N WF-40 (`E3ey0VTF19bVWNCJ`) y WF-41 (`ahiuwCmyj9E9gLSV`), memoria

**Cambios realizados:**
- ✅ Corregido bug crítico: Sofia Content Coach (WF-40) nunca leía datos reales de clientes en Supabase — trataba a todos como usuarios nuevos siempre. Ya funciona.
- ✅ WF-41 (generador de parrilla) rediseñado — ahora usa datos REALES de Instagram (Apify) en vez de solo inventar ideas con IA.
- ✅ Estructura de contenido fija aplicada: siempre 6 Reels + 8 Carruseles + 4 Publicación Random + 7 Historias = 25 piezas/mes (la estructura oficial de Instagram Growth).
- ✅ Todo el flujo quedó automático: alguien completa el onboarding por WhatsApp → se genera su parrilla real solo, sin que nadie tenga que dispararlo a mano.
- ✅ Nuevo: Sofia ahora puede iniciar la conversación ella misma (antes solo respondía si el cliente escribía primero) — Andrés da el número y Sofia se presenta.
- ✅ Cargada la parrilla real de julio de @eldelosdatos_tech como demo para que Valentina probara el bot por WhatsApp — ya le llegó el mensaje de presentación.
- ✅ El número +1 (669) 322-4787 ahora es de Sofia Content Coach (antes era de Sofia Personal).

**Pendientes:**
- [ ] Valentina: probar el bot escribiendo "idea", "script" y "parrilla" al +1 (669) 322-4787 y avisar si algo se siente raro.
- [ ] Falta construir la página web del calendario visual (el link que menciona el comando "parrilla" todavía no existe).
- [ ] Si alguien de la familia le escribe al +1 (669) 322-4787 esperando a Sofia Personal, ya no va a responder como antes — avisar si eso pasa.

---

## 2026-07-09 — Sesión Andrés (dashboard de parrilla + facturación y contratos)

**Repos tocados:** aj-business-advisory → `webhook/main.py`, `landing/content/calendar.html`, `clients/lorena-rodriguez/`, `clients/natalia-dentalia/`, `clients/dra-bejarano/`, `ops/`, `finance/billing-ledger.md`, `CLAUDE.md`, workflows N8N #23/#24/#14

**Cambios realizados:**
✅ **Página `/content/[slug]` en producción** — el link que Sofia manda con "parrilla" ya funciona (antes daba 404). Marcar grabado, editar, notas, buscar/filtrar, contadores, regenerar con IA.
✅ **Corregido error real en el contrato de Lorena** — llevaba semanas documentado mal como "$1.990.000 mes 2+" en status/CLAUDE.md; el contrato firmado dice $1.500.000 fijo. Ya está corregido en todos lados.
✅ **Otrosí #1 de Lorena firmado por AJ, pendiente de firma de ella** — a solicitud de ella, sube a $2.000.000 COP/mes, 25 piezas (12 Reels + 13 Posts Variables). Las Historias ya no las produce AJ — las sube ella misma, se le indican por la parrilla.
✅ **Cobro #002 de Lorena ya generado** ($2.000.000 COP) — Andres lo envía entre el 15 y el 20 de julio.
✅ **Propuesta de Dra. Catherine Bejarano corregida** (sexóloga, Bogotá) — quitado "Antes/Después" (es de clínicas dentales/estéticas, no aplica a su nicho), reemplazado por "Preguntas Anónimas". PDF listo para enviar por WhatsApp.
✅ **Encontrada y arreglada la causa real de por qué el facturador automático nunca avisaba nada** — el repo de GitHub es privado y el sistema nunca tuvo permiso para leerlo. Ya está conectado y funcionando.
✅ **Plan de fidelización por referidos documentado** — Natalia y Lorena tienen 50%/30%/20% (trato especial por ser las primeras clientas), todo cliente nuevo de ahí en adelante tiene 30%/20%.

**Para Valentina:**
- Si Lorena pregunta por qué su factura de julio dice $2.000.000 en vez de $1.500.000, es porque ella misma pidió más contenido (25 piezas en vez de 24) — el Otrosí #1 lo documenta.
- Recuerda subir las Historias de Lorena tú misma desde ahora — se las vamos a indicar en la parrilla, ya no las graba/publica AJ.
- La propuesta de Dra. Bejarano (sexóloga) está lista para enviar — avísame si necesitas el PDF.

**Pendientes:**
- [ ] Firmar el Otrosí #1 con Lorena.
- [ ] Enviar cobros #004 de Natalia y #002 de Lorena en sus ventanas.
- [ ] Enviar propuesta de Dra. Bejarano por WhatsApp.

---

## 2026-07-10 — Sesión Andrés (ajustes propuesta Dra. Bejarano)

**Repos tocados:** aj-business-advisory → `clients/dra-bejarano/propuestas/`

**Cambios realizados:**
✅ Agregados requisitos a la propuesta de Dra. Bejarano: acceso a Meta Business Suite, disponibilidad de 3-4 horas para grabación (antes 1-2 horas).
✅ Agregado el bot de contenido (Sofia Content Coach) como add-on **gratuito** destacado en la oferta.
✅ Quitada la nota vieja de "graba desde el celular" — ya no aplica con la sesión de grabación con AJ.

**Pendientes:**
- [ ] Enviar la propuesta actualizada de Dra. Bejarano por WhatsApp.

---

## 2026-07-10 — Sesión Andrés (análisis Claude Design)

**Repos tocados:** aj-business-advisory → `brain/session-logs/2026-07-10.md`

**Cambios realizados:**
✅ Analizada la herramienta "Claude Design" (Anthropic Labs) y comparada contra el pipeline actual de propuestas/carruseles. Decisión: no reemplaza el flujo actual (pierde control de marca y versionado en git), pero se puede probar para pitch decks de prospectos nuevos.

**Pendientes:**
- [ ] Sigue pendiente: firmar Otrosí #1 con Lorena, enviar cobros #004 Natalia y #002 Lorena, enviar propuesta Dra. Bejarano por WhatsApp.
