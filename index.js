import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send("Graph QL Working !")
})

const root = { friend: () => {
    return {
        id: 123456,
        firstName: "Nilanjan",
        lastName: "Dutta",
        gender: "Male",
        language: "Bengali",
        email: "a@a.com"
    }
} };


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log("Runnign server on port localhost:8080/graphql"));