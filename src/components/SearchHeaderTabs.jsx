"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';

export default function SearchHeaderTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const pathname = usePathname();

  const selectTab = (tab) => {
    router.push(`/search/${tab === 'All' ? 'web' : 'image'}/?searchTerm=${searchTerm}`)
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer pb-3 px-2 ${pathname === '/search/web' && 'text-blue-600 border-blue-600'}`}
        onClick={() => selectTab("All")}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer pb-3 px-2 ${pathname === '/search/image' && 'text-blue-600 border-blue-600'}`}
        onClick={() => selectTab("Images")}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  )
}
