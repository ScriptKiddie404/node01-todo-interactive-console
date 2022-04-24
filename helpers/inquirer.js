const inquirer = require('inquirer');
const fs = require('fs');
require('colors');

let menuQuestions = [
    {
        type: "list",
        name: "option",
        message: "What do you want to do?",
        choices: [
            {
                value: 1,
                name: "1. Crete a task."
            },
            {
                value: 2,
                name: "2. List tasks."
            },
            {
                value: 3,
                name: "3. List finished tasks."
            },
            {
                value: 4,
                name: "4. List incomplete tasks."
            },
            {
                value: 5,
                name: "5. Finish tasks."
            },
            {
                value: 6,
                name: "6. Delete tasks."
            },
            {
                value: 7,
                name: "7. Exit."
            }
        ]
    }
];

const menu = async () => {

    console.clear();
    console.log(`====================`.blue);
    console.log(`${'='.blue} Select an option ${'='.blue}`);
    console.log(`====================\n`.blue);

    const { option } = await inquirer.prompt(menuQuestions);

    return option;

}

const pause = async () => {

    const question = {
        type: 'input',
        name: 'enter',
        message: `Press ${`ENTER`.blue} to continue...`
    }

    await inquirer.prompt(question);


}

module.exports = {
    menu,
    pause
}