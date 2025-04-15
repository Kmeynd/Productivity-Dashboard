const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const taskRouter = require("./routes/taskRouter");
require('dotenv').config()

app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use("/",indexRouter);
app.use("/task",taskRouter);
app.get("*",(req,res)=>{res.render("errors")})


const PORT =  process.env.firstPORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
