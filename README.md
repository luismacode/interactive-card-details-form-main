# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![screenshot-desktop](./screenshots/interactive-card-details-desktop.jpeg)
![screenshot-mobile](./screenshots/interactive-card-details-mobile.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM Naming
- javascript modules

### What I learned

 Use these two functions to show or hide error message as well as adding or removing styles of the input element.

  ```js
    const showMessageError = (input, error, message) => {
      error.textContent = message;
      input.style.outline = "1px solid var(--red)";
    };
    const hideMessageError = (input, error) => {
      error.textContent = "";
      input.style.outline = "1px solid transparent";
    };
  ```

Use this function to validate if The field has some content or not In case the field is empty set an attribute in the input element with a string "false" otherwise set to "true"

  ```js
    const validateFillField = (value, input, error) => {
      if (value.length == 0) {
        showMessageError(input, error, "can't be blank");
        input.setAttribute("data-isfill", "false");
      } else {
        input.setAttribute("data-isfill", "true");
      }
    };
  ```

Use this function to validate if The field has some letter or not In case the field has letters set an attribute in the input element with a string "true" otherwise set to "false"

```js
  const validateLetter = (value, input, error) => {
    const regExp = /[A-z]/g;
    if (regExp.test(value)) {
      showMessageError(input, error, "can't be letter");
      input.setAttribute("data-hasletter", "true");
    } else {
      input.setAttribute("data-hasletter", "false");
    }
  };
```

Use this part of code to detect if the user is adding spaces to replace it with nothing, then detect if there are groups of four consecutives numbers  and then add a space automatically .Also delete the final space.

```js
  let inputValue = e.target.value;
  cardNumber.textContent = e.target.value;
  e.target.value = inputValue
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trimEnd();

```

### Continued development

We can make improvements in validating if the field contains special characters that are not characters of use in the Latin alphabet.for example that the field of the card number does not allow the character '%','/',' #',etc. since in this challenge all the fields are of type text.

### Useful resources

[input-event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) - Small article that explains the basic use of the input event with examples.

[replace-method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - Excellent guide to learn how to use the replace method

[regular-expresions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) - Excellent guide to learn how to use the regular expresions with Good examples easy to understand.Regular expressions are a powerful way to validate text fields.

[data-attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - Excellent guide to learn how create data attributes and How to access them using JavaScript.

## Author

- Linkedin - [luismachaca](https://www.linkedin.com/in/luismachaca)
- Frontend Mentor - [@luismacode](https://www.frontendmentor.io/profile/luismacode)
- Twitter - [@luismacode](https://www.twitter.com/luismacode)

## Acknowledgments

I want to give thanks to David of [CodingTube](https://www.youtube.com/@CodingTube/about) channel Since your [youtube video](https://www.youtube.com/watch?v=52q6OGbcIso&list=WL&index=2).It was of great help to finish this challenge.
