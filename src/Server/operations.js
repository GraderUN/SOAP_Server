const gql = require("graphql-tag");
const ApolloClient = require("apollo-client").ApolloClient;
const fetch = require("node-fetch");
const createHttpLink = require("apollo-link-http").createHttpLink;
const InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;

const httpLink = createHttpLink({
  uri: "http://localhost:5000/",
  fetch: fetch,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

async function prueba(args) {
  return "adios";
}
async function getStudents(args) {
  let res = [];
  const query = gql`
    query allEstudiantes{
      allEstudiantes {
        id
        nombre
        apellido
      }
    }
  `;

  try {
    const result = await client.query({
      query,
    });
    console.log(result.data);
    result.data.allEstudiantes.forEach((element) => {
      let temp = {
        id: element.id,
        nombre: element.nombre,
        apellido: element.apellido
      };
      res.push(temp);
    });

    return res;
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(JSON.stringify(err));
  }
}
module.exports = {
  prueba,
  getStudents,
};
