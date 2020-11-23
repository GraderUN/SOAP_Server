//Llamando al client soap del sistema de software 2a
const CLIENT = require(`./client2`);


//Controller de la ruta
async function getAllPuntctuation(req, res){

    //Llamando a la funcion del cliente soap
    let response = await CLIENT.getPuntajes();
    //let llaves = response.keys();
    let ranking = []
    for(k in response){
        ranking.push(response[k])
    }
    ranking.sort(function(a, b){
        return b.puntaje - a.puntaje;
    });

    //Retornar resultado
    res.send(ranking);
}
async function working(req, res){
    //Retornar resultado
    res.send("working");
}

module.exports = {working,getAllPuntctuation};
