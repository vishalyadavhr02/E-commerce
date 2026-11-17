import { Flame } from 'lucide-react'
import DealCard from './DealCard'

const products = [
  {
    id: 1,
    name: "Pro ANC Headphones",
    image: "https://images.unsplash.com/photo-1559743345-24713f59f5e3?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    image: "https://images.unsplash.com/photo-1640890959827-6307611b34a1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    <div className="flex items-center justify-center px-3 py-6 sm:px-4 sm:py-8">
      <div className="flex w-full max-w-7xl flex-col rounded-lg border border-gray-300 p-3 sm:p-5">
        {/* Header */}
        <div className="flex items-start gap-2 sm:items-center">
          <div className="flex w-fit shrink-0 items-center rounded-2xl border border-gray-400 bg-red-300 p-2">
            <Flame size={20} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-2">
              <h2 className="text-base font-bold sm:text-lg">Flash Deals of the Day</h2>
              <span className="flex items-center rounded-2xl bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white sm:text-xs">
                LIMITED TIME
              </span>
            </div>
            <p className="px-2 text-xs text-gray-600 sm:text-sm">
              Deals refresh once countdown strikes zero.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 py-3 min-[480px]:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {products.map((product) => (
            <DealCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Deals