import Link from "next/link";
import React from "react";

export const AsideCard = ({list, title}: {list: [], title: String}) => {
  return (
    <div className="bg-white rounded-lg p-5">
      <h2 className="font-bold text-lg mb-4 pb-4 border-b-gray-300 border-b">
        {title}
      </h2>
      {list.map(({ slug, name }) => (
        <p className="hover:underline" key={slug}>
          <Link href={slug}>{name}</Link>
        </p>
      ))}
    </div>
  );
};
