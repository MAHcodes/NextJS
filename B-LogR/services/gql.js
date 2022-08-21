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

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            title
            slug
            excerpt
            athuror {
              name
              slug
              profile {
                url
              }
            }
            image {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getPostsByCat = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      postsConnection {
        edges {
          node {
            title
            slug
            excerpt
            categories(where: { slug: $slug }) {
              slug
              name
            }
            athuror {
              name
              slug
              profile {
                url
              }
            }
            image {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getPostsSlug = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
        title
        slug
        excerpt
        description {
          html
        }
        athuror {
          name
          slug
          profile {
            url
          }
        }
        image {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getAuthors = async () => {
  const query = gql`
    query MyQuery() {
      athurorsConnection {
        edges {
          node {
            slug
        }
      }
    }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.athurorsConnection.edges;
};

export const getAuthor = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      athuror(where: { slug: $slug }) {
        name
        slug
        bio
        profile {
          url
        }
        posts {
          slug
          title
          image {
            url
          }
          excerpt
          athuror {
            name
            slug
            profile {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.athuror;
};
