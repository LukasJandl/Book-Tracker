# Book-Tracker

## Description

This is a solo project to practice the full tech stack of the advanced module of Codecool. The main purpose of this project is not to add many features, but rather to put focus on the main topics that help to practice the tech stack. 

It allows the user to sign up and log in to search for books using the Google Books API, save them in a Database and update the current reading status.

It is a web application containing a frontend- and a backend server. The frontend is the UI built with React and Node.js, and the backend is a REST API built with the Spring Framework in Java.

## Tech Stack

- Java
- Spring Framework
- Spring Web (CRUD functionality in a `@RestController`)
- Spring Data JPA (using `@Entity` classes with a repository and a H2 database)
- Spring Security (with basic authentication and OAuth2 Resource Server for JWT)
- JavaScript
- React
- Bootstrap

## Run locally

In order to start both, the frontend and the backend server, we need two terminals. These commands are tested in a Linux (Debian) environment.

Open a Terminal and clone the project:
```ssh
git clone git@github.com:LukasJandl/Book-Tracker.git
```

Navigate to the backend directory to start the backend:
```ssh
mvn spring-boot:run
```

In a second terminal navigate to the frontend folder to install the dependencies and to start the frontend:
```ssh
npm install && npm run dev
```

When both servers are running, open the following link in your browser to open the application: http://localhost:5173/.

There is one default user provided for the login:
- Username: `user`, Password: `user`

## Screenshots

Landing page with a logged in user:
![image](https://raw.githubusercontent.com/LukasJandl/Book-Tracker/main/screenshots/Landing_2.png)

Searching for books:
![image](https://raw.githubusercontent.com/LukasJandl/Book-Tracker/main/screenshots/Search_for_title.png)

Modal with book details:
![image](https://raw.githubusercontent.com/LukasJandl/Book-Tracker/main/screenshots/Modal_1.png)

Bookshelf with saved books:
![image](https://raw.githubusercontent.com/LukasJandl/Book-Tracker/main/screenshots/Bookshelf.png)

Registration page with error message:
![image](https://raw.githubusercontent.com/LukasJandl/Book-Tracker/main/screenshots/Register_3.png)




