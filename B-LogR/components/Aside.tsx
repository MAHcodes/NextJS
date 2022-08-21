import { FC } from "react";
import { IList } from "../utils/types";
import { AsideCard } from "./AsideCard";

interface Props {
  list: IList[];
  title: string;
}

export const Aside:FC<Props> = ({list, title}) => {
  return (
    <aside className="basis-1/4 flex flex-col gap-4">
      <AsideCard list={list} title={title}/>
    </aside>
  );
};
