$(document).ready(function () {
    $("#qrForm").submit(function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        const type = $("#type").val();
        const firstName = $("#firstName").val() || '';
        const lastName = $("#lastName").val() || '';
        const companyName = $("#companyName").val() || '';
        const designation = $("#designation").val() || '';
        const phoneNumber = $("#phoneNumber").val() || '';
        const email = $("#email").val() || '';
        const url = $("#url").val() || '';
        const socialMedia = $("#socialMedia").val() || '';
        const address = $("#address").val() || '';
        const note = $("#note").val() || '';

        let qrContent = "";

        if (type === "vCard") {
            qrContent = `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\nORG:${companyName}\nTITLE:${designation}\nTEL:${phoneNumber}\nEMAIL:${email}\nURL:${url}\nURL:${socialMedia}\nADR:${address}\nNOTE:${note}\nEND:VCARD`;
        } else if (type === "MeCard") {
            qrContent = `MECARD:N:${lastName},${firstName};ORG:${companyName};TITLE:${designation};TEL:${phoneNumber};EMAIL:${email};URL:${url};URL:${socialMedia};ADR:${address};NOTE:${note};;`;
        }

        // Clear previous QR code
        $("#qrcode").empty();

        // Generate new QR code
        new QRCode(document.getElementById("qrcode"), {
            text: qrContent,
            width: 256,
            height: 256
        });

        // Show download button
        $("#downloadBtn").show();

        // Download button functionality
        $("#downloadBtn").off("click").on("click", function () {
            downloadQRCode();
        });
    });
});

function downloadQRCode() {
    const canvas = document.querySelector("#qrcode canvas");
    if (canvas) {
        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = "qrcode.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
