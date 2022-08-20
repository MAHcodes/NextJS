import { FC } from "react";
import { AsideCard } from "./AsideCard";

interface List {
  slug: string;
  name: string;
}

interface Props {
  list: List[];
  title: string;
}

export const Aside:FC<Props> = ({list, title}) => {
  return (
    <aside className="basis-1/4 flex flex-col gap-4">
      <AsideCard list={list} title={title}/>
    </aside>
  );
};
