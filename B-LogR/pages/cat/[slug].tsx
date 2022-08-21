import Head from "next/head";
import { Aside } from "../../components/Aside";
import { Posts } from "../../components/Posts";
import { getCategories, getPostsByCat } from "../../services/gql";
import { IPost, IList } from "../../utils/types";

const Category = ({ posts, categories }: { posts: { node: IPost}[], categories: IList[] } ) => {
  return <div className="container mx-auto px-4 flex gap-6 mt-6 flex-col-reverse lg:flex-row">
      <Head>
        <title>B-LogR</title>
      </Head>

      <Posts posts={posts} />

      <Aside list={categories} title="Categories"  />
    </div>
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const posts = await getPostsByCat(params.slug);
  const categories = await getCategories();

  return {
    props: {
      posts,
      categories,
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
