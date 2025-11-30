import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const PAGE_SIZE = 10;

const PaginBody = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;

  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  //   console.log(totalProducts, noOfPages);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goPrev = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const goNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return !products.length ? (
    <h1 className='text-center text-xl font-semibold mt-10'>No Products</h1>
  ) : (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Pagination</h1>

      <div className='text-center mb-4'>
        <button
          disabled={currentPage === 0}
          className='px-1 cursor-pointer border-x-blue-900 border-2 ml-2 bg-amber-200'
          onClick={() => goPrev()}
        >
          {'<'}
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <span
            className={
              n === currentPage
                ? ' bg-green-100 px-1 cursor-pointer border-x-blue-900 border-2 ml-2'
                : 'bg-white px-1 cursor-pointer border-x-blue-900 border-2 ml-2'
            }
            onClick={() => handlePageChange(n)}
          >
            {n}
          </span>
        ))}

        <button
          disabled={currentPage === noOfPages - 1}
          className='px-1 cursor-pointer border-x-blue-900 border-2 ml-2 bg-amber-200'
          onClick={() => goNext()}
        >
          {'>'}
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6'>
        {products.slice(start, end).map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default PaginBody;
