const soap = require(`soap`);
const express = require(`express`);
const dataServer = require('../server');
const fs = require('fs');
const bodyParser = require('body-parser');
const ss_2e = require('./service');

var xml = fs.readFileSync('./ss_2e_service.wsdl', 'utf8');
//var xml = fs.readFileSync('./src/Server/ss_2e_service.wsdl', 'utf8');

let soap_server = express();
soap_server.use(bodyParser.raw({ type: function() { return true; }, limit: '5mb' }));
soap_server.listen(dataServer.soap_server_port, function() {
    soap.listen(soap_server, '/ss_2e', ss_2e, xml, function() {
        console.log('Server runnig in http://localhost:' + dataServer.soap_server_port);
    });
});

const rest_server = express()
const api_rest = require('./../Client/routes')

rest_server.use(bodyParser.urlencoded({extended: false}))
rest_server.use(bodyParser.json())
rest_server.use('', api_rest)

rest_server.listen(dataServer.rest_server_port, () => {
    console.log(`REST corriendo en http://localhost:${dataServer.rest_server_port} `)
})