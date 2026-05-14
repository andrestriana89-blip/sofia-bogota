# Instrucción para Andrés — agregar a tu CLAUDE.md

Copia el bloque de abajo y **pégalo al final del CLAUDE.md** del repo `aj-business-advisory`.

---

```markdown
## REGLA DE SINCRONIZACIÓN — OBLIGATORIO AL TERMINAR CADA SESIÓN

Al terminar CADA sesión de trabajo en este repo, antes de cerrar:

### Paso 1 — Escribir el resumen
Crea o edita el archivo `docs/andres-updates.md` en el repo **sofia-bogota**
(ruta relativa asumiendo ambos repos en la misma carpeta padre: `../sofia-bogota/docs/andres-updates.md`)

Formato de la entrada:
```
## YYYY-MM-DD — Sesión Andrés

**Repos tocados:**
- `andrestriana89-blip/aj-business-advisory` → archivos modificados
- `andrestriana89-blip/sofia-bogota` → archivos modificados (si aplica)

**Cambios realizados:**
- ✅ [qué se hizo]

**URLs actualizadas:**
- [URL en vivo]

**Pendientes:**
- [ ] [qué queda por hacer]
```

### Paso 2 — Commit y push a sofia-bogota
```bash
cd ../sofia-bogota
git add docs/andres-updates.md
git commit -m "update: resumen sesión Andrés [fecha]"
git push origin main
```

### Por qué es importante
- Valentina trabaja en el repo sofia-bogota y no tiene acceso al repo aj-business-advisory
- Este archivo es el único punto de sincronización entre los dos sistemas
- Claude de Valentina lee este archivo automáticamente al iniciar cada sesión
- Sin este archivo, Valentina y Claude no saben qué cambió en el sitio USA
```

---

## 🚨 PROTOCOLO DE PUBLICACIÓN — AGREGAR A TU CLAUDE.md

Copia este bloque y agrégalo al inicio del `CLAUDE.md` de tu repo `aj-business-advisory`:

```markdown
## 🚨 PROTOCOLO DE PUBLICACIÓN — NETLIFY Y RENDER

Regla: **máximo 1 deploy por día por sitio.**

Antes de cualquier `git push` que dispare un deploy, Claude debe:
1. Preguntar: "¿Tienes algo más para este sitio hoy? Solo podemos subir UNA vez al día."
2. Sugerir: "Revisa los cambios en el HTML local antes de publicar."
3. Solo entonces hacer el commit + push.

Esto aplica para: Netlify, Render, cualquier plataforma de deploy automático.
```

---

## Prerequisito — clonar sofia-bogota (solo una vez)

Si no tienes el repo sofia-bogota clonado en tu máquina:
```bash
git clone https://github.com/andrestriana89-blip/sofia-bogota.git
```

Ponlo en la misma carpeta padre que `aj-business-advisory`:
```
📁 Proyectos/
├── aj-business-advisory/   ← sitio USA
└── sofia-bogota/           ← sitio Colombia + archivo de sync
```

---

*Configurado por Valentina · Claude Code · 2026-05-10*
