import React from 'react'
import {useSearch} from '../hooks/useSearch'
import Product from '../components/products/Product';
import MobileHeaderMenu from '../components/MobileHeaderMenu';

export default function SearchResultsPage() {
  const {result,query} = useSearch();
  return (
    <main>
      {/* <MobileHeaderMenu /> */}
      <h2 className='p-4'>По вашему запросу <span className='font-bold'>"{query}"</span>. Найдено {result.length} товар(-ов)</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {result.map((product)=>(
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
