//Importando lo necesario
const soap = require('soap');

//Consumiendo funcion ejemplo Soap
async function getPuntajes() {

    const client = await soap.createClientAsync('http://ec2-3-238-177-238.compute-1.amazonaws.com:8000/ss_2e?wsdl');

    let puntajes = () => {
        return new Promise(resolve => {
            client.students((err, result) => {
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