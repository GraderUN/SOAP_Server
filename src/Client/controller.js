//Llamando al client soap del sistema de software 2a
const CLIENT = require(`./client2`);


//Controller de la ruta
async function getAllPuntctuation(req, res){

    //Llamando a la funcion del cliente soap
    let response = await CLIENT.getPuntajes();
    //Retornar resultado
    res.send(response);
}
async function working(req, res){
    //Retornar resultado
    res.send("working");
}

module.exports = {working,getAllPuntctuation};