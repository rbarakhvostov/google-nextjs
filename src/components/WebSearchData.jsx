import Link from 'next/link';
import Parser from 'html-react-parser';
import PaginationButtons from "@/components/PaginationButtons";

export default function WebSearchData({ data }) {
  return (
    <div className='w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-3'>
        About {data.searchInformation?.formattedTotaldata} data (
        {data.searchInformation?.formattedSearchTime} seconds)
      </p>
      {data.items?.map((item) => (
        <div className='mb-8 max-w-xl' key={item.link}>
          <div className='group flex flex-col'>
            <Link href={item.link}>{item.formattedUrl}</Link>
            <Link
              href={item.link}
              className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'
            >
              {item.title}
            </Link>
          </div>
          <p className='text-gray-600'>{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
