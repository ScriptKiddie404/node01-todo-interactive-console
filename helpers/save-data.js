
const fs = require('fs');

const path = './db/data.json'


const saveData = (data) => {
    fs.writeFileSync(path, JSON.stringify(data));
}

const loadData = () => {

    if (!fs.existsSync(path)) {
        return null;
    }

    // If data exists, then:
    const info = fs.readFileSync(path, { encoding: 'utf-8' });
    const parsedInfo = JSON.parse(info);

    return parsedInfo;
}

module.exports = { saveData, loadData }