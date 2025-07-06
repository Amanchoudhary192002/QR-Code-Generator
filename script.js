let currentQRUrl = ''; // To store the QR image data URL

function generateQRCode() {
  const qrText = document.getElementById('qrText').value.trim();
  const qrResult = document.getElementById('qrResult');
  const downloadBtn = document.getElementById('downloadBtn');
  qrResult.innerHTML = '';
  downloadBtn.style.display = 'none';

  if (!qrText) {
    alert('Please enter a URL or text!');
    return;
  }

  QRCode.toDataURL(qrText, { width: 200, margin: 2 }, function (err, url) {
    if (err) return console.error(err);
    const img = document.createElement('img');
    img.src = url;
    qrResult.appendChild(img);

    currentQRUrl = url;
    downloadBtn.style.display = 'inline-block';
  });
}

function downloadQR() {
  const link = document.createElement('a');
  link.href = currentQRUrl;
  link.download = 'qr-code.png';
  link.click();
}
