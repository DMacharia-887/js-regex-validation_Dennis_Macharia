document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const successMessage = document.getElementById("successMessage");
    
    const patterns = {
        fullName: /^[A-Za-z\s]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^\d{10,15}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    };
    
    const validateField = (input, pattern, errorMessage) => {
        const errorElement = document.getElementById(input.id + "Error");
        if (!pattern.test(input.value)) {
            errorElement.textContent = errorMessage;
            input.style.border = "2px solid red";
            return false;
        } else {
            errorElement.textContent = "";
            input.style.border = "2px solid green";
            return true;
        }
    };
    
    fullName.addEventListener("input", () => validateField(fullName, patterns.fullName, "Only letters and spaces allowed"));
    email.addEventListener("input", () => validateField(email, patterns.email, "Enter a valid email"));
    phone.addEventListener("input", () => validateField(phone, patterns.phone, "Enter a valid phone number (10-15 digits)"));
    password.addEventListener("input", () => validateField(password, patterns.password, "At least 8 chars, 1 uppercase, 1 lowercase, and 1 number"));
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const isValid = validateField(fullName, patterns.fullName, "Only letters and spaces allowed") &&
                        validateField(email, patterns.email, "Enter a valid email") &&
                        validateField(phone, patterns.phone, "Enter a valid phone number (10-15 digits)") &&
                        validateField(password, patterns.password, "At least 8 chars, 1 uppercase, 1 lowercase, and 1 number");
        
        if (isValid) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.color = "green";
        } else {
            successMessage.textContent = "Please fix errors before submitting.";
            successMessage.style.color = "red";
        }
    });
});
