// =========================== Thid party imports ================================= //
require('colors');
// =============================== Our imports ==================================== //
const { menu, pause } = require('./helpers/inquirer');

const consoleApp = async () => {

    let selectedOption;

    do {

        selectedOption = await menu();
        await pause();

    } while (selectedOption !== 7);

}

consoleApp();