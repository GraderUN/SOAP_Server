const soap = require(`soap`);
const fs = require('fs');

const dataServer = require('./server');

const soapServer = require(`./Server/index`);
const ss_2e = require('./Server/service');


var xml = fs.readFileSync(`./src/Server/ss_2e_service.wsdl`, 'utf8');
soapServer.listen(dataServer.soap_server_port, function() {
    soap.listen(soapServer, '/ss_2e', ss_2e, xml, function() {
        console.log('Soap corriendo en http://localhost:' + dataServer.soap_server_port);
    });
});