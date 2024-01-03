# Flashcards Application

### This repository contains a React-based Flash Card App facilitating the creation, editing, and deletion of flash cards, with card data served from a json-server and a user-friendly interface featuring searching, filtering, sorting, sharing, and infinitely scrolling.
### [Live Demo](https://mammadmammadov.github.io/Web_1_Fall-2023_Assignment-3/)

### Technologies
- HTML, CSS, JS (React), JSON Server, sweetalert2

### Installation

Make sure that you have [Node.js](https://nodejs.org/en/download) installed on you machine before you follow the steps below.

1. Clone this repository: `git clone https://github.com/mammadmammadov/Web_1_Fall-2023_Assignment-3.git` or download as a ZIP file
2. Load up the project in your editor of choice
3. Navigate to the project directory: `cd card-application`
4. Open a new terminal, change directory by typing `cd card-application` and install dependencies by typing `npm install`
5. Type `json-server flashcards.json --port 3001` to start JSON server for flashcards
6. Open a new terminal, change directory by typing `cd card-application` and type `json-server messages.json --port 3002` to start JSON server for messages
7. Open a new terminal, change directory by typing `cd card-application` and type `npm start` to run the application

### Usage

Access the application in your browser: http://localhost:3000/flashcards
Explore the features:
- Create new flashcards with text and questions on both sides.
- View, edit, and delete existing cards.
- Search for cards based on text content.
- Filter cards by status (Learned, Want to Learn, Noted).
- Sort cards by various attributes.
- Select multiple cards and share them via email
- Go to contact page, try submitting the form, and find that info. inside `messages.json`

