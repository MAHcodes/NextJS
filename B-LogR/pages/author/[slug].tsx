import { Posts } from "../../components/Posts";
import { getAuthor, getAuthors } from "../../services/gql";
import { IAuthor } from "../../utils/types";

const Author = ({ author }: { author: IAuthor }) => {
  console.log(author);
  return (
    <div className="container mt-6 mx-auto px-4">
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4">
          <img
            className="rounded-lg w-40 h-40 object-contain"
            src={author.profile.url}
            alt={author.name}
          />
          <div>
            <h1 className="font-bold mb-2 text-4xl text-black">
              {author.name}
            </h1>
            <p>{author.bio}</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold my-2 text-2xl text-black">Posts by {author.name}:</h2>
          <Posts posts={author.posts} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const author = await getAuthor(params.slug);

  return {
    props: {
      author,
    },
  };
};

export const getStaticPaths = async () => {
  const authors = await getAuthors();

  const paths = authors.map((author: { node: { slug: string } }) => {
    return {
      params: {
        slug: author.node.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Author;
