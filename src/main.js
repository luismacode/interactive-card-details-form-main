import {
  showMessageError,
  hideMessageError,
  validatefieldfilled,
} from "./helpers/index.js";

const cardHolder = document.querySelector(".card__holder"),
  inputHolder = document.querySelector("#card-holder"),
  cardHolderError = document.querySelector(".form__error--cardholder");

const cardNumber = document.querySelector(".card__number"),
  inputNumber = document.querySelector("#card-number"),
  cardNumberError = document.querySelector(".form__error--cardnumber");

const cardExpirationMonth = document.querySelector(".card__expiration-month"),
  cardExpirationYear = document.querySelector(".card__expiration-year"),
  inputExpirationMonth = document.querySelector("#expiration-month"),
  expirationMonthError = document.querySelector(
    ".form__error--expiration-month"
  ),
  inputExpirationYear = document.querySelector("#expiration-year"),
  expirationYearError = document.querySelector(".form__error--expiration-year");

const cardCvc = document.querySelector(".card__cvc"),
  inputCvc = document.querySelector("#card-cvc"),
  cvcError = document.querySelector(".form__error--cvc");

const confirmButton = document.querySelector(".form__button");

inputHolder.addEventListener("input", (e) => {
  cardHolder.textContent = e.target.value;
  hideMessageError(e.target, cardHolderError);
  if (e.target.value === "") {
    cardHolder.textContent = "Jane Appleseed";
    showMessageError(e.target, cardHolderError, "can't be blank");
  }
});

inputNumber.addEventListener("input", (e) => {
  hideMessageError(e.target, cardNumberError);
  let inputValue = e.target.value;
  cardNumber.textContent = e.target.value;
  const regExp = /[A-z]/g;
  if (regExp.test(e.target.value)) {
    showMessageError(e.target, cardNumberError, "Wrong format. Numbers only");
  } else {
    e.target.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trimEnd();
  }

  if (e.target.value === "") {
    cardNumber.textContent = "0000 0000 0000 0000";
    showMessageError(e.target, cardNumberError, "can't be Blank");
  }
});

inputExpirationMonth.addEventListener("input", (e) => {
  hideMessageError(e.target, expirationMonthError);
  cardExpirationMonth.textContent = e.target.value;
  if (e.target.value === "") {
    cardExpirationMonth.textContent = "00";
    showMessageError(e.target, expirationMonthError, "can't be blank");
  }
});

inputExpirationYear.addEventListener("input", (e) => {
  hideMessageError(e.target, expirationYearError);
  cardExpirationYear.textContent = e.target.value;
  if (e.target.value === "") {
    cardExpirationYear.textContent = "00";
    showMessageError(e.target, expirationYearError, "can't be blank");
  }
});

inputCvc.addEventListener("input", (e) => {
  hideMessageError(e.target, cvcError);
  cardCvc.textContent = e.target.value;
  if (e.target.value === "") {
    cardCvc.textContent = "000";
    showMessageError(e.target, cvcError, "can't be blank");
  }
});

confirmButton.addEventListener("click", (e) => {
  e.preventDefault();
  validatefieldfilled(inputHolder.value, inputHolder, cardHolderError);

  validatefieldfilled(inputNumber.value, inputNumber, cardNumberError);
  if (inputNumber.value.length > 0 && inputNumber.value.length < 19) {
    showMessageError(inputNumber, cardNumberError, "wrong card number");
  }

  if (inputExpirationMonth.value < 0 || inputExpirationMonth.value > 12) {
    showMessageError(inputExpirationMonth, expirationMonthError, "wrong month");
  }
  if (inputExpirationMonth.value.length !== 2) {
    showMessageError(inputExpirationMonth, expirationMonthError, "wrong month");
  }
  validatefieldfilled(
    inputExpirationMonth.value,
    inputExpirationMonth,
    expirationMonthError
  );

  if (inputExpirationYear.value < 22 || inputExpirationYear.value > 27) {
    showMessageError(inputExpirationYear, expirationYearError, "wrong year");
  }
  if (inputExpirationYear.value.length !== 2) {
    showMessageError(inputExpirationYear, expirationYearError, "wrong year");
  }
  validatefieldfilled(
    inputExpirationYear.value,
    inputExpirationYear,
    expirationYearError
  );

  const regExp = /[A-z]/g;
  if (regExp.test(inputCvc.value)) {
    showMessageError(inputCvc, cvcError, "there can't letter");
  }
  if (inputCvc.value.length !== 3) {
    showMessageError(inputCvc, cvcError, "wrong cvc");
  }
  validatefieldfilled(inputCvc.value, inputCvc, cvcError);
});
