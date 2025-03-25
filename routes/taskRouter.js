const { Router } = require("express");
const taskRouter = Router();
const taskController = require("../controllers/taskController");
const { body, validationResult } = require("express-validator");

const validateTaskName = [
    body('name').trim().escape().notEmpty().withMessage('Task name cannot be empty')
    .isLength({ min: 2, max: 35 }).withMessage('Task name must be between 2 and 35 characters'),
    body('time').isLength({ min: 1, max: 3 }).escape().withMessage(`Time must be between 1 and 999 minutes`),
    body('NewCategory').escape().notEmpty().withMessage('New Category cannot be empty')
    .isLength({ min: 2, max: 35 }).withMessage('New Category must be between 2 and 35 characters'),
]

taskRouter.get("/",taskController.task);
taskRouter.post("/",validateTaskName,taskController.sent)

module.exports = taskRouter;