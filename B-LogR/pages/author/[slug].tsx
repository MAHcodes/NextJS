import { getAuthor, getAuthors } from "../../services/gql";
import { IAuthor } from "../../utils/types";

const Author = ({author}: {author: IAuthor}) => {
  return <div>{author.name}</div>;
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const author = await getAuthor(params.slug);

  return {
    props: {
      author
    }
  }
};

export const getStaticPaths = async () => {
  const authors = await getAuthors();

  const paths = authors.map((author: { node: { slug: string } }) => {
    return {
      params: {
        slug: author.node.slug,
      }
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Author;
