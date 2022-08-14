import React from "react";
import { AsideCard } from "./AsideCard";

export const Aside = ({ categories }: { categories: [] }) => {
  console.log(categories);
  return (
    <aside className="basis-1/5 flex flex-col gap-4">
      <AsideCard list={categories} title="Categories" />
    </aside>
  );
};
