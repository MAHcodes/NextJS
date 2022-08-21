import Link from "next/link";
import React, { FC } from "react";
import { IPost } from "../utils/types";
import { Author } from "./Author";

interface Props {
  posts: { node: IPost }[];
}

export const Posts: FC<Props> = ({ posts }) => {
  return (
    <main className="basis-3/4">
      <>
        {posts.map(({ node: post }) => {
          return (
            <div key={post.slug}>
              <Link href={`/post/${post.slug}`}>
                <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-300 p-5">
                  <div className="basis-1/4 overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      src={post.image.url}
                      alt={post.title}
                    />
                  </div>
                  <div className="basis-3/4">
                    <h1 className="font-bold text-xl">{post.title}</h1>
                    <p className="my-2">{post.excerpt}</p>
                    <Author athuror={post.athuror} />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </>
    </main>
  );
};
