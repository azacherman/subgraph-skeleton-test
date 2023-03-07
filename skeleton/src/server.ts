import 'module-alias/register';
import { apolloServer } from './graphql/apollo-server';
import { startStandaloneServer } from '@apollo/server/standalone';
import logger from '@lib/logger';

async function startApolloServer() {
    const port = 4001;
    const subgraphName = 'imei';

    try {
        const { url } = await startStandaloneServer(apolloServer, {
            listen: { port },
        });

        logger.info(`🚀 Subgraph ${subgraphName} running at ${url}.`);
    } catch (error) {
        logger.error(error, 'Error in starting up apollo server.');
    }
}

startApolloServer();
