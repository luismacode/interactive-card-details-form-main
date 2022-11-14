export const showMessageError = (input, error, message) => {
  error.textContent = message;
  input.style.outline = "1px solid var(--red)";
};

export const hideMessageError = (input, error) => {
  error.textContent = "";
  input.style.outline = "1px solid transparent";
};

export const validatefieldfilled = (value, input, error) => {
  if (value.length == 0) {
    showMessageError(input, error, "can't be blank");
  }
};
