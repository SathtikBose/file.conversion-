document.getElementById('uploadImage').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('previewImage');
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid image file.');
    }
});

document.getElementById('convertButton').addEventListener('click', function() {
    const imgElement = document.getElementById('previewImage');
    if (imgElement.src) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngDataUrl = canvas.toDataURL('image/png');
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = pngDataUrl;
            document.getElementById('downloadContainer').style.display = 'block';
        };
        img.src = imgElement.src;
    } else {
        alert('Please upload an image first.');
    }
});
