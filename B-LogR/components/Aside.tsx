import { FC } from "react";
import { AsideCard } from "./AsideCard";

interface List {
  slug: string
  name: string
}

interface Props {
  categories: List[]
}

function asy(num1: number, num2: string) {
  return {num1: num1.toString(), num2: +num2};
}

export const Aside:FC<Props> = ({categories}) => {
  return (
    <aside className="basis-1/4 flex flex-col gap-4">
      <AsideCard list={categories} title="Categories" />
    </aside>
  );
};
