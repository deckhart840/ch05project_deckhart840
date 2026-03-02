/*
 c *heckMissing()

 This function looks through all the fields marked as "required"
 and counts how many are still empty. It updates the message under
 the form so the user knows what they missed.
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

/*
 v *alidateEmail()

 This checks the email field and makes sure it's at least 8 characters.
 If it’s too short, it highlights it in red so it’s obvious something’s wrong.
 If it’s good, it removes the red border.
 */
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

/*
 r *unValidation()

 This runs both validation checks together.
 If anything is missing or the email is bad, it blocks submission
 and throws an alert. If everything is good, it submits the form.
 */
function runValidation() {
    const missing = checkMissing();
    const emailOk = validateEmail();

    if (missing > 0 || !emailOk) {
        alert("Form blocked: fix the missing fields or the email.");
        return false;
    }

    alert("Form looks good. Submitting.");
    document.getElementById("contact-form").submit();
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-btn").addEventListener("click", () => {
        runValidation();
    });
});
