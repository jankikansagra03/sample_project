$(document).ready(function () {
    function validateField(input) {
        let field = $(input);
        let value = field.val().trim();
        let errorSpan = $("#" + field.attr("name") + "Error");
        let fieldType = field.data("validation") || "";
        let minLength = field.data("min") || 0;
        let errorMessage = "";

        if (fieldType.includes("required") && value === "") {
            errorMessage = "This field is required.";
        } else if (fieldType.includes("email") && !/^\S+@\S+\.\S+$/.test(value)) {
            errorMessage = "Enter a valid email.";
        } else if (fieldType.includes("alpha") && !/^[A-Za-z\s]+$/.test(value)) {
            errorMessage = "Only letters are allowed.";
        } else if (fieldType.includes("min") && value.length < minLength) {
            errorMessage = `Must be at least ${minLength} characters.`;
        }
        else if (fieldType.includes("max") && value.length > field.data("max")) {
            errorMessage = `Must be no more than ${field.data("max")} characters.`;
        } else if (field.attr("name") === "password" && fieldType.includes("strong")) {
            let hasLower = /[a-z]/.test(value);
            let hasUpper = /[A-Z]/.test(value);
            let hasNumber = /[0-9]/.test(value);
            let hasSpecial = /[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(value);
            if (!hasLower || !hasUpper || !hasNumber || !hasSpecial) {
                errorMessage = "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
            } 
        } else if (field.attr("name") === "confirm_password" && fieldType.includes("confirm")) {
            let password = $("#password").val();
            if (value !== password) {
                errorMessage = "Passwords do not match.";
            }
        }
        else if (fieldType.includes("required") && field.is("textarea") && value.trim() === "") {
            errorMessage = "This field is required.";
        }



        if (errorMessage) {
            errorSpan.text(errorMessage).show();
            field.addClass("is-invalid");
            field.removeClass("is-valid");
        } else {
            errorSpan.text("").hide();
            field.removeClass("is-invalid");
            field.addClass("is-valid");
        }
    }
    $("input,textarea").on("input", function () {
        validateField(this);
    });

    $("form").on("submit", function (e) {
        let isValid = true;
        $(this).find("input, textarea").each(function () {
            validateField(this);
            if ($(this).hasClass("is-invalid")) {
                isValid = false;
            }
        });

        if (!isValid) {
            e.preventDefault();
        }
    });
});
