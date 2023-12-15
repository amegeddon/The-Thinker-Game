# The Thinker Game

**Developer: Amy Cook**

[Visit live website](http)

![Mockup image](docs/ami-responsivedesign- ADD)

## Table of Content

- [Project Goals](#project-goals)
  - [User Goals](#user-goals)
  - [Site Owner Goals](#site-owner-goals)
- [User Experience](#user-experience)
  - [Target Audience](#target-audience)
  - [User Requirements and Expectations](#user-requirements-and-expectations)
- [User Stories](#user-stories)
  - [Site User](#site-user)
  - [Site Owner](#site-owner)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Fonts](#fonts)
  - [Structure](#structure)
  - [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks, Libraries & Tools](#frameworks-libraries--tools)
- [Features](#features)
- [Validation](#validation)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
  - [JavaScript Validation](#javascript-validation)
  - [Accessibility](#accessibility)
  - [Performance](#performance)
- [Testing](#testing)
  - [Performing tests on various devices](#performing-tests-on-various-devices)
  - [Browser compatibility](#browser-compatibility)
  - [Testing user stories](#testing-user-stories)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## Project Goals

-
-
-

### User Goals

### Site Owner Goals

-
-
-
-

## User Experience

### Target Audience

-
-

### User Requirements and Expectations

-
-
-
-
-
-
-

## User Stories

### Site User

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.

### Site Owner

12.
13.
14.
15.
16.

## Design

### Colour Scheme

-
-

### Fonts

### Structure

- The game consist of the following:
  -
  -
  -
  -
  -

### Wireframes

<details><summary>Big screens - laptop & desktop</summary>
<img src="">
</details>
<details><summary>Medium screens - tablets</summary>
<img src="">
</details>
<details><summary>Small screens - mobile</summary>
<img src="">
</details>

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Tools

- [Am I Responsive](http://ami.responsivedesign.is/)
- [Bootstrap v5.1.3](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Adobe Stock Images]
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/) was used as a remote repository to store project code
- [Google Fonts](https://fonts.google.com/)
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools)
- [WC3 Validator](https://validator.w3.org/), [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/), [JShint](https://jshint.com/), [Wave Validator](https://wave.webaim.org/), [Lighthouse](https://developers.google.com/web/tools/lighthouse/) and [Am I Responsive](http://ami.responsivedesign.is/) were all used to validate the website

## Features

The website has just the one webpage and utilises a hide or Display function to toggle between the three game sections: 1. Start Game 2. Game Area 3. End Game. The game incorporates the following features:

### Home screen

#### Title

### Difficulty level screen

- User can choose from three different difficulty levels; easy, medium and hard.
- User stories covered: 3, 13

<details><summary>See feature</summary>
<img src="docs/">
</details>

### Game screen

- The below elements are displayed on the screen:
  - Selected difficulty level of the game
  - Number of guesses left in the round
  - Category of the phrase to be guessed
  - Progress bar that shows the user visually how close they are to guessing the hidden thinker.
  - Underscores for each letter of the hidden name.
  -
- User stories covered: 4, 5, 6

<details><summary>See feature</summary>
<img src="">
</details>

### Correct Guess Screen

- The below elements are displayed on the screen:
  - Congratulations message to the user
  - Image of Archimides in the bath shouting Eureka
  - Wisdom Winnings in the form of a philosophical quote.
  - Button to play another round
  - current user score
  - quit button
- User stories covered: 7

<details><summary>See feature</summary>
<img src="docs/">
</details>

### Wrong Guess Screen

- The below elements are displayed on the screen:
  - Commiserations message
  - Image of Freud smoking a cigar
  - Button to play another round
  - current user score
  - quit button
- User stories covered: 8

<details><summary>See feature</summary>
<img src="docs/">
</details>

### 404 error page

- A 404 error page has been created which is displayed if the user enters a url that does not exist.
- Returns user to mainpage via .... button
- User stories covered: 15

<details><summary>See feature</summary>
<img src="docs/">
</details>

## Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors.

<details><summary>Home</summary>
<img src="doc/">
</details>

<details><summary>404 error page</summary>
<img src="docs/">
</details>

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. Upon validation
When validating all website,

<details><summary>All site</summary>
<img src="docs/">
</details>
<details><summary>Style.css</summary>
<img src="docs/">
<img src="docs/">
</details>

### JavaScript Validation

JSHint JS Validation Service was used to validate the Javascript files. No significant issues were found.

<details><summary>game.js</summary>
<img src="docs/">

### Accessibility

The WAVE WebAIM web accessibility evaluation tool was used
in order to ensure that accessibility standards were met. No accessibility errors were found.

<details><summary>Home page</summary><img src="docs/">
<details><summary>404 page</summary><img src="docs/">
</details>

### Performance

Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.

<details><summary>Home page</summary><img src="docs">
<details><summary>404 page</summary><img src="docs/">
</details>

## Testing

### Performing tests on various devices

The website was tested using Google Chrome Developer Tools Toggle Device Toolbar to simulate viewports of different devices.

The website was tested on the following devices:

- Windows Surface pro (laptop screen size)
- Ipad (tablet screen)
- Huawei P30 (mobile screen)
- Apple 10 (mobile screen)
- Samsung galaxy 21 (mobile screen)

### Browser compatibility

- Testing has been carried out on the following browsers:
  - Googe Chrome Version .... which version
  - Firefox Browser .. check version

### Testing user stories

1. I want to easily understand the rules of the game

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Instructions Icon | Click on the icon | Modal with game instructions pops up | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-1-a.JPG">
<img src="docs/user-story-testing/user-story-1-b.JPG">
</details>

2. I want to enter my name and have it visible on screen while the game is played

| **Feature**    | **Action**                                                           | **Expected Result**                               | **Actual Result** |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------- | ----------------- |
| Username input | Type user name (1-12 characters) and click button or press Enter key | User log in and name displayed in top left corner | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-2-a.JPG">
<img src="docs/user-story-testing/user-story-2-b.JPG">
<img src="docs/user-story-testing/user-story-2-c.JPG">
</details>

3. I want to be able to choose a difficulty level for the game

| **Feature**             | **Action**                                                             | **Expected Result**                                                                                     | **Actual Result** |
| ----------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------- |
| Difficulty level screen | Click one of the three buttons on the screen to play the relevant game | The chosen game level screen loads. Game level and number of guesses are displayed on top right corner. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-3-a.JPG">
<img src="docs/user-story-testing/user-story-3-b.JPG">
<img src="docs/user-story-testing/user-story-3-c.JPG">
<img src="docs/user-story-testing/user-story-3-d.JPG">
</details>

4. I want to have different categories of phrases to guess from

| **Feature**                           | **Action**                               | **Expected Result**                                                       | **Actual Result** |
| ------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- | ----------------- |
| Difficulty level screen & Game screen | Select the level of desired game to play | The phrase category is displayed on the game screen above the sun picture | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-4-a.JPG">
<img src="docs/user-story-testing/user-story-4-b.JPG">
</details>

5. I want to be able to play the game both by clicking the mouse and by using the keyboard

| **Feature** | **Action**                                                               | **Expected Result**                                                                        | **Actual Result** |
| ----------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ----------------- |
| Game screen | Click on the displayed alphabet buttons or press the key on the keyboard | The letter which have already been clicked/pressed changes color and cannot be used again. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-5-a.JPG">
<img src="docs/user-story-testing/user-story-5-b.JPG">
</details>

6. I want to be able to see which letters I have already guessed and the number of guesses I have left in the round

| **Feature** | **Action**                                                               | **Expected Result**                                                                                              | **Actual Result** |
| ----------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------- |
| Game screen | Click on the displayed alphabet buttons or press the key on the keyboard | Used letters change color and cannot be used again. Number of remaining guesses is displayed in top right corner | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-6-a.JPG">
<img src="docs/user-story-testing/user-story-6-b.JPG">
</details>

7. I want to see my result after I guessed the phrase

| **Feature**          | **Action**                                                                            | **Expected Result**                                             | **Actual Result** |
| -------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------- |
| Correct Guess Screen | Guess the hidden phrase within specific number of guesses for the game level selected | The message and number of points scored in the round displayed. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-7.JPG">
</details>

8. I want to see the phrase I didn’t manage to guess

| **Feature**        | **Action**                                                  | **Expected Result**             | **Actual Result** |
| ------------------ | ----------------------------------------------------------- | ------------------------------- | ----------------- |
| Wrong Guess Screen | All guesses were used and the hidden phrase was not guessed | The correct phrase is displayed | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-8.JPG">
</details>

9. I want to be able to play the game on desktop, tablet and mobile devices

| **Feature**                                   | **Action**                | **Expected Result**                      | **Actual Result** |
| --------------------------------------------- | ------------------------- | ---------------------------------------- | ----------------- |
| Every page has been designed to be responsive | Change device screen size | The site works on different screen sizes | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-9-a.JPG">
<img src="docs/user-story-testing/user-story-9-b.JPG">
<img src="docs/user-story-testing/user-story-9-c.JPG">
<img src="docs/user-story-testing/user-story-9-d.JPG">
</details>

10. I want to be able to get in touch with the developer

| **Feature**  | **Action**                               | **Expected Result**       | **Actual Result** |
| ------------ | ---------------------------------------- | ------------------------- | ----------------- |
| Contact Form | Click on the envelope icon in the footer | Displays the contact form | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-10-a.JPG">
<img src="docs/user-story-testing/user-story-10-b.JPG">
</details>

11. I want to be sure that my message has been sent

| **Feature**                      | **Action**                                           | **Expected Result**                        | **Actual Result** |
| -------------------------------- | ---------------------------------------------------- | ------------------------------------------ | ----------------- |
| Contact Form confirmation screen | Fill in the contact form and click the submit button | The contact form confirmation is displayed | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-11-a.JPG">
<img src="docs/user-story-testing/user-story-11-b.JPG">
</details>

12. I want user to easily understand the game

| **Feature**       | **Action**                      | **Expected Result**                  | **Actual Result** |
| ----------------- | ------------------------------- | ------------------------------------ | ----------------- |
| Instructions Icon | Click on the icon on any screen | Modal with game instructions pops up | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-12-a.JPG">
<img src="docs/user-story-testing/user-story-12-b.JPG">
</details>

13. I want the user to be able to challenge themselves

| **Feature**             | **Action**                                                                                                                  | **Expected Result**                             | **Actual Result** |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------- |
| Difficulty level screen | User selects on of the three available levels of the game which includes the hard version with only a few available guesses | The game level screen loads of the chosen game. | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-13.JPG">
</details>

14. I want my game to be fully responsive

| **Feature**                                   | **Action**                | **Expected Result**                      | **Actual Result** |
| --------------------------------------------- | ------------------------- | ---------------------------------------- | ----------------- |
| Every page has been designed to be responsive | Change device screen size | The site works on different screen sizes | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-14-a.JPG">
<img src="docs/user-story-testing/user-story-14-b.JPG">
<img src="docs/user-story-testing/user-story-14-c.JPG">
<img src="docs/user-story-testing/user-story-14-d.JPG">
</details>

15. I want the user to come to a 404 error page instead of having to use the browser back button if they enter a url that does not exist

| **Feature**    | **Action**           | **Expected Result**                                                                       | **Actual Result** |
| -------------- | -------------------- | ----------------------------------------------------------------------------------------- | ----------------- |
| 404 error page | Page cannot be found | When a user types the wrong address or cannot find a page they are rerouted to a 404 page | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-15.JPG">
</details>

16. I want user to be able to contact me and provide their feedback

| **Feature**  | **Action**                                                  | **Expected Result**                                              | **Actual Result** |
| ------------ | ----------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
| Contact Form | User fills in the contact form and clicks the submit button | Developer receives email with user's contact details and message | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-story-testing/user-story-16-a.JPG">
<img src="docs/user-story-testing/user-story-16-b.JPG">
</details>

## Bugs

| Bug                                                                                                                                         | Fix                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| All div with difficulty level buttons was responsive to click event and game level which appeared on the game screen was 'null'             | Added code for click event to only respond on elements with specific class (buttons)   |
| W3C Markup Validation Service highlighted that heading was not closed                                                                       | Corrected the error by closing the h1 tag                                              |
| Number of remaining guesses displayed on the cloud icon went below 0                                                                        | Amended code to display 0 when there were no guesses left                              |
| Images for medium & hard level game were not showing on the game screen                                                                     | There was an error in image path in game-data.js file which I corrected                |
| Game container was going off the screen for iPhone 5/ SE when tested with Chrome DevTools                                                   | Changed offset of game container for screens max-width: 390px                          |
| When added footer to the game screen it was located at the top of the screen                                                                | Set footer with position fixed                                                         |
| Whilst the contact form was validated, no data was sent to email                                                                            | Set up an email template and amended code with specific contact_service & contact_form |
| Game container was going off the background leaving a white space below the background image on mobile and tablet screen in horizontal view | Changed background image position from absolute to fixed                               |
| Contact form username input was pushed off the screen when user clicked on the element, making the input invisible to the user              | Add contact form container offset on username input focus                              |

## Deployment

### GitHub Pages

The website was deployed using GitHub Pages by following these steps:

1. In the GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. For the source select Branch: main
4. Once saved, GitHub will refresh and your website will be publishd from GitHub repository
5. The link to your published website will appear: "Your site is published at https://aleksandracodes.github.io/CI_PP2_SunshineGuessing/"

### Forking the GitHub Repository

1. Go to the GitHub repository
2. Click on Fork button in top right corner

### Making a Local Clone

1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Highlight the "HTTPS" button to clone with HTTPS and copy the link
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7. Press Enter to create your local clone

## Credits

### Images

- arrow used on back button was taken from [Fontawesome](https://fontawesome.com/)
- The four images used all come from Adobe Stock images and have been licensed for use [Adobe Stock Images](https://stock.adobe.com/uk)
- Images edited to remove background and resized using adobe Photoshop 


### Code

- 

## Acknowledgements

Thanks in plentiful supply for everyone who has put up with me cursing javascript. 

- to my mentor Richard for reminding me at every mentor meeting that Javascript is brilliant
- and to everyone else that I have hounded into playing the game and giving me feedback
- finally, thanks to the slack community for their encouragement and advice. 
- and not forgetting the tutor team who have been able to point me in the right direction when a game bug looked impossibly unsolvable.
