import { getCategories, getPostsByCat } from "../../services/gql";
import { IPost } from "../../utils/types";

const Category = ({ posts }: { posts: IPost[] }) => {
  console.log(posts);
  return <div>{posts[0].title}</div>;
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const posts = await getPostsByCat(params.slug);

  return {
    props: {
      posts: posts.map(({node}: {node: IPost}) => node),
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await getCategories();

  const paths = categories.map((category: { slug: string }) => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Category;
