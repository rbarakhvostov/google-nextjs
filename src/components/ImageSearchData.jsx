import Link from 'next/link';
import PaginationButtons from "@/components/PaginationButtons";

export default function ImageSearchData({ data }) {
  return (
    <div className='sm:pb-24 pb-40 mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {data.items.map((item) => (
          <div className='mb-8' key={item.link}>
            <div className='group'>
              <Link href={item.image.contextLink}>
                <img
                  src={item.link}
                  alt={item.title}
                  className='h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300'
                />
              </Link>
              <Link href={item.image.contextLink}>
                <h2 className='group-hover:underline truncate text-xl'>
                  {item.title}
                </h2>
              </Link>
              <Link href={item.image.contextLink}>
                <p className='group-hover:underline truncate text-gray-600'>
                  {item.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
