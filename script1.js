document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("output-popup");

    submitBtn.addEventListener("click", submitForm);
    resetBtn.addEventListener("click", resetForm);

    function submitForm() {
        // Form submission logic here
        // Collect form data, perform validation, and display the popup
        // Example:
        // const firstName = document.getElementById("firstName").value;
        // ...

        // Display the popup
        popup.style.display = "block";
    }

    function closePopup() {
        popup.style.display = "none";
        document.getElementById("surveyForm").reset();
    }

    function resetForm() {
        document.getElementById("surveyForm").reset();
    }
});
