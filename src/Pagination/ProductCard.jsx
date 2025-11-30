function ProductCard({ product }) {
  return (
    <div className='p-3 w-48 rounded-xl shadow-md bg-white hover:shadow-lg transition-all cursor-pointer'>
      <img
        src={product.thumbnail}
        alt={product.title}
        className='w-full h-28 object-cover rounded-lg mb-2'
      />

      <h2 className='text-base font-semibold mb-1 line-clamp-1'>
        {product.title}
      </h2>

      <p className='text-xs text-gray-600 mb-2 line-clamp-2'>
        {product.description}
      </p>

      <div className='flex items-center justify-between mt-2'>
        <span className='text-lg font-bold'>${product.price}</span>
        <span className='text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-md'>
          {product.discountPercentage}% off
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
