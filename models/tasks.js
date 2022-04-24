const Task = require("./task");

class Tasks {

    list = {};

    constructor() {
        this.list = {}
    }

    addTask(description) {
        const task = new Task(description);
        this.list[task.id] = task;
    }

}

module.exports = Tasks;