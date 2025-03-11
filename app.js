const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter")

app.set("view engine","ejs");
app.use("/",indexRouter);
app.use(express.static("public"))

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
