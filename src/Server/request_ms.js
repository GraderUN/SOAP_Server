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
/*
module.exports = {
    client
}
*/