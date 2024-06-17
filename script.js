document.getElementById('qrForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = document.getElementById('data').value;
    const size = document.getElementById('size').value;
    const body = document.getElementById('body').value;
    const logo = document.getElementById('logo').value;

    const qrCodeImage = document.getElementById('qrCode');
    qrCodeImage.src = '';

    const config = {
        body: body,
        logo: logo
    };

    const postData = {
        data: data,
        size: parseInt(size),
        config: config,
        file: 'png'
    };

    fetch('https://api.qrcode-monkey.com/qr/custom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        qrCodeImage.src = url;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
