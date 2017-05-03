import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    description: 'First GraphQL Server Config — Yay!', //added
    fields: {
      me,
      news,
    },
  }),
});

export default schema;
