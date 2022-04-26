// =========================== Thid party imports ================================= //
require('colors');
// ================================================================================ //

// =============================== My imports ===================================== //
const { menu, pause, readInput, listTasksForDelete, confirmation, showCheckList } = require('./helpers/inquirer');
const { saveData, loadData } = require('./helpers/save-data');
const Tasks = require('./models/tasks');
// =============================================================================== //

(async () => {

    let selectedOption;
    const tasks = new Tasks();

    // We load previous tasks if data exists:
    const savedTasks = loadData();

    if (savedTasks) {
        tasks.loadTasksFromArray(savedTasks);
    }

    do {

        selectedOption = await menu();

        switch (selectedOption) {

            case 1:
                const taskDescription = await readInput('Write task description:');
                tasks.addTask(taskDescription);
                break;

            case 2:
                tasks.listTasksWithFormat();
                break;

            case 3:
                tasks.listFinishedAndNotFinished();
                break;

            case 4:
                tasks.listFinishedAndNotFinished(false);
                break;

            case 5:
                const ids = await showCheckList(tasks.tasksArr);
                tasks.toggleCompletedTasks(ids);
                break;

            case 6:

                const id = await listTasksForDelete(tasks.tasksArr);

                if (id !== 0) {

                    const ok = await confirmation(`Are you sure?`);

                    if (ok) {


                        let temporalDescription = tasks.list[id].description;
                        tasks.deleteTask(id);
                        console.log('\nThe task \"' + `${temporalDescription}`.blue + '\" was deleted.');

                    }
                }


                break;
            default:
                break;
        }

        await pause();
        // We save all the tasks on .json
        saveData(tasks.tasksArr);

    } while (selectedOption !== 7);

    console.clear();

})();