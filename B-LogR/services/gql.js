import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        slug
        name
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.categories;
};
