const os = require('os');
const fs = require('fs');

console.clear();
const homedir = os.homedir();
const nombreProyecto = 'gatito'
const folderName = `${homedir}\\Desktop\\${nombreProyecto}`;

console.log(os.hostname());
console.log(os.networkInterfaces());
console.log(os.platform());

// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName);
//         console.log(`El proyecto ${nombreProyecto} ha sido creado.`);
//     }
// } catch (error) {
//     console.error(error);
// }