const { Router } = require("express");
const taskRouter = Router();
const taskController = require("../controllers/taskController");

taskRouter.get("/",taskController.task);
taskRouter.post("/",taskController.sent)

module.exports = taskRouter;