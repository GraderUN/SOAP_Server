const operations = require(`./operations`);

var myService = {
    ss_2e: {
        functions: {
            tags: operations.prueba,
            students: operations.getStudents,
            teachers: operations.getTeachers,
            administratives: operations.getAdministratives
        }
    }
}

module.exports = myService;