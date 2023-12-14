const express = require("express");
const router = express.Router();

const task = require('../controllers/task.controller');
const taskController = require("../controllers/task.controller");

router.get('/', task.getTasks);
router.post('/', task.createTask);
router.get('/:id', task.getTask);
router.get('/:date_execute', task.getTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
