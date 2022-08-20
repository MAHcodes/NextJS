import Link from "next/link";
import { FC } from "react";

interface List {
  slug: string
  name: string
}

interface Props {
  list: List[]
  title: string;
}

export const AsideCard:FC<Props> = ({list, title}) => {
  return (
    <div className="bg-white rounded-lg p-5">
      <h2 className="font-bold text-lg mb-4 pb-4 border-b-gray-300 border-b">
        {title}
      </h2>
      {list.map(({ slug, name }) => (
        <p className="hover:underline" key={slug}>
          <Link href={`/cat/${slug}`}>{name}</Link>
        </p>
      ))}
    </div>
  );
};
