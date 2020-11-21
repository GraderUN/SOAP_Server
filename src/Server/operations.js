const client = require('./request_ms');

async function prueba(args) {
    return "hola";
}
async function getStudents(args){
    /*client.query({
        query: gql`
          query GetRates {
            rates(currency: "USD") {
              currency
            }
          }
        `
      }).then(
        result =>{
            console.log(result);
            return result;
        }
        );*/
        return "correcto";
}

async function getAdministratives() {
    let response = await client.getAllAdmins();
    let tag = [];
    if(response.status == 200) {
        response.body.forEach(element => {
            tag.push({
                id: element.id,
                nombre: element.nombre,
                apellido: element.apellido,
                edad: element.edad
            });
        });
    }

    return{
        tag: tag
    }
}

module.exports = {
    prueba,
    getStudents,
    getAdministratives
}
