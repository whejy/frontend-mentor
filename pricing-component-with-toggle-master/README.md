# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Links

[Solution URL](https://your-solution-url.com)\
[Live Site](https://pricing-component-with-toggle-five-tau.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript
- [Bootstrap styles](https://getbootstrap.com/)

### What I learned

I am happy with how the script file turned out. I focused on making the logic as reusable as possible, which I believe I have accomplished. The rendered cards can be easily changed in a single place:

```js
const availablePlans = [
  ['Basic', 19.99, 199.99, '500 GB', 2, 2],
  ['Professional', 24.99, 249.99, '1 TB', 5, 10],
  ['Master', 39.99, 399.99, '2 TB', 10, 20],
];
```

With all subsequent styling handled automatically:

```js
const generateCardHtml = (plan, i) => {
  let buttonColor;
  let cardColor;
  let textColor;

  // Alternate card/ button colours
  if (i % 2 === 0) {
    buttonColor = 'primary-background primary-btn';
    cardColor = 'white-background';
  } else {
    buttonColor = 'white-background white-btn';
    cardColor = 'primary-background primary-card';
    textColor = 'white-text';
  }

  // ...
```

I would still like to improve at CSS.

## Author

- Frontend Mentor - [@whejy](https://www.frontendmentor.io/profile/whejy)