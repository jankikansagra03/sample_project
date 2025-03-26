
// useJQueryValidation.js;
import { useEffect } from "react";
import $ from "jquery";
import "jquery-validation";

$.validator.addMethod(
  "regex",
  function (value, element, regexPattern) {
    return this.optional(element) || regexPattern.test(value);
  },
  function (params, element) {
    return $(element).data("error-message") || "Invalid format";
  }
);

$.validator.addMethod(
  "imageMimes",
  function (value, element) {
    if (element.files.length === 0) return false; // No file selected
    const allowedMimes = ["image/jpeg", "image/png", "image/gif"];
    return allowedMimes.includes(element.files[0].type);
  },
  "Only image files (JPG, JPEG, PNG, GIF) are allowed"
);

$.validator.addMethod(
  "filesize",
  function (value, element, param) {
    if (element.files.length === 0) {
      return true; // Ignore empty field validation
    }
    return element.files[0].size <= param;
  },
  "File size must be less than 200KB"
);

const useJQueryValidation = (formId, rules, messages) => {
  useEffect(() => {
    $(`#${formId}`).validate({
      errorClass: "error border-red-500", // Tailwind class for invalid fields
      validClass: "border-green-500", // Tailwind class for valid fields
      highlight: function (element) {
        $(element)
          .addClass("border-red-500 border-2")
          .removeClass("border-green-500");
      },
      unhighlight: function (element) {
        $(element)
          .addClass("border-green-500 border-2")
          .removeClass("border-red-500");
      },
      errorPlacement: function (error, element) {
        if (
          element.attr("type") === "checkbox" &&
          element.attr("name") === "hobbies"
        ) {
          error.appendTo(
            element.closest(".hobbies-group").find(".error-message")
          );
        } else {
          error.insertAfter(element);
        }
      },
      rules: rules,
      messages: messages,
    });
  }, [formId, rules, messages]);
};

export default useJQueryValidation;
