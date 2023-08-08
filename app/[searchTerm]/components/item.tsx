import Link from 'next/link'
import React from 'react'

type Props = {
    result: Result
}

function Item({ result }: Props) {

    const content = result?.thumbnail?.source
        ? (
            <div className=' my-3 w-full flex justify-center items-center'>
            <div className=' w-3/4 flex justify-center items-center'>
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" className="flex flex-col lg:min-w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={result.thumbnail.source}
                    alt={result.title}
                    width={result.thumbnail.width}
                    height={result.thumbnail.height}
                    loading="lazy" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{result.extract}</p>
                </div>
            </Link>
            </div>
            </div>
        )
        : (
            <div className=' my-3 w-full flex justify-center items-center'>
            <div className=' w-3/4 flex justify-center items-center'>
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" className="flex lg:min-w-full flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{result.extract}</p>
                </div>
            </Link>
            </div>
            </div>
        )

    return content
}

export default Item