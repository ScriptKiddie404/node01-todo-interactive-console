const { v4 } = require('uuid');

class Task {

    id = '';
    description = '';
    finishedDate = null;

    constructor(description) {
        this.id = v4();
        this.description = description;
    }

}

module.exports = Task;