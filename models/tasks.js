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
            const state = (finishedDate) ? `Completed`.blue : `Not Completed`.red;
            console.log(`${newIndex} ${description} ::: ${state}`);
        });


    }


    listFinishedAndNotFinished(finished = true) {

        console.clear();

        let counter = 0;

        this.tasksArr.forEach(task => {

            const { description, finishedDate } = task;
            const state = (finishedDate) ? `Completed`.blue : `Not Completed`.red;


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

    deleteTask(id = '') {

        if (this.list[id]) {
            delete this.list[id];
        }

    }

    toggleCompletedTasks(ids = []) {

        ids.forEach(id => {

            const task = this.list[id]; //We recover single task.

            if (!task.finishedDate) { //If there is not date, means not finished, so, we add a date
                task.finishedDate = new Date().toISOString();
            }

        });

        /* 
            Now we need to verify if the the array of id's includes the id's of the tasks, if not, means the task 
            is marked as not finished, so, we need to change the date as null.
        */

        this.tasksArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this.list[task.id].finishedDate = null;
            }
        });

    }


}

module.exports = Tasks;