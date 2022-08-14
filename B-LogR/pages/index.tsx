import Head from "next/head";
import { Aside } from "../components/Aside";
import { Posts } from "../components/Posts";
import { InferGetStaticPropsType } from "next";
import { getCategories } from "../services/gql";

const Home = ({ categories }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="container mx-auto px-4 flex gap-4 mt-6 flex-col lg:flex-row">
      <Head>
        <title>B-LogR</title>
      </Head>

      <Posts />
      <Aside categories={categories} />
    </div>
  );
};

export async function getStaticProps() {
  const categories = await getCategories();
  return {
    props: {
      categories,
    },
  };
}

export default Home;
