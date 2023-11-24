require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const session = require("express-session");
const User = require("./app/models/User");

const PORT = process.env.PORT || 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./public"));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  if (request.session.user) {
    response.locals.user = request.session.user;
  }
  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
