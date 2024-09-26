[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/CsGB6QiX)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15873362)
# Login Page
![Example Image](Example.png)

## Description

This is a simple login page with a hero image in the background. The login form is positioned in the center of the hero image. The form contains two fields: username and password, and two buttons: Submit and Clear. The text on the page has a yellow background and is styled with the Comic Sans MS font. When the Submit button is hovered over, its background color changes to light gray and its text color changes to black. When the form is submitted, the default form submission behavior is prevented, the content of the page changes to "Login Successful", and the page reloads after 5 seconds.

## Environment Setup
1. Download and install NodeJS [NodeJS](https://nodejs.org/en/download/package-manager)
2. Once NodeJS is installed open a Terminal (or open the repo in VS Code and open a Terminal window)
3. Install the testing modules using: `npm install --save-dev jest jsdom jest-environment-jsdom`
4. You can now run the tests written in `index.test.js` by using VS Code testing UI or by running `npm test` in the Terminal
5. In order for the VS Code testing UI to appear you may have to restart VS Code.  The testing UI icon appears like a small beaker on the left side of the window
   
## Requirements

1. The page must have a hero image that covers the entire width of the page.  An image has been included in the repo for you to use ![Hero Image](hero.png)
2. The login form must be positioned in the center of the hero image.
3. The form must contain two fields: username and password. Both fields are required.
4. The form must contain two buttons: Submit and Clear.
5. The text on the page must have a yellow background and must be styled with the Comic Sans MS font.
6. When the Submit button is hovered over, its background color must change to light gray and its text color must change to black.
7. When the form is submitted, the default form submission behavior must be prevented.
8. When the form is submitted, the content of the page must change to "Login Successful".
9. After the form is submitted and the content of the page changes to "Login Successful", the page must reload after 5 seconds. The "Login Successful" message must have the same CSS styling as the login form.
10. All CSS styling must be located in the main.css file
11. All JavaScript must be located in the app.js file
