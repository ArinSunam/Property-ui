import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className='flex flex-col'>
        <h1 className='text-3xl'>404</h1>
        <h2 className='text-semibold text-gray-700'>File not found</h2>
        <p className='text-gray-500'>If this is your site, make sure that the filename case matches the URL as well as any file permissions.</p>
        <p className='text-gray-500'>For root URLs (like http://example.com/) you must provide an index.html file.</p>

      </div>

    </div>
  )
}

export default NotFound
