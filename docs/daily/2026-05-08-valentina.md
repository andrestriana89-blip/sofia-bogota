# Session Log — 2026-05-08

## Acciones completadas

### Contrato Paula — `FREELANCE/PAULA/contrato-paula-dentalia.html`
- Agregada sección 1.B — Naturaleza freelance: sin vínculo laboral, sin pagos de ley (EPS, pensión, ARL, cesantías, prima, SENA, ICBF)
- Modificado flujo de pago: eliminada la "cuenta de cobro" — pago automático a los 5 días hábiles por cumplimiento de contrato
- Reescrita cláusula 6.2 — prohibición expresa de reutilizar material en proyectos personales o para otros clientes
- Reescrita cláusula 7.2 — tratamiento de datos: responsabilidad del consultorio (Responsable), AJ como Encargado, Paula como sub-encargada sin obligación de recolectar autorizaciones
- Reescrita cláusula 7.3 — Paula NO tiene acceso a ninguna cuenta digital (redes, Meta, GHL, ManyChat, Sofia AI, etc.)
- Fechas actualizadas: documento 8 mayo 2026 · vigencia 12 mayo → 12 agosto 2026
- Sistema de firmas rediseñado: cada parte firma en su dispositivo → descarga `.sig` → lo manda a Valentina → Valentina carga los dos `.sig` → se genera el contrato final completo con ambas firmas + `.md` automático
- Botones "📥 Cargar firma" agregados en ambos bloques de firma (Andrés y Paula)
- Al confirmar firma individual → descarga `.sig` + abre diálogo impresión para PDF personal

### Parrilla — `FREELANCE/PAULA/parrilla-dentalia-mayo-2026.html`
- Sin cambios esta sesión — ya estaba completa de sesión anterior

### Netlify — Publicación de archivos
- Contrato publicado: https://contrato-paula-dentalia.netlify.app/
- Parrilla publicada: https://parrilla-dentalia-aj.netlify.app/ (PIN: AJN2026)
- Ambos sitios bajo cuenta Consulting en Netlify — actualizables vía Deploys drag & drop

### Memoria — `memory/contratos_sistema.md`
- Creado sistema de numeración consecutiva de contratos: `#[AÑO]-[CLIENTE]-[NRO]`
- Registrado contrato #2026-DNT-001 con links Netlify y ruta local
- 7 cláusulas obligatorias definidas para todo contrato freelance AJ Business Advisory

---

## Decisiones tomadas

- **Sin cuenta de cobro**: el contrato es el respaldo legal — no se depende de que Paula emita documento
- **Paula sin acceso a cuentas**: su rol es 100% producción y entrega en Drive — cero acceso a redes o herramientas
- **Firmas por .sig**: cada parte firma en su dispositivo → Valentina combina los dos archivos → genera el documento final
- **Netlify con cuenta**: permite actualizar el link sin que cambie la URL — Paula siempre usa el mismo link
- **Tratamiento de datos**: el consultorio es el Responsable del Tratamiento — AJ no necesita pedir autorizaciones adicionales a pacientes

---

## 🔴 Pendientes URGENTES — Esta semana

- [ ] **Acomodar firmas en el contrato** — Paula y Andrés deben enviar sus archivos `.sig` a Valentina → cargarlos en el contrato → generar PDF final con ambas firmas + `.md`
- [ ] **Subir contrato firmado al Drive y Cerebro Madre** — Una vez generado el PDF final, guardarlo en `drive.google.com/drive/folders/0AHj-zuQWE_fTUk9PVA` y en `memory/` del proyecto
- [ ] **Re-subir contrato a Netlify** — La carpeta `contrato-deploy/` del Escritorio tiene la versión más reciente — arrastrarla al Deploys de `contrato-paula-dentalia`
- [ ] **Número real de WhatsApp de Dra. Natalia** — Reemplazar `57XXXXXXXXXX` en `linkinbio-natalia.html` y `parrilla-dentalia-mayo-2026.html`
- [ ] **Dirección del consultorio** — Pedirla a Natalia → actualizar `contrato-paula-dentalia.html` + `linkinbio-natalia.html`
- [ ] **Publicar contenido de agentes HOY** — Redes sociales AJ Business Advisory / Sofia

