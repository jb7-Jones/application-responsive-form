// NAME: allow only letters and space
document.getElementById('name').addEventListener('input', function () {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

// CONTACT: allow only digits, max 10
document.getElementById('contact').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, "");
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

// FORM SUBMIT
document.getElementById("mainForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
