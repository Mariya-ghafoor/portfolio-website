# portfolio-website

## Demo

- https://mariya-ghafoor.github.io/portfolio-website/

## Requirements / Purpose

- Requirement was to build a portfolio website using HTML, CSS and Javascript
- Purpose of the project is to showcase the skills of the developer.
- The stack used included HTML, CSS, SCSS and Javascript. HTML and CSS were used to build the basic version. SCSS was included to make CSS more readable and reusable. Javascript adds interactivity to the website.

## Build Steps

- Install Node.js
- Install sass:
  `npm install -g sass`

## Design Goals / Approach

- Design goal was to be minimalistic with light colors that are pleasing to the eyes and simple interactive features.
- I believe minimalist designs are the most powerful and convey the clarity of thought of the designer. They are also more engaging and appeal to a large range of population of different age groups.

## Features

- The website has the following features:
  - It is a single page website which means there is no refreshing even when the user navigates to another section.
  - The navigation menu convert into a 'Hamburger menu' when screen becomes smaller than a certain size.
  - The individual link in the menu highlights when user navigates to that section.
  - Headings change color slowly when mouse hovers over
  - Font sizes are based on the size of the root element (rem) making them easy to configure while keeping uniformity across the website.
  - Skills section shows flip-card affect which complements the frontend/backend skills possessed by the programmer by showing front and back of a card.
  - Projects cards magnify when hovered over making a single card easier to read on small screens.
  - Projects include link to live website and github. Where there is no website (like Snake Game) it includes a link to a website where the program could be run.
  - The email icon in the Contact section opens user's email app where the user can directly mail the programmer.

## Known issues

- On Iphone 14 the skills list goes out of the card's dimensions in width. This is due to the fixed font-size.
- Also in Iphone 14 the backside of the card disappears after a second (reason unknown.)

## Future Goals

- Add media query for font size of skills so that on smaller screens the list stays inside the card.
- Flip card affect should happen automatically and stop when user hovers over the card instead of vice versa.

## What did you struggle with?

- It was hard to convert regular navigation menu to hamburger menu and back to regular menu.
- Through Javascript hamburger menu was achieved but it was not going back to regular menu when screen size got bigger even when media queries were there.
- To achieve this a new Javascript function was added which was called everytime the user changed the screen size, checked if the size got bigger than 641px and then forced the hamburger menu to go back to regular menu.

## Licensing Details

- Open source license.
