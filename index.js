import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import resolvers from './resolver';

const app = express();

app.get('/', (req, res) => {
    res.send("Graph QL Working !")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log("Runnign server on port localhost:8080/graphql"));