## 🟡 Pendientes Esta semana / Pronto

- [ ] **AJ Landing — Revisión desktop** — Todo se hizo en preview mobile. Verificar layout 2 columnas de precios, metodología y logo en pantallas grandes
- [ ] **AJ Landing — Conectar APIs** (Andrés): Vapi Assistant ID + WhatsApp real + publicar en ajbusinessadvisory.com
- [ ] **Link en bio IG + Facebook Dentalia** — Cambiar URL al `linkinbio-natalia.html`
- [ ] **Doctores equipo Dentalia** — Nombres y especialidades de los 3 placeholders A/B/C
- [ ] **Ajustar captions Posts 1–8** — Hook en primera línea + keyword ManyChat al final
- [ ] **CapCut video companion** — Instrucciones detalladas por post (música, timing, transiciones)

## 🟢 Proyectos en cola

- [ ] **Academia AJ Business Advisory** — HTML plataforma cursos. Confirmar: ¿landing de ventas o plataforma con login?
- [ ] **Política de Tratamiento de Datos AJ** — Documento de 1 página para publicar en sitio web (cubre a AJ como empresa legalmente)
- [ ] **ManyChat Dentalia** — Valentina configura keywords · Andrés conecta ManyChat → GHL → Sofia AI 24h
- [ ] **Drive → Meta Business Suite** — Programación automática según horario parrilla (Mar 12pm · Jue 12pm · Vie 7pm)

---

## Contexto para la próxima sesión

- **Firma del contrato**: Valentina espera los archivos `.sig` de Paula y Andrés — cargarlos en `https://contrato-paula-dentalia.netlify.app/` para generar el documento final
- **Netlify**: actualizar `contrato-paula-dentalia` con la carpeta `contrato-deploy/` del Escritorio (tiene los cambios de esta sesión)
- **Links maestros**: contrato → `https://contrato-paula-dentalia.netlify.app/` · parrilla → `https://parrilla-dentalia-aj.netlify.app/` (PIN: AJN2026)
- **Paleta marca Dra. Natalia**: #C09A55 · #E8D5B0 · #F2E8D8 · SIN MORADO
- **Primera entrega Paula**: domingo 10 de mayo antes 6pm
- **Sistema de contratos**: próximo contrato DNT = #2026-DNT-002 · primer contrato AJB = #2026-AJB-001

---

## Web AJ Business Advisory — Segunda sesión 2026-05-08

### Completado
- Modal "Nosotros" + botón flotante bottom-left (`#aj-float` + `#aj-info-modal`)
- "Sofia te llama" form — reemplaza `tel:` en LATAM, sin más "Seleccione una aplicación"
- WhatsApp geo-aware: `WA_NUMBERS.CO` (Colombia) vs `INTL` permanente
- Calculadora ROI: bug corregido USD/EUR — ya no muestra $0
- Nav logo-sub: "Automatización, precisión y estrategia" / "Marcas Sólidas · Colombia & Global"
- Visión: "aliado estratégico de las mejores marcas del mundo..."
- Redirect `sofia.ajbusinessadvisory.com → ajbusinessadvisory.com` en netlify.toml
- `ANDRES_LAUNCH_CHECKLIST.md` creado con URLs exactas de GitHub
- `CLAUDE.md` creado — zona protegida de diseño para Claude de Andrés
- Comando `/aj-web` — siempre git pull primero, editar, push al terminar
- 3 commits pusheados a `andrestriana89-blip/sofia-bogota` (main)

### Para Andrés — 3 críticos
1. `WA_NUMBERS.CO` → número real Colombia en index.html
2. Quitar clase `prices-locked` del `<section id="precios">`
3. Agregar `sofia.ajbusinessadvisory.com` en Netlify Domain Management

### Próxima sesión Dentalia
- `dentalia.html` reporta problema al abrir desde `file:///C:/Users/valen/.claude/sofia-demo%20(3)/Dentalia/dentalia.html`
- Revisar assets, rutas relativas y posibles errores JS al iniciar
