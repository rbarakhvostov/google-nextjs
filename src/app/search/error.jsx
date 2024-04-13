'use client'

export default function Error({ error, reset }) {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <p className='text-3xl mb-4'>Something went wrong!</p>
      <button className='text-blue-500'>Try again</button>
    </div>
  )
}
