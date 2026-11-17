import { Heart, ShoppingBag, ShoppingCart } from 'lucide-react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 border-2 border-gray-400 bg-white">
        <div className="m-3 flex flex-wrap items-center justify-between gap-3 lg:flex-nowrap lg:gap-6">
          <a href="#" className="flex items-center gap-2.5 text-2xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container text-on-primary shadow-sm transition-transform group-hover:scale-105">
              <ShoppingBag />
            </div>
            <div>
              <span className="text-headline-md font-bold tracking-tight text-primary">ShopNest</span>
            </div>
          </a>

          {/* Mobile: search neeche full width | Desktop: beech mein */}
          <div className="order-last w-full lg:order-0 lg:w-auto lg:flex-1 lg:max-w-3xl">
            <Searchbar />
          </div>

          <div className="flex items-center justify-end gap-3 text-lg">
            <a href="#wishlist">
              <Heart className="h-6 w-6 sm:h-7.5 sm:w-7.5" />
            </a>
            <a href="">
              <ShoppingCart className="h-6 w-6 sm:h-7.5 sm:w-7.5" />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar