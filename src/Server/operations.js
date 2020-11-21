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
module.exports = { 
    prueba,
    getStudents
}