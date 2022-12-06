export const showMessageError = (input, error, message) => {
  error.textContent = message;
  input.style.outline = "1px solid var(--red)";
};

export const hideMessageError = (input, error) => {
  error.textContent = "";
  input.style.outline = "1px solid transparent";
};

export const validateFillField = (value, input, error) => {
  if (value.length == 0) {
    showMessageError(input, error, "can't be blank");
    input.setAttribute("data-isfill", "false");
  } else {
    input.setAttribute("data-isfill", "true");
  }
};

export const validateLetter = (value, input, error) => {
  const regExp = /[A-z]/g;
  if (regExp.test(value)) {
    showMessageError(input, error, "can't be letter");
    input.setAttribute("data-hasletter", "true");
  } else {
    input.setAttribute("data-hasletter", "false");
  }
};
