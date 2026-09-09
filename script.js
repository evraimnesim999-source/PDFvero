function compressPDF() {
    const fileInput = document.getElementById("pdfFile");
    const message = document.getElementById("message");

    if (!fileInput.files.length) {
        message.textContent = "من فضلك اختر ملف PDF أولاً";
        return;
    }

    const file = fileInput.files[0];

    message.textContent = "تم اختيار الملف: " + file.name;
}