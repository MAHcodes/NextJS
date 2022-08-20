import { Aside } from "../../components/Aside";
import { getPost, getPostsSlug } from "../../services/gql";
import { IPost } from "../../utils/types"; 

const Post = ({post} : {post: IPost}) => {
  return (
    <div className="container mx-auto px-4">
      <div className=""></div>
      {/* <Aside /> */}
      <h1>{post.title}</h1>
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {

  const post = await getPost(params.slug);

  console.log({post})
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const postsSlugs = await getPostsSlug();
  
  const paths = postsSlugs.map((slug: { node: { slug: string } }) => ({
    params: {
      slug: slug.node.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
