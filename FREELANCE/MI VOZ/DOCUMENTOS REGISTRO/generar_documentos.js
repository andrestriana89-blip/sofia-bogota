const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, HeadingLevel,
  PageNumber, Header, Footer
} = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function titulo(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [new TextRun({ text, bold: true, size: 32, font: "Arial" })]
  });
}

function subtitulo(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: "444444" })]
  });
}

function separador() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "4FC3B3", space: 1 } },
    children: []
  });
}

function etiqueta(text) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, bold: true, size: 22, font: "Arial", color: "1A5276" })]
  });
}

function parrafo(text, opciones = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 22, font: "Arial", ...opciones })]
  });
}

function clausula(num, titulo_text, cuerpo_text) {
  return [
    new Paragraph({
      spacing: { before: 200, after: 80 },
      children: [new TextRun({ text: `${num}. ${titulo_text}`, bold: true, size: 22, font: "Arial" })]
    }),
    new Paragraph({
      spacing: { after: 120 },
      indent: { left: 360 },
      children: [new TextRun({ text: cuerpo_text, size: 22, font: "Arial" })]
    })
  ];
}

function espacioBlanco() {
  return new Paragraph({ spacing: { after: 160 }, children: [] });
}

// ─── DOCUMENTO 08: ACUERDO ENTRE AUTORES ───────────────────────────────────

const acuerdo = new Document({
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
          children: [new TextRun({ text: "Mi Voz — Acuerdo de Coautoría", size: 18, color: "888888", font: "Arial" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Página ", size: 18, color: "888888", font: "Arial" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "888888", font: "Arial" })
          ]
        })]
      })
    },
    children: [
      espacioBlanco(),
      titulo("ACUERDO DE COAUTORÍA Y PROPIEDAD INTELECTUAL"),
      subtitulo("Obra de Software: Mi Voz"),
      separador(),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Ciudad: Bogotá D.C., Colombia", size: 20, font: "Arial", color: "555555" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "Fecha: 20 de mayo de 2026", size: 20, font: "Arial", color: "555555" })]
      }),

      etiqueta("PARTES"),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                shading: { fill: "EAF7F5", type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 180, right: 180 },
                children: [
                  new Paragraph({ children: [new TextRun({ text: "COAUTORA 1", bold: true, size: 20, font: "Arial", color: "1A5276" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Angy Valentina Aranda", bold: true, size: 22, font: "Arial" })] }),
                  new Paragraph({ children: [new TextRun({ text: "C.C. 1001094487", size: 20, font: "Arial" })] }),
                  new Paragraph({ children: [new TextRun({ text: "valentina@ajbusinessadvisory.com", size: 18, font: "Arial", color: "555555" })] }),
                  new Paragraph({ children: [new TextRun({ text: "angy.aranda@uniminuto.edu.co", size: 18, font: "Arial", color: "555555" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Diseño UX/UI, Experiencia de usuario y Estrategia de marca", size: 18, font: "Arial", italics: true })] }),
                ]
              }),
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                shading: { fill: "EAF7F5", type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 180, right: 180 },
                children: [
                  new Paragraph({ children: [new TextRun({ text: "COAUTOR 2", bold: true, size: 20, font: "Arial", color: "1A5276" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Andrés Camilo Triana", bold: true, size: 22, font: "Arial" })] }),
                  new Paragraph({ children: [new TextRun({ text: "C.C. 1014204749", size: 20, font: "Arial" })] }),
                  new Paragraph({ children: [new TextRun({ text: "andres@ajbusinessadvisory.com", size: 18, font: "Arial", color: "555555" })] }),
                  new Paragraph({ children: [new TextRun({ text: " ", size: 18, font: "Arial" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Desarrollo de software, Arquitectura técnica e Integraciones", size: 18, font: "Arial", italics: true })] }),
                ]
              }),
            ]
          })
        ]
      }),

      espacioBlanco(),
      etiqueta("CLÁUSULAS"),

      ...[
        ["I. OBJETO",
          'Las Partes acuerdan formalizar su coautoría sobre la obra de software denominada "Mi Voz", aplicación de comunicación aumentativa para adultos mayores y personas con movilidad reducida, y establecer los términos de titularidad, uso y explotación de dicha obra.'],
        ["II. DESCRIPCIÓN DE LA OBRA",
          'Nombre oficial: Mi Voz. Tipo: Aplicación web progresiva (PWA). Función: permite a personas con dificultades de habla o movilidad expresarse mediante frases reproducidas en voz humana, con llamadas, juegos cognitivos y monitoreo de bienestar. URL: https://mi-voz-app.onrender.com. Inspiración: creada en honor a Gilberto Morales, familiar de las Partes, diagnosticado con ELA.'],
        ["III. TITULARIDAD",
          'Los derechos patrimoniales se distribuyen en partes iguales: 50% para Angy Valentina Aranda y 50% para Andrés Camilo Triana. Esta distribución aplica sobre reproducción, distribución, comunicación pública y transformación de la obra.'],
        ["IV. DECISIONES CONJUNTAS",
          'Requieren acuerdo unánime: cesión de derechos a terceros, licenciamiento exclusivo, modificación del nombre comercial "Mi Voz", asociación con inversionistas que implique dilución de titularidad, y registro de marca ante la SIC.'],
        ["V. EXPLOTACIÓN COMERCIAL",
          'Los ingresos derivados de la comercialización (ventas en Gumroad, licencias clínicas, kits de hardware y cualquier modelo futuro) se distribuirán 50/50, previa deducción de costos directos acordados mutuamente.'],
        ["VI. CRÉDITOS",
          'En toda publicación, registro o presentación de la obra se reconocerá la coautoría de ambas Partes. La inspiración en Gilberto Morales formará parte permanente de la narrativa de la marca.'],
        ["VII. CONFIDENCIALIDAD",
          'Las Partes se comprometen a mantener confidencialidad sobre el código fuente, estrategia comercial, datos de usuarios y cualquier información sensible, durante y después de la vigencia de este acuerdo.'],
        ["VIII. VIGENCIA Y LEGISLACIÓN",
          'Este acuerdo tiene vigencia indefinida y se rige por la Ley 23 de 1982, la Decisión Andina 351 de 1993 y demás normas de derechos de autor en Colombia. Solo puede modificarse mediante documento escrito firmado por ambas Partes.'],
      ].flatMap(([t, c]) => clausula("", t, c)),

      separador(),
      etiqueta("FIRMAS"),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 400, bottom: 400, left: 180, right: 180 },
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 320 }, children: [new TextRun({ text: " ", size: 22 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" } }, children: [new TextRun({ text: " ", size: 22 })] }),
                  espacioBlanco(),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ANGY VALENTINA ARANDA", bold: true, size: 20, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C.C. 1001094487", size: 18, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Coautora 1", size: 18, font: "Arial", italics: true, color: "555555" })] }),
                ]
              }),
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 400, bottom: 400, left: 180, right: 180 },
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 320 }, children: [new TextRun({ text: " ", size: 22 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" } }, children: [new TextRun({ text: " ", size: 22 })] }),
                  espacioBlanco(),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ANDRÉS CAMILO TRIANA", bold: true, size: 20, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C.C. 1014204749", size: 18, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Coautor 2", size: 18, font: "Arial", italics: true, color: "555555" })] }),
                ]
              }),
            ]
          })
        ]
      }),

      espacioBlanco(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Bogotá D.C., 20 de mayo de 2026", size: 18, font: "Arial", color: "888888" })]
      }),
    ]
  }]
});

