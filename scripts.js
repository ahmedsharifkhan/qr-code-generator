$(document).ready(function () {
    const formFields = {
        vCard: `
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName">
            </div>
            <div class="form-group">
                <label for="companyName">Company Name</label>
                <input type="text" class="form-control" id="companyName">
            </div>
            <div class="form-group">
                <label for="designation">Designation</label>
                <input type="text" class="form-control" id="designation">
            </div>
            <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input type="text" class="form-control" id="phoneNumber">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="url">Website</label>
                <input type="url" class="form-control" id="url">
            </div>
            <div class="form-group">
                <label for="socialMedia">Social Media URL</label>
                <input type="url" class="form-control" id="socialMedia">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address">
            </div>
            <div class="form-group">
                <label for="note">Additional Note</label>
                <input type="text" class="form-control" id="note">
            </div>
        `,
        MeCard: `
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName">
            </div>
            <div class="form-group">
                <label for="companyName">Company Name</label>
                <input type="text" class="form-control" id="companyName">
            </div>
            <div class="form-group">
                <label for="designation">Designation</label>
                <input type="text" class="form-control" id="designation">
            </div>
            <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input type="text" class="form-control" id="phoneNumber">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="url">Website</label>
                <input type="url" class="form-control" id="url">
            </div>
            <div class="form-group">
                <label for="socialMedia">Social Media URL</label>
                <input type="url" class="form-control" id="socialMedia">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address">
            </div>
            <div class="form-group">
                <label for="note">Additional Note</label>
                <input type="text" class="form-control" id="note">
            </div>
        `,
        URL: `
            <div class="form-group">
                <label for="url">URL</label>
                <input type="url" class="form-control" id="url">
            </div>
        `,
        Text: `
            <div class="form-group">
                <label for="text">Text</label>
                <input type="text" class="form-control" id="text">
            </div>
        `,
        Email: `
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" class="form-control" id="subject">
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <textarea class="form-control" id="body"></textarea>
            </div>
        `,
        SMS: `
            <div class="form-group">
                <label for="phoneNumber">Phone Number</label>
                <input type="text" class="form-control" id="phoneNumber">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message"></textarea>
            </div>
        `,
        WIFI: `
            <div class="form-group">
                <label for="ssid">SSID</label>
                <input type="text" class="form-control" id="ssid">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="text" class="form-control" id="password">
            </div>
            <div class="form-group">
                <label for="encryption">Encryption</label>
                <select class="form-control" id="encryption">
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">No Password</option>
                </select>
            </div>
        `
        // Add more form structures for other types
    };

    function updateFormFields(type) {
        $("#form-fields").html(formFields[type] || '');
    }

    $("#type").change(function () {
        const type = $(this).val();
        updateFormFields(type);
    });

    // Initialize form with default fields
    updateFormFields($("#type").val());

    $("#qrForm").submit(function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        const type = $("#type").val();
        const qrColor = $("#qrColor").val();

        let qrContent = "";
        switch (type) {
            case "vCard":
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
                qrContent = `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\nORG:${companyName}\nTITLE:${designation}\nTEL:${phoneNumber}\nEMAIL:${email}\nURL:${url}\nURL:${socialMedia}\nADR:${address}\nNOTE:${note}\nEND:VCARD`;
                break;
            case "MeCard":
                qrContent = `MECARD:N:${lastName},${firstName};ORG:${companyName};TITLE:${designation};TEL:${phoneNumber};EMAIL:${email};URL:${url};URL:${socialMedia};ADR:${address};NOTE:${note};;`;
                break;
            case "URL":
                qrContent = $("#url").val();
                break;
            case "Text":
                qrContent = $("#text").val();
                break;
            case "Email":
                const emailAddr = $("#email").val() || '';
                const subject = $("#subject").val() || '';
                const body = $("#body").val() || '';
                qrContent = `mailto:${emailAddr}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                break;
            case "SMS":
                const smsNumber = $("#phoneNumber").val() || '';
                const message = $("#message").val() || '';
                qrContent = `SMSTO:${smsNumber}:${message}`;
                break;
            case "WIFI":
                const ssid = $("#ssid").val() || '';
                const password = $("#password").val() || '';
                const encryption = $("#encryption").val() || 'nopass';
                qrContent = `WIFI:S:${ssid};T:${encryption};P:${password};;`;
                break;
            // Add more cases for other types
        }

        // Clear previous QR code
        $("#qrcode").empty();

        // Generate new QR code
        const qrCode = new QRCode(document.getElementById("qrcode"), {
            text: qrContent,
            width: 256,
            height: 256,
            colorDark: qrColor,
            colorLight: "#ffffff"
        });

        // Show download button
        $("#downloadBtn").show();

        // Download button functionality
        $("#downloadBtn").off("click").on("click", function () {
            downloadQRCode();
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
});
