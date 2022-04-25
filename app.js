// =========================== Thid party imports ================================= //
require('colors');
// ================================================================================ //

// =============================== My imports ===================================== //
const { menu, pause, readInput } = require('./helpers/inquirer');
const { saveData, loadData } = require('./helpers/save-data');
const Tasks = require('./models/tasks');
// =============================================================================== //

(async () => {

    let selectedOption;
    const tasks = new Tasks();

    // We load previous tasks if data exists:
    const savedTasks = loadData();
    
    if(savedTasks){
        tasks.loadTasksFromArray(savedTasks);
    }

    do {

        selectedOption = await menu();

        switch (selectedOption) {
            case 1:
                const taskDescription = await readInput('Write task description:');
                tasks.addTask(taskDescription);
                await pause();
                break;
            case 2:
                tasks.listTasksWithFormat();
                await pause();
                break;
            default:
                await pause();
                break;
        }

        // We save all the tasks on .json
        saveData(tasks.tasksArr);

    } while (selectedOption !== 7);

})();