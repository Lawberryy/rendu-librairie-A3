
# Awesome Cursors' Library

A simple JavaScript library to customize cursors on your website.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Demo](#demo)
- [Usage](#usage)
- [Contributors](#contributors)

## Introduction

This library offers an easy way to add custom cursors to your website. You can choose from several predefined cursor types and even customize some.

## Installation

To use this library in your project, you can install it via npm:

```bash
npm install cursors-library-hldv-sd
```
## Demo

To visualize all available cursors in your local environment:

```bash
npm start
```

## Usage

Import the setCursor function into your code and use it to set the custom cursor.

```javascript
import { setCursor } from 'cursors-library-hldv-sd';
```

### Predefined Cursor Types

#### Non-customizable Cursors
- heart
- cat
- sun

#### Customizable Cursors
- default: default cursor
- star
- flower

You can customize the color and size of the cursor by providing the desired values for the 'color' and 'size' parameters.

```javascript
setCursor( 'type', 'color', size );
```
Replace the above parameter names with the values you want to assign.

We recommend using:

- A 'size' parameter value between 16px and 32px for optimal cursor display
- A hexadecimal code (#XXXXXX) for the 'color' parameter.

However, both 'color' and 'size' parameters are *optional*, unlike the 'type' parameter, **which must be specified**.


Here is an example of usage:

```html
<script>
    // Using a predefined cursor
    const myCursor = setCursor('heart');

    // Optionally customizing a predefined cursor
    const myCursor = setCursor('star', '#ff0000', 24);
</script>
```

You can then apply the retrieved value to the cursor:

```html
<script>
    document.style.body.cursor = myCursor
</script>
```

It is up to you to determine the event that will trigger this cursor change.

## Contributors

- [@KishiniCHL](https://github.com/KishiniCHL)
- [@Lawberryy](https://github.com/Lawberryy)