# Flatiron School Phase 2 Project - Brewery Directory

## Project Description

For my phase-2 project at Flatiron school I created a simple brewery directory. 
View a list of breweries and add your favorite breweries with this simple React application.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [App](#app)
  - [BreweryForm](#breweryform)
  - [BreweryList](#brewerylist)
  - [Home](#home)
  - [NavBar](#navbar)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)

## Overview

The brewery directory is a simple React application that allows users to view a list of breweries and add new breweries. The application includes different components such as the main App, BreweryForm for adding new breweries, BreweryList for displaying existing breweries, Home for the landing page, and NavBar for navigation.

## Components

### App

The main component serves as the entry point for the application. It handles routing, fetches existing breweries, and manages state.

### BreweryForm

A form component for adding new breweries. It sends a POST request to the backend, updates the state with the new brewery, and displays success or error messages.

### BreweryList

Displays a list of breweries fetched from the backend. It fetches data on component mount and updates the user interface (UI) accordingly. 

### Home

The landing page component that welcomes users.

### NavBar

A simple navigation bar component with links to Home, Breweries, and Add Brewery.

## Installation

To run the application locally, follow these steps:

1. Clone the repository with HTTPS
```bash
git clone https://github.com/CarlosCaltzontzin/brewery-app.git
```
or SSH
```bash
git clone git@github.com:CarlosCaltzontzin/brewery-app.git
```

2. Change into the project directory
```bash
cd brewery-app
```

3. Install dependencies
```bash
npm install
```

## USAGE

Start the React development server and json-server concurrently

```bash
npm run dev
```

Access the application at http://localhost:3001

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# brewery-app
