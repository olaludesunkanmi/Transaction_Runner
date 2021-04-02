[![Build Status](https://travis-ci.com/olaludesunkanmi/Transaction_Runner.svg?branch=main)](https://travis-ci.com/olaludesunkanmi/Transaction_Runner)

## Project Overview

An app where user transaction mocks a financial ledger

### Features

1. Users can sign up.
2. Users can login.
3. Users can send money.
4. Users can add money
5. Users can view his/her transaction.
6. Users can delete his/her transaction

### Installation

- filepath> git clone https://github.com/olaludesunkanmi/Transaction_Runner.git
- create database with postgres named `transaction_runnerDb`
- run `npm i`
- run `npm start`

### API Endpoints.

##### Base URL

The project base url can be visited on clicking the link [Heroku](https://transaction-runner-v1.herokuapp.com/)

| S/N | Verb   | Endpoint                      | Description              |
| --: | ------ | ----------------------------- | ------------------------ |
|   1 | Post   | /api/v1/auth/signup           | Create a user account    |
|   2 | Post   | /api/v1/auth/login            | Sign in a user           |
|   3 | Post   | /api/v1//transaction/addmoney | User receives money      |
|   4 | Post   | /api/v1/transaction/sendmoney | User sends money         |
|   5 | Get    | /api/v1//transaction          | User views transaction   |
|   6 | Delete | /api/v1/transaction           | User deletes transaction |

## Technologies

### Backend

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [PostgreSQL](https://www.postgresql.org/) A powerful, open source object-relational database system.
- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Mocha](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [NodeJS](nodejs.org/en) for testing [Javascript](javascript.com) applications.

### Author

Sunkanmi Olalude
