import { Flame } from 'lucide-react'
import DealCard from './DealCard'


const products = [
  {
    id: 1,
    name: "Pro ANC Headphones",
    image: "https://picsum.photos/seed/headphones/400",
    rating: 4.9,
    reviews: 342,
    price: 79.99,
    originalPrice: 129.99,
    claimed: 82,
    left: 14,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    image: "https://picsum.photos/seed/watch/400",
    rating: 4.8,
    reviews: 189,
    price: 49.0,
    originalPrice: 89.0,
    claimed: 64,
    left: 28,
  },
  {
    id: 3,
    name: "Ultra Wireless Earbuds",
    image: "https://picsum.photos/seed/earbuds/400",
    rating: 4.7,
    reviews: 512,
    price: 39.99,
    originalPrice: 69.99,
    claimed: 91,
    left: 5,
  },
  {
    id: 4,
    name: "4K Action Camera",
    image: "https://picsum.photos/seed/camera/400",
    rating: 4.6,
    reviews: 97,
    price: 89.0,
    originalPrice: 149.0,
    claimed: 45,
    left: 32,
  },
]

const Deals = () => {
  return (
    <div className='flex  items-center justify-center py-8'>
        <div className='w-300  border flex flex-col border-gray-300 p-5 rounded-lg'>
            <div className='flex'>
              <div className='p-2 rounded-2xl border flex  items-center w-fit border-gray-400 bg-red-300'><Flame size={20}/></div>
              <div>
                <div className='flex flex-row'>
                <div className='px-2 text-lg  font-bold'>Flash Deals of the Day</div>
                <div className='bg-red-500 px-2 text-white text-xs font-bold flex items-center rounded-2xl'>LIMITED TIME</div>
              </div>
              <div className='px-2 text-sm'>
              Deals refresh once countdown strikes zero.
              </div>
              </div>
            </div>
           <div className='grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => (
            <DealCard key={product.id} {...product} />
          ))}
        </div>
        </div>

    </div>
  )
}

export default Deals