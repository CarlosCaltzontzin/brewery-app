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

Access the application at http://localhost:3000

'npm run dev' runs the concurrently command. If you arn't able to run the 'npm run dev' command because you don't have concurrently installed, you can install it globally or locally. Below is the command to install it globally:

```bash
npm install -g concurrently
```