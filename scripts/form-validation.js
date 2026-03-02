/*
My attempt at JS
 */
function checkMissing() {
    const requiredFields = document.querySelectorAll(".required");
    let missing = 0;

    requiredFields.forEach((field) => {
        const value = (field.value || "").trim();
        if (value === "") missing += 1;
    });

        const missingSpan = document.getElementById("missing-count");
        if (missing > 0) {
            missingSpan.textContent = `Missing required fields: ${missing}`;
        } else {
            missingSpan.textContent = "All required fields are filled in.";
        }

        return missing;
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValue = (emailInput.value || "").trim();

    const isValid = emailValue.length >= 8;

    if (!isValid) {
        emailInput.classList.add("invalid-email");
    } else {
        emailInput.classList.remove("invalid-email");
    }

    return isValid;
}


function runValidation() {
    const missing = checkMissing();
    const emailOk = validateEmail();

    if (missing > 0 || !emailOk) {
        alert("Form blocked: Please complete all required fields and fix the email.");
        return false;
    }

    alert("Form looks good! Submitting...");
    document.getElementById("contact-form").submit();
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", (e) => {
        runValidation();
    });
});
