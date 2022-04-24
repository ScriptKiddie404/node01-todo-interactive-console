require('colors');

const readUserInput = async (message) => {

    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const answer = await readLine.question(message);
    readLine.close();

    return answer;

}


const showMenu = () => {

    return new Promise(resolve => {

        console.log(`${`1.`.blue} Create a task.`);
        console.log(`${`2.`.blue} List tasks.`);
        console.log(`${`3.`.blue} List finished tasks.`);
        console.log(`${`4.`.blue} List incomplete tasks.`);
        console.log(`${`5.`.blue} Mark tasks as finised.`);
        console.log(`${`6.`.blue} Delete tasks.`);
        console.log(`${`0.`.blue} Exit.\n`);

        const selectedOption = await readUserInput('Option: ');

        resolve(selectedOption);

    });

}

const pause = () => {

    return new Promise(resolve => {
        readUserInput(`Press ${`ENTER`.blue} to continue...`);    
        resolve();
    });

}

module.exports = {
    showMenu,
    pause
}