const operations = require(`./operations`);

var myService = {
    ss_2e: {
        functions: {
            students: operations.getStudents,
            teachers: operations.getTeachers,
            administratives: operations.getAdministratives
        }
    }
}

module.exports = myService;
