import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderTabs from "./SearchHeaderTabs"

export default function SearchHeader({ children }) {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full p-6">
        <Link href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            alt="google logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="flex-1">
         <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 mr-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
          <TbGridDots className="bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
      <SearchHeaderTabs />
    </header>
  );
}