// ─── DOCUMENTO 02: DECLARACIÓN DE AUTORÍA ────────────────────────────────

const declaracion = new Document({
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
          children: [new TextRun({ text: "Mi Voz — Declaración de Autoría", size: 18, color: "888888", font: "Arial" })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Página ", size: 18, color: "888888", font: "Arial" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "888888", font: "Arial" })
          ]
        })]
      })
    },
    children: [
      espacioBlanco(),
      titulo("DECLARACIÓN DE AUTORÍA"),
      subtitulo("Obra de Software: Mi Voz"),
      separador(),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "Bogotá D.C., Colombia — 20 de mayo de 2026", size: 20, font: "Arial", color: "555555" })]
      }),

      parrafo(
        'Nosotros, ANGY VALENTINA ARANDA, identificada con C.C. 1001094487, y ANDRÉS CAMILO TRIANA, identificado con C.C. 1014204749, en calidad de coautores, declaramos bajo la gravedad de juramento que:'
      ),

      espacioBlanco(),

      ...[
        "PRIMERO. Somos los únicos y exclusivos coautores de la obra de software denominada \"Mi Voz\", aplicación de comunicación aumentativa para adultos mayores y personas con movilidad reducida.",
        "SEGUNDO. La obra es una creación original e independiente. Su concepto, estructura funcional, diseño de experiencia de usuario, código fuente, flujos de navegación, mockups e identidad visual fueron desarrollados íntegramente por las personas aquí firmantes, sin relación de dependencia laboral con ninguna institución educativa ni empresa externa.",
        "TERCERO. La obra no ha sido plagiada ni reproducida total o parcialmente de ninguna fuente preexistente. Cualquier referencia técnica utilizada durante su desarrollo fue empleada como consulta y no como base de la creación.",
        "CUARTO. No existe ningún contrato, acuerdo o vínculo vigente que ceda, transfiera o limite los derechos patrimoniales sobre esta obra a favor de terceros, instituciones o empleadores.",
        "QUINTO. La titularidad de los derechos patrimoniales se distribuye en partes iguales: 50% para Angy Valentina Aranda y 50% para Andrés Camilo Triana, conforme al Acuerdo de Coautoría suscrito en la misma fecha.",
        "SEXTO. Autorizamos el uso de nuestros nombres, cédulas y correos para efectos del registro ante la Dirección Nacional de Derecho de Autor (DNDA) y cualquier institución académica donde se presente este documento.",
      ].map(texto => new Paragraph({
        spacing: { after: 140 },
        indent: { left: 0 },
        children: [new TextRun({ text: texto, size: 22, font: "Arial" })]
      })),

      separador(),
      etiqueta("INFORMACIÓN DE LA OBRA"),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2800, 6560],
        rows: [
          ["Nombre oficial", "Mi Voz"],
          ["Tipo de obra", "Aplicación web progresiva (PWA)"],
          ["Función principal", "Comunicación aumentativa mediante frases en voz humana"],
          ["Prototipo funcional", "https://mi-voz-app.onrender.com"],
          ["Inicio del desarrollo", "2025"],
          ["Estado actual", "Prototipo funcional en producción y comercialización activa"],
          ["Inspiración", "Gilberto Morales — familiar de las Partes, diagnosticado con ELA"],
        ].map(([key, val]) => new TableRow({
          children: [
            new TableCell({
              borders,
              width: { size: 2800, type: WidthType.DXA },
              shading: { fill: "F0F9F8", type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: key, bold: true, size: 20, font: "Arial" })] })]
            }),
            new TableCell({
              borders,
              width: { size: 6560, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [new Paragraph({ children: [new TextRun({ text: val, size: 20, font: "Arial" })] })]
            }),
          ]
        }))
      }),

      separador(),
      etiqueta("FIRMAS"),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 400, bottom: 400, left: 180, right: 180 },
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 320 }, children: [new TextRun({ text: " ", size: 22 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" } }, children: [new TextRun({ text: " ", size: 22 })] }),
                  espacioBlanco(),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ANGY VALENTINA ARANDA", bold: true, size: 20, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C.C. 1001094487", size: 18, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Estudiante UNIMINUTO Bogotá", size: 18, font: "Arial", italics: true, color: "555555" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "angy.aranda@uniminuto.edu.co", size: 16, font: "Arial", color: "888888" })] }),
                ]
              }),
              new TableCell({
                borders,
                width: { size: 4680, type: WidthType.DXA },
                margins: { top: 400, bottom: 400, left: 180, right: 180 },
                children: [
                  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 320 }, children: [new TextRun({ text: " ", size: 22 })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "000000" } }, children: [new TextRun({ text: " ", size: 22 })] }),
                  espacioBlanco(),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "ANDRÉS CAMILO TRIANA", bold: true, size: 20, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "C.C. 1014204749", size: 18, font: "Arial" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Co-fundador Mi Voz", size: 18, font: "Arial", italics: true, color: "555555" })] }),
                  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "andres@ajbusinessadvisory.com", size: 16, font: "Arial", color: "888888" })] }),
                ]
              }),
            ]
          })
        ]
      }),

      espacioBlanco(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Documento válido para presentación ante DNDA y UNIMINUTO.", size: 18, font: "Arial", color: "888888" })]
      }),
    ]
  }]
});

const dir = "C:\\Users\\valen\\.claude\\sofia-demo (3)\\FREELANCE\\MI VOZ\\DOCUMENTOS REGISTRO\\";

Promise.all([
  Packer.toBuffer(acuerdo).then(buf => fs.writeFileSync(dir + "08_ACUERDO_ENTRE_AUTORES.docx", buf)),
  Packer.toBuffer(declaracion).then(buf => fs.writeFileSync(dir + "02_DECLARACION_DE_AUTORIA.docx", buf)),
]).then(() => console.log("✅ Documentos generados correctamente."))
  .catch(err => console.error("❌ Error:", err));
