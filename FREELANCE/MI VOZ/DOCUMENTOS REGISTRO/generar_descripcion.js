const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType,
  PageNumber, Header, Footer, HeadingLevel
} = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

const headerBorder = { style: BorderStyle.SINGLE, size: 1, color: "4FC3B3" };
const headerBorders = { top: headerBorder, bottom: headerBorder, left: headerBorder, right: headerBorder };

function separador() {
  return new Paragraph({
    spacing: { before: 240, after: 240 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "4FC3B3", space: 1 } },
    children: []
  });
}

function seccion(texto) {
  return new Paragraph({
    spacing: { before: 320, after: 100 },
    children: [new TextRun({ text: texto, bold: true, size: 26, font: "Arial", color: "1A5276" })]
  });
}

function subseccion(texto) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text: texto, bold: true, size: 22, font: "Arial", color: "2E86C1" })]
  });
}

function p(texto, opciones = {}) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: texto, size: 22, font: "Arial", ...opciones })]
  });
}

function li(texto) {
  return new Paragraph({
    spacing: { after: 80 },
    indent: { left: 480, hanging: 240 },
    children: [
      new TextRun({ text: "• ", size: 22, font: "Arial", color: "4FC3B3", bold: true }),
      new TextRun({ text: texto, size: 22, font: "Arial" })
    ]
  });
}

function espacio() {
  return new Paragraph({ spacing: { after: 120 }, children: [] });
}

