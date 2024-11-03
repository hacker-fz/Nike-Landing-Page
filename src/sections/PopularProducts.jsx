import ProductCard from '../components/ProductCard'
import {products} from '../constants'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-0*'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Popular</span> Products</h2>
        <p className='text-slate-gray font-montserrat lg:max-w-lg mt-2'>Experience Top-Notch quality and Style with our sought-after selection. Discover a world of Style, Comfort and Quality</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />

        ))}
      </div>
    </section>
  )
}

export default PopularProducts