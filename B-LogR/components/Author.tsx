import Link from "next/link";
import React from "react";
import { IAuthor } from "../utils/types";

export const Author = ({athuror}:{athuror: IAuthor}) => {
  return (
    <Link href={`/author/${athuror.slug}`}>
      <div className="group transition duration-300 hover:shadow-md shadow-blue-100 items-center gap-2 p-1 pr-3 cursor-pointer inline-flex bg-gray-100 hover:bg-blue-50 rounded-full">
        <img
          className="w-8 h-8 object-cover rounded-full"
          src={athuror.profile.url}
          alt={athuror.name}
        />
        <div>
          <p className="text-xs text-blue-500">Author: </p>
          <h1 className="text-sm text-blue-800 group-hover:underline">
            {athuror.name}
          </h1>
        </div>
      </div>
    </Link>
  );
};