function tablaSimple(filas, col1, col2) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [col1, col2],
    rows: filas.map(([a, b], i) => new TableRow({
      children: [
        new TableCell({
          borders,
          width: { size: col1, type: WidthType.DXA },
          shading: { fill: i === 0 ? "D6EAF8" : "F8FBFD", type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({ children: [new TextRun({ text: a, bold: i === 0, size: 20, font: "Arial" })] })]
        }),
        new TableCell({
          borders,
          width: { size: col2, type: WidthType.DXA },
          shading: { fill: i === 0 ? "D6EAF8" : "FFFFFF", type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({ children: [new TextRun({ text: b, bold: i === 0, size: 20, font: "Arial" })] })]
        }),
      ]
    }))
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "Mi Voz — Descripción del Programa · DNDA 2026", size: 18, color: "888888", font: "Arial" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Mi Voz — Descripción del Programa · Página ", size: 18, color: "888888", font: "Arial" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "888888", font: "Arial" })
          ]
        })]
      })
    },
    children: [

      // PORTADA
      espacio(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: "DESCRIPCIÓN DEL PROGRAMA DE COMPUTADOR", bold: true, size: 36, font: "Arial" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: "Mi Voz", bold: true, size: 48, font: "Arial", color: "1A8A7A" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Aplicación de Comunicación Aumentativa para Adultos Mayores", size: 24, font: "Arial", color: "555555", italics: true })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "Registro ante la Dirección Nacional de Derecho de Autor — DNDA · 2026", size: 20, font: "Arial", color: "888888" })]
      }),
      separador(),

      // DATOS GENERALES
      tablaSimple([
        ["Campo", "Información"],
        ["Nombre de la obra", "Mi Voz"],
        ["Tipo de obra", "Software / Aplicación Web Progresiva (PWA)"],
        ["Autores", "Angy Valentina Aranda · C.C. 1001094487\nAndrés Camilo Triana · C.C. 1014204749"],
        ["Fecha de creación", "2025"],
        ["Versión actual", "1.0 — producción activa"],
        ["URL pública", "https://mi-voz-app.onrender.com"],
        ["Repositorio", "github.com/andrestriana89-blip/aj-business-advisory · carpeta clients/mi-voz/app/"],
        ["País de origen", "Colombia"],
        ["Idiomas", "Español (Colombia) · English (USA)"],
      ], 3000, 6360),

      espacio(),
      separador(),

      // 1. QUÉ ES
      seccion("1. DESCRIPCIÓN GENERAL"),
      p("Mi Voz es una aplicación web progresiva (PWA) diseñada para adultos mayores y personas con movilidad reducida o dificultades de comunicación verbal. Su propósito principal es permitir que estas personas puedan expresarse, comunicarse con sus familias y acceder a herramientas de bienestar de forma completamente autónoma, con un solo toque en pantalla."),
      espacio(),
      p("La aplicación nació de una necesidad real: Don Gilberto Morales, familiar de los autores, convive con ELA (Esclerosis Lateral Amiotrófica) desde hace 6 años. La ELA le fue quitando progresivamente la capacidad de moverse y hablar, pero no su mente ni su deseo de comunicarse. Mi Voz fue creada para que él pudiera decir \"tengo hambre\", \"quiero ver el partido\" o \"los quiero\" sin depender de que alguien adivinara lo que sentía."),
      espacio(),
      p("La aplicación no requiere instalación — funciona desde el navegador de cualquier celular Android o iPhone. En Android Chrome ofrece la opción de instalarla como app nativa (\"Agregar a pantalla de inicio\")."),

      espacio(),
      separador(),

      // 2. MÓDULOS
      seccion("2. MÓDULOS Y FUNCIONALIDADES"),

      subseccion("2.1 Pantalla de Inicio — Contactos"),
      li("Saluda al usuario por su nombre personalizado"),
      li("Muestra fotos grandes (110x110px) de los contactos familiares en una grilla"),
      li("Un solo toque en la foto inicia el proceso de llamada"),
      li("Botón flotante ⚙️ para acceso al panel del cuidador"),
      li("Mensaje amigable cuando no hay contactos configurados"),

      espacio(),
      subseccion("2.2 Pantalla de Llamada"),
      li("Foto del contacto ampliada (160x160px) sobre fondo oscuro"),
      li("Botón de videollamada via Jitsi Meet (gratuito, sin cuenta requerida)"),
      li("Botón de WhatsApp directo al número guardado"),
      li("El receptor solo necesita abrir un link — no descarga ninguna app"),

      espacio(),
      subseccion("2.3 Panel del Cuidador"),
      li("Protegido con PIN de 4 dígitos"),
      li("Gestión de contactos: agregar, editar y eliminar"),
      li("Carga de fotos desde galería del dispositivo"),
      li("Configuración del nombre del usuario principal"),
      li("Toggle de idioma ES / EN"),
      li("Toggle de voz masculina o femenina"),
      li("Toda la información se guarda en el dispositivo (localStorage) — sin servidores externos"),

      espacio(),
      subseccion("2.4 Módulo de Voces — Mi Voz habla por ti"),
      p("Este es el módulo central de comunicación aumentativa. La aplicación reproduce frases pregrabadas en voz humana cuando el usuario toca una opción en pantalla."),
      espacio(),
      tablaSimple([
        ["Voz", "Nombre ElevenLabs", "ID", "Idiomas"],
        ["Masculina", "George", "JBFqnCBsd6RMkjVDRZzb", "ES + EN"],
        ["Femenina", "Norah", "kcQkGnn0HAT2JRDQ4Ljp", "ES + EN"],
      ], 1800, 2520, 3120, 1920),
      espacio(),
      li("128 archivos MP3 pre-generados con ElevenLabs"),
      li("64 archivos por idioma (32 voz masculina + 32 voz femenina)"),
      li("Carpetas: public/audio/male/ · public/audio/female/ · public/audio/en-male/ · public/audio/en-female/"),
      li("Script de generación reutilizable: scripts/generate-mi-voz-audio.js"),

      espacio(),
      subseccion("2.5 Configuración de Voz — VoiceSetup"),
      li("Pantalla de bienvenida en el primer uso"),
      li("El cuidador elige voz masculina 👴 o femenina 👵"),
      li("El cuidador elige idioma: Español o English"),
      li("Configuración accesible también desde el panel del cuidador"),

      espacio(),
      subseccion("2.6 Juegos Cognitivos"),
      p("Módulo de estimulación cognitiva con dos juegos diseñados para adultos mayores:"),
      espacio(),
      p("Sopa de Letras:", { bold: true }),
      li("Grilla de 12x12 letras"),
      li("10 palabras en español: AMOR, FAMILIA, ABUELA, CAFE, FLORES, COLOMBIA, SALUD, PAZ, VIDA, AMIGOS"),
      li("Selección por arrastre del dedo sobre las letras"),
      li("Palabras encontradas resaltadas en azul"),
      espacio(),
      p("Juego de Memoria:", { bold: true }),
      li("16 cartas (8 pares de emojis)"),
      li("Voltear cartas para encontrar parejas"),
      li("Contador de movimientos"),
      li("Mensaje de victoria al completar"),

      espacio(),
      subseccion("2.7 Signos Vitales — Módulo de Salud"),
      tablaSimple([
        ["Indicador", "Ícono", "Rango normal", "Color de alerta"],
        ["Oxigenación (SpO2)", "🩸", "≥ 95%", "Amarillo <95%, rojo <90%"],
        ["Frecuencia cardíaca", "💓", "60–100 bpm", "Rojo fuera de rango"],
        ["Pasos del día", "🚶", "Meta 3,000 pasos", "Morado"],
        ["Temperatura corporal", "🌡️", "≤ 37.2°C", "Naranja"],
      ], 2340, 1080, 2340, 3600),
      espacio(),
      li("Dashboard visual con 4 indicadores de bienestar"),
      li("Botón para simular lectura de dispositivo Bluetooth (demo)"),
      li("Integración futura con oxímetro Bluetooth BLE real (Android) y Terra API para Apple Watch"),

      espacio(),
      separador(),

      // 3. MULTI-IDIOMA
      seccion("3. SISTEMA MULTI-IDIOMA"),
      p("La aplicación está completamente traducida al inglés, lo que abre el mercado de habla inglesa (USA, Canadá, Reino Unido)."),
      espacio(),
      li("Archivo src/i18n.js centraliza todas las cadenas de texto en ES y EN"),
      li("Auto-detección: lee navigator.language del dispositivo al abrir la app"),
      li("Si el celular está en inglés → app en inglés automáticamente"),
      li("Si está en español → app en español"),
      li("Toggle manual ES | EN disponible en VoiceSetup y CuidadorSetup"),
      espacio(),
      p("Elementos traducidos:", { bold: true }),
      li("Todos los tabs de navegación (Inicio/Home, Juegos/Games, Salud/Health)"),
      li("Todos los botones, mensajes y textos de interfaz"),
      li("Frases de juegos cognitivos"),
      li("Pantalla del cuidador completa"),
      li("Instrucciones y mensajes de error"),

      espacio(),
      separador(),

      // 4. ARQUITECTURA TÉCNICA
      seccion("4. ARQUITECTURA TÉCNICA"),
      tablaSimple([
        ["Componente", "Tecnología"],
        ["Framework principal", "React 18 + Vite"],
        ["PWA", "vite-plugin-pwa + Workbox"],
        ["Rutas", "react-router-dom v7"],
        ["Estilos", "CSS inline con variables (sin Tailwind)"],
        ["Almacenamiento", "localStorage — sin base de datos ni backend"],
        ["Videollamadas", "Jitsi Meet (meet.jit.si) — gratuito, sin cuenta"],
        ["WhatsApp", "wa.me — link directo al número del contacto"],
        ["Síntesis de voz", "ElevenLabs — MP3s pre-generados (128 archivos)"],
        ["Deploy", "Render Static Site — gratuito"],
        ["Versionamiento", "Git — GitHub (repo aj-business-advisory)"],
        ["Compatibilidad", "Android Chrome · iPhone Safari · cualquier navegador moderno"],
      ], 3600, 5760),

      espacio(),
      separador(),

      // 5. MODELO COMERCIAL
      seccion("5. MODELO COMERCIAL"),
      tablaSimple([
        ["Producto", "Precio", "Descripción"],
        ["App Mi Voz", "$19 USD", "Acceso a la app. 1 compra = 1 dispositivo. Pago único en Gumroad."],
        ["Mi Voz Kit", "$59 USD", "App + oxímetro de dedo Bluetooth. Envío a domicilio en Colombia."],
        ["Licencia Clínica", "$99 USD", "Para fonoaudiólogos y clínicas. 1 licencia = pacientes ilimitados."],
      ], 2400, 1440, 5520),
      espacio(),
      li("Plataforma de venta: Gumroad (andrestriana3.gumroad.com)"),
      li("Sales page español: ajbusinessadvisory.com/landing/mi-voz-sales.html"),
      li("Sales page inglés: ajbusinessadvisory.com/landing/mi-voz-sales-en.html"),
      li("Sales page kit: ajbusinessadvisory.com/landing/mi-voz-kit.html"),

      espacio(),
      separador(),

      // 6. MERCADO
      seccion("6. CONTEXTO Y MERCADO"),
      li("En Colombia, el 12% del PIB corresponde a la economía plateada. Mercado creciendo 30% anual."),
      li("No existe en Colombia ninguna app que integre comunicación aumentativa + salud + juegos cognitivos en una sola plataforma accesible para adultos mayores."),
      li("Convocatorias objetivo: Colombia Inteligente 2026 (MinCiencias), programas de envejecimiento activo del MSPS, fondos de innovación social."),
      li("Margen estimado del kit físico: ~$35–45 USD por unidad (costo hardware $8–15 USD + envío $5–8 USD)."),

      espacio(),
      separador(),

      // 7. AUTORES
      seccion("7. AUTORES Y TITULARIDAD"),
      tablaSimple([
        ["", "Coautora 1", "Coautor 2"],
        ["Nombre", "Angy Valentina Aranda", "Andrés Camilo Triana"],
        ["C.C.", "1001094487", "1014204749"],
        ["Correo", "valentina@ajbusinessadvisory.com", "andres@ajbusinessadvisory.com"],
        ["Rol", "Diseño UX/UI, experiencia de usuario y estrategia de marca", "Desarrollo de software, arquitectura técnica e integraciones"],
        ["Titularidad", "50%", "50%"],
      ], 2400, 3480, 3480),

      espacio(),
      p("Este documento ha sido elaborado para efectos del registro de la obra ante la Dirección Nacional de Derecho de Autor (DNDA) de Colombia. La obra es una creación original de los autores indicados, sin relación de dependencia con ninguna institución educativa ni empresa externa.", { color: "555555", italics: true }),

      espacio(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Bogotá D.C., Colombia · Mayo 2026", size: 20, font: "Arial", color: "888888" })]
      }),
    ]
  }]
});

function tablaSimple(filas, ...cols) {
  const totalCols = cols.length;
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: cols,
    rows: filas.map((fila, i) => new TableRow({
      children: fila.map((celda, j) => new TableCell({
        borders,
        width: { size: cols[j], type: WidthType.DXA },
        shading: { fill: i === 0 ? "D6EAF8" : (i % 2 === 0 ? "F8FBFD" : "FFFFFF"), type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 140 },
        children: [new Paragraph({ children: [new TextRun({ text: celda, bold: i === 0, size: 20, font: "Arial" })] })]
      }))
    }))
  });
}

const dir = "C:\\Users\\valen\\.claude\\sofia-demo (3)\\FREELANCE\\MI VOZ\\DOCUMENTOS REGISTRO\\";

Packer.toBuffer(doc)
  .then(buf => {
    fs.writeFileSync(dir + "03_DESCRIPCION_DEL_PROGRAMA_MI_VOZ.docx", buf);
    console.log("✅ 03_DESCRIPCION_DEL_PROGRAMA_MI_VOZ.docx generado correctamente.");
  })
  .catch(err => console.error("❌ Error:", err));
