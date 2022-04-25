const inquirer = require('inquirer');
require('colors');

const menuQuestions = [
    {
        type: "list",
        name: "option",
        message: "What do you want to do?",
        choices: [
            {
                value: 1,
                name: `${'1.'.blue} Create a task.`
            },
            {
                value: 2,
                name: `${'2.'.blue} List tasks.`
            },
            {
                value: 3,
                name: `${'3.'.blue} List completed tasks.`
            },
            {
                value: 4,
                name: `${'4.'.blue} List incomplete tasks.`
            },
            {
                value: 5,
                name: `${'5.'.blue} Mark tasks as completed.`
            },
            {
                value: 6,
                name: `${'6.'.blue} Delete tasks.`
            },
            {
                value: 7,
                name: `${'7.'.blue} Exit.`
            }
        ]
    }
];

const menu = async () => {

    console.clear();
    console.log(`====================`.blue);
    console.log(`= ${`Select an option`.white} ${'='.blue}`.blue);
    console.log(`====================`.blue);
    const { option } = await inquirer.prompt(menuQuestions);

    return option;

}

const pause = async () => {

    const question = {
        type: 'input',
        name: 'enter',
        message: `Press ${`enter`.blue} to continue...`
    }

    console.log('\n');
    await inquirer.prompt(question);
    console.clear();


}

const readInput = async (message) => {

    console.clear()
   
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value = '') {
                const error = 'Please enter a description.'
                return value.length === 0 ? error : true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);

    return description;

}

module.exports = {
    menu,
    pause,
    readInput
}