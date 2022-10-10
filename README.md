# webinar-cypress

## Introduction

The instructions below have been prepared for macOS. 
If you are using a different system, please note that the commands in the terminal may be different.

## Install Homebrew

Run the following command in the terminal:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

When the installation is complete, you should see a section "==> Next steps:" with two commands:
Run these two commands in your terminal to add Homebrew to your PATH:
Important! Copy the commands from the terminal!!!
`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/your-user-name/.zprofile`
`eval "$(/opt/homebrew/bin/brew shellenv)"`

## Install Node.js via Homebrew

Run the following command in the terminal:
`brew install node`

Try `node -v` to confirm Node.js version and `npm -v` to confirm NPM version.

## Install Cypress

In the terminal, go to the catalog with your project:
`cd /your/project/path`

Install Cypress via npm:
`npm install cypress --save-dev`

## Launch Cypress


In the terminal, navigate to the directory with your project and run the following command:
`./node_modules/.bin/cypress open --browser chrome`

## Faker installation

Faker is a popular library that generates fake (but reasonable) data.

In the terminal, navigate to the directory with your project and run the following command:
`npm install --save-dev @faker-js/faker`

Faker's documentation:
https://fakerjs.dev/guide/
