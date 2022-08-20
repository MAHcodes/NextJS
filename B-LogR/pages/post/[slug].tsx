import { Aside } from "../../components/Aside";
import { getPostsSlug } from "../../services/gql";

const Post = ({ slug }) => {
  return (
    <div className="container mx-auto px-4">
      <div className=""></div>
      {/* <Aside /> */}
      <h1>{slug}</h1>
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      slug: params.slug
    },
  };
};



export const getStaticPaths = async () => {
  const posts = await getPostsSlug();

  const paths = posts.map((post) => ({
    params: {
      slug: post.node.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
