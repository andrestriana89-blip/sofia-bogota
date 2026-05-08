"""
Agrega firmas al contrato PDF — AJ Business Advisory
Uso: python3 agregar_firmas.py
"""
import io
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from PIL import Image

PDF_IN  = "Contrato de Servicios — Paula · Dra. Natalia Barrantes.pdf"
PDF_OUT = "Contrato de Servicios — Paula · Dra. Natalia Barrantes — FIRMADO.pdf"
FIRMA_PAULA = "Firma_Paula.png"
FIRMA_ANDRES = "Firma_Andres.png"  # agregar cuando esté disponible

# Página de firmas (última = índice 13)
PAGINA_FIRMA = 13

# Dimensiones página: 612 x 792 puntos
# Coordenadas: origen abajo-izquierda en PDF
# La última página tiene el texto de validez legal al fondo

def recortar_firma(img_path, padding=20):
    """Recorta el espacio en blanco alrededor de la firma."""
    img = Image.open(img_path).convert("RGBA")
    # Buscar bounding box del contenido no-blanco
    bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
    diff = Image.new("RGBA", img.size)
    for x in range(img.width):
        for y in range(img.height):
            px = img.getpixel((x, y))
            if isinstance(px, int):
                px = (px, px, px, 255)
            r, g, b = px[0], px[1], px[2]
            if r < 230 or g < 230 or b < 230:
                diff.putpixel((x, y), (0, 0, 0, 255))
    bbox = diff.getbbox()
    if bbox:
        pad = padding
        bbox = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(img.width, bbox[2] + pad),
            min(img.height, bbox[3] + pad),
        )
        img = img.crop(bbox)
    return img.convert("RGBA")


def crear_overlay(firma_paula_path, firma_andres_path=None):
    """Crea una página PDF con las firmas superpuestas."""
    pkt = io.BytesIO()
    c = canvas.Canvas(pkt, pagesize=letter)
    w, h = letter  # 612, 792

    # ── Bloque izquierdo: AJ Business Advisory / Andres ──
    x_left = 72
    y_firma = 165  # desde abajo

    # Línea de firma izquierda
    c.setStrokeColorRGB(0.6, 0.6, 0.6)
    c.setLineWidth(0.5)
    c.line(x_left, y_firma, x_left + 180, y_firma)

    if firma_andres_path:
        try:
            img_a = recortar_firma(firma_andres_path)
            tmp_a_path = "_tmp_andres.png"
            img_a.save(tmp_a_path, format="PNG")
            sig_w, sig_h = 160, 55
            c.drawImage(tmp_a_path, x_left, y_firma + 4, width=sig_w, height=sig_h,
                        mask="auto", preserveAspectRatio=True)
            import os; os.remove(tmp_a_path)
        except Exception as e:
            print(f"Firma Andres no disponible: {e}")

    c.setFont("Helvetica-Bold", 7.5)
    c.setFillColorRGB(0.15, 0.15, 0.15)
    c.drawString(x_left, y_firma - 13, "Andres Triana")
    c.setFont("Helvetica", 7)
    c.setFillColorRGB(0.5, 0.5, 0.5)
    c.drawString(x_left, y_firma - 23, "AJ Business Advisory LLC")
    c.drawString(x_left, y_firma - 33, "Representante del Contratante")

    # ── Bloque derecho: Paula Quiroga ──
    x_right = 360

    # Firma de Paula
    img_p = recortar_firma(firma_paula_path)
    tmp_p_path = "_tmp_paula.png"
    img_p.save(tmp_p_path, format="PNG")
    sig_w, sig_h = 160, 55
    c.drawImage(tmp_p_path, x_right, y_firma + 4, width=sig_w, height=sig_h,
                mask="auto", preserveAspectRatio=True)
    import os; os.remove(tmp_p_path)

    # Línea de firma derecha
    c.setStrokeColorRGB(0.6, 0.6, 0.6)
    c.line(x_right, y_firma, x_right + 180, y_firma)

    c.setFont("Helvetica-Bold", 7.5)
    c.setFillColorRGB(0.15, 0.15, 0.15)
    c.drawString(x_right, y_firma - 13, "Paula J. Quiroga V.")
    c.setFont("Helvetica", 7)
    c.setFillColorRGB(0.5, 0.5, 0.5)
    c.drawString(x_right, y_firma - 23, "CC / NIT: _______________")
    c.drawString(x_right, y_firma - 33, "Contratada — Productora de contenido")

    # Fecha de firma
    from datetime import date
    fecha = date.today().strftime("%d de mayo de %Y")
    c.setFont("Helvetica", 7)
    c.setFillColorRGB(0.5, 0.5, 0.5)
    c.drawCentredString(w / 2, y_firma - 52, f"Firmado electrónicamente · {fecha}")

    c.save()
    pkt.seek(0)
    return pkt


def main():
    reader = PdfReader(PDF_IN)
    writer = PdfWriter()

    # Copiar todas las páginas
    for i, page in enumerate(reader.pages):
        if i == PAGINA_FIRMA:
            # Crear overlay con firmas
            andres = FIRMA_ANDRES if __import__('os').path.exists(FIRMA_ANDRES) else None
            overlay_bytes = crear_overlay(FIRMA_PAULA, andres)
            overlay_reader = PdfReader(overlay_bytes)
            overlay_page = overlay_reader.pages[0]
            # Fusionar overlay encima de la página original
            page.merge_page(overlay_page)
        writer.add_page(page)

    with open(PDF_OUT, "wb") as f:
        writer.write(f)
    print(f"PDF firmado guardado: {PDF_OUT}")


if __name__ == "__main__":
    main()
