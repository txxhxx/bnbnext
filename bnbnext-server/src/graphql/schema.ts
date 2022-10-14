import { merge } from 'lodash'
import { gql } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import * as user from './user'
import * as collection from './collection'

const typeDefs = gql`
    scalar Date

    type Query {
        _version: String
    }

    type Mutation {
        _version: String
    }
`

const resolvers = {
    Query: {
        _version: () => '1.0'
    },
    Mutation: {
        _version: () => '1.0'
    }
}

const schema = makeExecutableSchema({
    typeDefs: [typeDefs, user.typeDefs, collection.typeDefs],
    resolvers: merge(
        resolvers,
        user.resolvers,
        collection.resolvers
    )
});

export default schema;