import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getCategories } from "../services/gql";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => {
      console.log(res)
    })
  }, []);

  return (
    <div className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer hover:text-blue-100">
            <Logo />
            <h2 className="mx-5 font-bold text-xl">B-LogR</h2>
          </div>
        </Link>
        <nav className="flex items-center">
          <ul></ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
