function generateQRCode() {
    const type = document.getElementById("type").value;
    const firstName = document.getElementById("firstName").value || '';
    const lastName = document.getElementById("lastName").value || '';
    const phoneNumber = document.getElementById("phoneNumber").value || '';
    const email = document.getElementById("email").value || '';
    const url = document.getElementById("url").value || '';
    const address = document.getElementById("address").value || '';
    const designation = document.getElementById("designation").value || '';

    let qrContent = "";

    if (type === "vCard") {
        qrContent = `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\nTITLE:${designation}\nTEL:${phoneNumber}\nEMAIL:${email}\nURL:${url}\nADR:${address}\nEND:VCARD`;
    } else if (type === "MeCard") {
        qrContent = `MECARD:N:${lastName},${firstName};TEL:${phoneNumber};EMAIL:${email};URL:${url};ADR:${address};NOTE:${designation};;`;
    }

    document.getElementById("qrcode").innerHTML = "";  // Clear previous QR code
    new QRCode(document.getElementById("qrcode"), {
        text: qrContent,
        width: 128,
        height: 128
    });
}
