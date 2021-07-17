import ReactStars from 'react-stars/dist/react-stars'
import { price } from '../../utils/price'

export default function ProductCard({ product }) {
  return (
    <div className='relative flex flex-col items-center rounded-b-3xl'>
      <img
        className=''
        alt={product.productName}
        src={product.imageUrl}
      />
      <h1 className='text-base font-medium leading-4 text-center text-gray-500 dark:text-gray-400'>
        {product.productName}
      </h1>

      <ReactStars count={5} value={product.stars} color2={'#ffd700'} edit={false} size={24} />

      {product.listPrice && (
        <h2
          className='text-xl line-through font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100'>
          de {price(product.listPrice)}
        </h2>
      )}
      <h3 className='text-2xl font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100'>
        Por {price(product.price)}
      </h3>

      {product.installments.map(({ quantity, value }) => (
        <h6 className='text-xs font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100'>
          ou em {quantity} x { price(value) }
        </h6>
      ))}
      <div className='flex flex-col items-center justify-center pt-3'>
        <button
          className=' text-white bg-black border-black dark:text-white dark:bg-black border px-4 py-2 text-sm font-medium leading-3 rounded focus:outline-none mt-5 hover:opacity-50'>
          Comprar
        </button>
      </div>

      {product.listPrice && <div className='absolute right-0 bg-red-500 px-2 text-white font-bold text-xl'>
        Destaque
      </div>}
    </div>
  )
}
