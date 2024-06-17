function generateQRCode() {
    const type = document.getElementById("type").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    let qrContent = "";

    if (type === "vCard") {
        qrContent = `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\nTEL:${phoneNumber}\nEMAIL:${email}\nEND:VCARD`;
    } else if (type === "MeCard") {
        qrContent = `MECARD:N:${lastName},${firstName};TEL:${phoneNumber};EMAIL:${email};;`;
    }

    const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrContent,
        width: 128,
        height: 128
    });
}
