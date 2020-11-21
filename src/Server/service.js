const operations = require(`./operations`);

var myService = {
    ss_2e: {
        functions: {
            tags: operations.prueba,
            students: operations.getStudents,
            administratives: operations.getAdministratives
        }
    }
}

module.exports = myService;
