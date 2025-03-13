const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const taskRouter = require("./routes/taskRouter");

app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/",indexRouter);
app.use("/task",taskRouter);
app.use(express.static("public"))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
