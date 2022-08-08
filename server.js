const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("server here");
  res.render("index", { text: "###" });
});

const userRouter = require("./routes/users");


app.use('/users', userRouter);


app.listen(5000);
