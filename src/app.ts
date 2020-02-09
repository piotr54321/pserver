import * as express from 'express';
import * as jwt from 'express-jwt';
import {ApolloServer} from 'apollo-server-express';
import { sequelize } from './models';
import {ENV} from './config';

import {resolver as resolvers, schema} from './graphql';
import {createContext, EXPECTED_OPTIONS_KEY} from 'dataloader-sequelize'
import to from 'await-to-js';
import * as cors from "cors";
import * as http from "http";

const app = express();
app.use(cors());
const authMiddleware = jwt({
    secret: ENV.JWT_ENCRYPTION,
    credentialsRequired: false
});

app.use(authMiddleware);


app.use(function (err, req, res, next) {
    const errorObject = {error: true, message: `${err.name}: ${err.message}`};
    if(err.name === 'UnauthorizedError'){
        return res.status(401).json(errorObject);
    }else{
        return res.status(400).json(errorObject);
    }
});

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    playground: true,
    context: () => {
        return {
            [EXPECTED_OPTIONS_KEY]: createContext(sequelize)
        };
    },
});

server.applyMiddleware({
    app
});

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({port: ENV.PORT}, async () => { //if ws app => httpServer
    console.log(`🚀 Server ready at http://localhost:${ENV.PORT}${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${ENV.PORT}${server.subscriptionsPath}`);
    let err;
    [err] = await to(sequelize.sync(
        //{force: true},
    ));
    if(err){
        console.error('Nie mogę połączyć się z bazą danych');
    } else {
        console.log('Połączenie z bazą danych nawiązane');
    }
});
