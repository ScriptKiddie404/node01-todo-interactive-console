// =========================== Thid party imports ================================= //
require('colors');
// =============================== Our imports ==================================== //
const { inquireMenu } = require('./helpers/inquirer');



(async () => {
    const selectedOption = await inquireMenu(); 
})();