const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const methodOverride = require("method-override")
const flash = require("connect-flash")
const session = require("express-session")
const Handlebars = require("hbs")
const passport = require("passport");
const mustBeAuthenitcated = require("./middlewares/authenticated")


const authRouter = require("./routes/auth")
const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")
const contactsRouter = require("./routes/contacts")

const mongoose = require("mongoose")

const app = express()


mongoose
  .connect("mongodb://localhost:27017/phonebook_app")
  .then(() => {
    console.log("DB connected successfully")
  })
  .catch((error) => {
    console.log(error)
  })
// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")
Handlebars.registerPartials(__dirname + "/views/partials", function (err) { })


app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser("my secret"))
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))
// app.use(express.session({ cookie: { maxAge: 60000 } }))
app.use(
  session({
    secret: "my secret",
    resave: true,
    saveUninitialized: false,
    // store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
  })
)
app.use(passport.authenticate("session"))
app.use(flash())

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
})
app.use("/", indexRouter)


app.use("/", authRouter)
app.use("/users", usersRouter)
app.use("/contacts", mustBeAuthenitcated, contactsRouter)

app.get("/test-flash", function (req, res) {
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash("info", "Flash is back!")
  res.redirect("/")
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.render('404');
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
