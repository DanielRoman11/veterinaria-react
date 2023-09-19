export default function Error({children}) {
  return (
    <p
      className='text-pink-700  text-center border-l-4 border-pink-800 bg-black/10 backdrop-blur-md font-bold mx-auto mt-3 w-full px-2 py-3 rounded-sm'>
        ❌ {""}
        <span 
          className='decoration-wavy underline underline-offset-2'>
            {children}
        </span>
    </p>
  )
}
