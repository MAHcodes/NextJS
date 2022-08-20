import Link from "next/link";
import React, { FC } from "react";
import { IPost } from "../utils/types";

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
                    <Link href={`/author/${post.athuror.slug}`}>
                      <div className="group transition duration-300 hover:shadow-md shadow-blue-100 items-center gap-2 p-1 pr-3 cursor-pointer inline-flex bg-gray-100 hover:bg-blue-50 rounded-full">
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={post.athuror.profile.url}
                          alt={post.athuror.name}
                        />
                        <div>
                          <p className="text-xs text-blue-500">Author: </p>
                          <h1 className="text-sm text-blue-800 group-hover:underline">
                            {post.athuror.name}
                          </h1>
                        </div>
                      </div>
                    </Link>
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
