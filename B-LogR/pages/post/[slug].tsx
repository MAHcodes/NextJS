import { Author } from "../../components/Author";
import { getPost, getPostsSlug } from "../../services/gql";
import { IPost } from "../../utils/types"; 

const Post = ({post} : {post: IPost}) => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="relative">
        <img className="w-full object-contain rounded-md" src={post.image.url} alt={post.title} />
        <div className="from-transparent to-custom-gray bg-gradient-to-b absolute inset-0 top-1/2" />
      </div>
      <h1 className="font-bold mt-[-3rem] mb-2 relative text-4xl text-black">{post.title}</h1>
      <Author athuror={post.athuror} />
      <p dangerouslySetInnerHTML={{__html: post.description.html}} className="mt-4" />
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {

  const post = await getPost(params.slug);

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
