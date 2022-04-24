// =========================== Thid party imports ================================= //
require('colors');
// =============================== Our imports ==================================== //
const { menu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

(async () => {

    let selectedOption;
    const tasks = new Tasks();

    do {

        selectedOption = await menu();
        await pause();

        switch (selectedOption) {
            case 1:
                const taskDescription = await readInput('Write task description: ');
                tasks.addTask(taskDescription);
                break;
            case 2:
                console.log(tasks.list);
                await pause();
                break;
            default:
                break;
        }

    } while (selectedOption !== 7);

})();