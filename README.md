# Rock Paper Scissors Lizard Spock

**Rock Paper Scissors Lizard Spock** is a advanced version of the Rock Paper Scissors game that I have decided to make with HTML, CSS and Javascript. You have 5 choices and 5 rounds to win the game. The game is one player and you must beat the computer to win.

![Am I responsive?](./assets/images/am-i-resonsive.png)

[Play the game here.](https://dylanp400.github.io/RockPaperScissorsLizardSpockPP2/)

![GitHub last commit](https://img.shields.io/github/last-commit/DylanP400/RockPaperScissorsLizardSpockPP2)
![GitHub contributors](https://img.shields.io/github/contributors/DylanP400/RockPaperScissorsLizardSpockPP2)
![GitHub language count](https://img.shields.io/github/languages/count/DylanP400/RockPaperScissorsLizardSpockPP2)
![GitHub top language](https://img.shields.io/github/languages/top/DylanP400/RockPaperScissorsLizardSpockPP2)
![GitHub Commit activity](https://img.shields.io/github/commit-activity/m/DylanP400/RockPaperScissorsLizardSpockPP2)
![Code size](https://img.shields.io/github/languages/code-size/DylanP400/RockPaperScissorsLizardSpockPP2)
![Github files](https://img.shields.io/github/directory-file-count/DylanP400/RockPaperScissorsLizardSpockPP2)

![Github stars](https://img.shields.io/github/stars/DylanP400/RockPaperScissorsLizardSpockPP2)
![Github forks](https://img.shields.io/github/forks/DylanP400/RockPaperScissorsLizardSpockPP2)

# Contents

* [User Experience](#user-experience)

  * [Initial Discussion](#initial-discussion)

  * [User Stories](#user-stories)

* [Design](#design)

  * [Colour Scheme](#colour-scheme)

  * [Imagery](#imagery)

  * [Wireframes](#wireframes)

  * [How to play](#how-to-play)

* [Features](#features)

  * [General features on each page](#general-features-on-each-page)

* [Technologies Used](#technologies-used)

  * [Languages Used](#languages-used)
  
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Testing](#testing)

  * [Lighthouse](#lighthouse)

  * [Bugs](#bugs)

  * [Accessibility](#accessibility)

* [Deployment](#deployment)

  * [Local deplyoment](#local-deployment)

* [Credits](#credits)

  * [Code Used](#code-used)

  * [Content](#content)

  * [Media](#media)

  * [Acknowledgments](#acknowledgments)

# User Experience

## Initial Discussion

### Key information for this site

* An advanced version of the traditional game of Rock, Paper Scissors.

* Two new choices Lizard & Spock.

* A game to play between the user and the computer.

* Learn how to play Rock Paper Scissors Lizard Spock.

## User Stories

* I want the game to load quickly.

* I dont want too much of a challenge.

* I want to see my score go up.

* I want to see if I won.

### Client goals

* To be able to view the game on a range of devices.

* To make it clear how to play the game.

* To have game controls that are easy to read and use.

* To be able to play the game again.

# Design

## Colour Scheme

## Imagery

I have used two images in this game one at the start before playing and the second is after the game ends. I also used the second image for the favicon.

* I got te first image from [The Big Bang Theory Fandom](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)

* ![Introduction Image](./assets/images/rules.webp)

* I got the second image from [Chasing The Frog](http://www.chasingthefrog.com/item/rock-paper-scissors-lizard-spock-t-shirt/).

  * ![Game Characters](./assets/images/r-p-s-l-s.jpg)

## Wireframes
* Phone.

  * ![Phone](./assets/images/wireframe-phone-1.jpg)

  * ![Phone](./assets/images/wireframe-phone-2.jpg)

  * ![Phone](./assets/images/wireframe-phone-3.jpg)

* Tablet.

  * ![Tablet](./assets/images/wireframe-tablet-1.jpg)

  * ![Tablet](./assets/images/wireframe-tablet-2.jpg)

  * ![Tablet](./assets/images/wireframe-tablet-3.jpg)

* Desktop.

  * ![Desktop](./assets/images/wireframe-desktop-1.jpg)

  * ![Desktop](./assets/images/wireframe-desktop-2.jpg)

  * ![Desktop](./assets/images/wireframe-desktop-3.jpg)

## How to play

Both players pick a choice rock beats scissors and crushes lizard, scissors beats lizard by decapitating it, and beats paper by cutting it, paper beats rock by covering it and discredits spock, lizard eats paper and poisons Spock, Spock smashes scissors and vaporizes rock.

# Features

## General features on each page

# Technologies Used

## languages used

* HTML
* CSS
* JavaScript

## Frameworks, Libraries & Programs Used

* [Git](https://git-scm.com/) - For version Control.

* [Github](https://github.com/) - Used to save amd store the files for the website.

* [Gitpod](https://www.gitpod.io/) - Was used to created my code.

* [Google Dev Tools](https://developer.chrome.com/docs/devtools/) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [AM I Resposnsive?](https://amiresponsive.co.uk/) - Used to show the Website image on a range of devices.

* [Shields](https://shields.io/) - For the shields at the top of the README.

* [Favicon](https://www.favicon-generator.org/) - Used to make a Favicon for the website.

* [Coolors](https://coolors.co/808080-ff0000-ffffff-f5f5f5-000000) - For my colour scheme.

* [Lamba Testing](https://www.lambdatest.com/?fp_ref=ngan15&gclid=Cj0KCQjwocShBhCOARIsAFVYq0i7XM8lENlC8yIrumBcCkS42VLHZfT6Fjc5waFzBGuNk6OCc7kIBFUaAou3EALw_wcB) - Was used for testing resposiveness across various devices.

* [Favicon Generator](https://www.favicon-generator.org/) - Was
 used to make the favicon.

* [HTML Validator](https://validator.w3.org/) - For HTML validation.

* [W3 Jigsaw](https://jigsaw.w3.org/css-validator/) - For CSS validation.

* [JS Hint](https://jshint.com/) For JavaScript validation.

# Testing

## Bugs

| Bug | Solution |
| :---| :---|
|I used If/else statements for the game logic checkWinner() the game kept giving a draw at random | I used a Switch statement instead to solve this problem.|
| The winning streak was going up in doubles after playing again. | I was calling playgame() inside newGame() that was causing this issue.
| I had a footer that would not stay down across the page | After two days of trying to sort it I decided to remove the footer |

# Deployment

## Local Deployment

### How to Fork

To fork the repository:

1. Log in to Github.
2. Go to the repository for this project, [DylanP400/RockPaperScissorsLizardSpockPP2](https://github.com/DylanP400/RockPaperScissorsLizardSpockPP2)
3. Click the Fork button in the top right corner.

### How to clone

To clone the repository:

1. Log in to GitHub.
2. Go to the repository for this project, [DylanP400/RockPaperScissorsLizardSpockPP2](https://github.com/DylanP400/RockPaperScissorsLizardSpockPP2)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

# Credits

## Code Used

## Content

## Media

## Acknowledgments