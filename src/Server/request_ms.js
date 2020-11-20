const fetch = require('node-fetch');

//Definiendo la URL
const serverData = require('../server');
let baseUrlFeedMs = `http://${serverData.feed_url}/${serverData.feed_entryPoint}`;
let baseUrlLabelsMs = `http://${serverData.labels_url}/${serverData.labels_entryPoint}`;