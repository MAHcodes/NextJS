import Head from "next/head";
import { Aside } from "../components/Aside";
import { Posts } from "../components/Posts";
import { getCategories, getPosts } from "../services/gql";

const Home = ({categories, posts}: any) => {
  return (
    <div className="container mx-auto px-4 flex gap-6 mt-6 flex-col-reverse lg:flex-row">
      <Head>
        <title>B-LogR</title>
      </Head>

      <Posts posts={posts} />

      <Aside list={categories} title="Categories"  />
    </div>
  );
};

export async function getStaticProps() {
  const categories = await getCategories();
  const posts = await getPosts();
  return {
    props: {
      categories,
      posts,
    },
  };
}

export default Home;
