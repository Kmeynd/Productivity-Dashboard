const { Router } = require("express");
const taskRouter = Router();
const indexController = require("../controllers/indexController");

taskRouter.get("/", indexController.tasks);

module.exports = taskRouter;