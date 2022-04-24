const inquirer = require('inquirer');
require('colors');

const menuQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquireMenu = async () => {

    console.log(`====================`.blue);
    console.log(`${'='.blue} Select an option ${'='.blue}`);
    console.log(`====================\n`.blue);

    const selectedOption = await inquirer.prompt(menuQuestions);

    return selectedOption;

}

module.exports = {
    inquireMenu
}