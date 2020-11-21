const gql = require("graphql-tag");
const ApolloClient = require("apollo-client").ApolloClient;
const fetch = require("node-fetch");
const createHttpLink = require("apollo-link-http").createHttpLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;

const httpLink = createHttpLink({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  fetch: fetch
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

//Definiendo la URL
const serverData = require('../server');
let baseUrlFeedMs = `http://${serverData.feed_url}/${serverData.feed_entryPoint}`;
let baseUrlLabelsMs = `http://${serverData.labels_url}/${serverData.labels_entryPoint}`;
let gateway = `http://localhost:5000/`;


/*
async function getAllAdmins(){
    let url = gateway;

    let requestOptions = {
        apollo: {
            allAdministrativos: gql`
                query{
                    allAdministrativos{
                        id
                        nombre
                        apellido
                        edad
                    }
                }
            `
        }
    };
    console.log('entra')
    console.log(ApolloClient)
    const response = await fetch(url, requestOptions)
        .then(response => {
            console.log('entraResp')
            return{
                status: response.status,
                body: response.json()
            }
        })
        .then(response => {
            console.log('entraResp2')
            return response;
        });
    return {
        status:response.status,
        body: (await response.body)
    };

}
*/
module.exports = {
    client
}
