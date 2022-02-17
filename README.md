# Phase 4 Blog Project

## Description

This project is a basic blogging site that allows you to write new posts and edit and delete existing ones. You start by creating or logging into an account. From there you will have access to the available blog posts that have full CRUD implementation. There is also a navigation bar that has a link to a page where you can create new posts, another link to the main page, and a logout button.


## Setup
Before running the application you will likely need to run `bundle install` and `npm install --prefix client`

You can then use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

Make sure that PostgreSQL is running or else the backend server will not work. 
You may need to run this command to start the Postgres service:
```sh
sudo service postgresql start
```

