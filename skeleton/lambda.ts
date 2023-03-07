import { apolloServer } from './graphql/apollo-server';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';

export const lambdaHandler = startServerAndCreateLambdaHandler(
    apolloServer,
    // We will be using the Proxy V2 handler
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
    {
        // TODO remove this middleware if not needed
        middleware: [
            async (event) => {
                console.log('###? received event=' + JSON.stringify(event));
            },
        ],
    }
);
