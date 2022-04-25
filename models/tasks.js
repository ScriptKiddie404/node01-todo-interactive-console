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

    get tasksArr() {

        const taskList = []

        Object.keys(this.list).forEach(key => {
            const task = this.list[key];
            taskList.push(task);
        });

        return taskList;
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this.list[task.id] = task;
        });
    }

    listTasksWithFormat() {

        console.clear();

        this.tasksArr.forEach((task, index) => {
            const newIndex = `${index + 1}.`.blue;
            const { description, finishedDate } = task;
            const state = (finishedDate) ? `Finished`.blue : `Not finished`.red;
            console.log(`${newIndex} ${description} ::: ${state}`);
        });


    }


    listFinishedAndNotFinished(finished = true) {

        console.clear();
        let counter = 0;

        this.tasksArr.forEach(task => {

            const { description, finishedDate } = task;
            const state = (finishedDate) ? `Finished`.blue : `Not finished`.red;


            if (finished) {
                if (finishedDate) {
                    counter++;
                    console.log(`${counter}. `.blue + ` ${description} ::: ${finishedDate}`);
                }
            } else {
                if (!finishedDate) {
                    counter++;
                    console.log(`${counter}. `.blue + ` ${description} ::: ${state}`);
                }
            }

        });


    }

}

module.exports = Tasks;