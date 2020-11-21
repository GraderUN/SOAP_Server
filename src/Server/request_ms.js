import gql from "graphql-tag";

const fetch = require('node-fetch');
//import ApolloClient from 'apollo-boost';
//import { ApolloClient, InMemoryCache } from '@apollo/client';
/*
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
*/
//Definiendo la URL
const serverData = require('../server');
let baseUrlFeedMs = `http://${serverData.feed_url}/${serverData.feed_entryPoint}`;
let baseUrlLabelsMs = `http://${serverData.labels_url}/${serverData.labels_entryPoint}`;
let gateway = `http://localhost:5000/`;

async function getAllAdmins(id){
    let url = gateway;

    let requestOptions = {
        apollo: {
            administrativoById: gql`
                query($id: Int!){
                    administrativoById(id: $id){
                        id
                        nombre
                        apellido
                        edad
                        telefono
                        email
                    }
                }
            `
        }
    };

    const response = await fetch(url, requestOptions)
        .then(response => {
            return{
                status: response.status,
                body: response.json()
            }
        })
        .then(response => {return response;});

    return {
        status:response.status,
        body: (await response.body)
    };

}

module.exports = {
    getAllAdmins
}

