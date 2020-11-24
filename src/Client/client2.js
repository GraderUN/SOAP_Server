//Importando lo necesario
const soap = require('soap');

//Consumiendo funcion ejemplo Soap
async function getPuntajes() {

    const client = await soap.createClientAsync('http://3.236.12.226:8001/wsdl?wsdl');

    let puntajes = () => {
        return new Promise(resolve => {
            client.getuser((err, result) => {
                if(err){
                    console.log(err);
                }
                resolve(result);
            });
        });
    };

    let result = await puntajes();

    return result;


}

module.exports = {getPuntajes}