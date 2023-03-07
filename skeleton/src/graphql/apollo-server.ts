import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { readFileSync } from 'fs';
import gql from "graphql-tag";
import path from "path";

const typeDefs = gql(readFileSync(path.join(__dirname, '${{name}}.graphql'), { encoding: 'utf-8' }));

export const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});
