import React from 'react'
import getResults from '../lib/getResults'
import Item from './components/item'

type Props = {
    params:{
        searchTerm:string
    }
}

export async function generateMetadata({params:{searchTerm}}: Props) {
    const resData : Promise<SearchResult> = getResults(searchTerm)
    const data = await resData


    const displayTerm=searchTerm.replaceAll('%20',' ')

    if(!data?.query?.pages){
        return{
            title:`${displayTerm} not found` 
        }
    }
    return {
        title : `${displayTerm} - Wikipedia`,
        description:`Search results for ${displayTerm} on wikipedia`
    }
}

export default async function SearchResults({params:{searchTerm}}: Props) {
    const resData : Promise<SearchResult> = getResults(searchTerm)
    const data = await resData
    const results:  Result[] | undefined = data?.query?.pages

    const content = (
        <main className='py-1'>
            {results?Object.values(results).map(result=>{
                return (
                    <Item key={result.pageid} result={result}/>
                )
            })
        :
        <h2 className='text-xl'>{searchTerm} not found</h2>
        }
        </main>
    )
  return content
}