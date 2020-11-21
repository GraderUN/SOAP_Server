const operations = require(`./operations`);

var myService = {
    ss_2e: {
        functions: {
            tags: operations.prueba,
            students: operations.getStudents
        }
    }
}

module.exports = myService;