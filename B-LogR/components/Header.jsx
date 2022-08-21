import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { getCategories } from "../services/gql";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div className="bg-blue-600 p-4 text-white">
      <nav className="container px-4 flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <div className="flex text-gray-200 items-center cursor-pointer hover:text-blue-50">
            <Logo />
            <h2 className="mx-4 font-bold text-xl">B-LogR</h2>
          </div>
        </Link>
        <div className="flex md:order-2">
          <a
            href="https://github.com/mhmdali102/NextJS/tree/main/B-LogR"
            target="_blank"
            className="text-blue-600  bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 font-semibold text-center mr-3 md:mr-0"
          >
            Github
          </a>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-100 hover:text-blue-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            !nav && "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {categories.map((category) => (
              <Link key={category.slug} href={`/cat/${category.slug}`}>
                <li className="block border-transparent hover:border-solid border border-b-white hover:rounded-lg hover:bg-blue-500 md:hover:bg-transparent py-2 pr-4 pl-3 text-gray-200 font-semibold hover:border-blue-50 cursor-pointer hover:text-white md:border-0 md:p-0">
                  {category.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
