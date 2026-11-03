import { Heart, ShoppingBag, ShoppingCart } from 'lucide-react'
import Searchbar from './Searchbar'


const Navbar = () => {
  return (
    <div>
        <header className='sticky top-0  border-2   border-gray-400 '>
          <div className="flex  items-center m-3 justify-around ">
            <a href="#" className="flex items-center text-2xl gap-2.5 ">
               <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform">
                <ShoppingBag/>
               </div>
               <div>
                <span className="text-headline-md font-bold tracking-tight text-primary">ShopNest</span>
               </div>
            </a>
            <Searchbar/>
           <div className='flex gap-3 text-lg items-center justify-end'>
            <a 
              href="#wishlist">
                <Heart size={30}/>
            </a>
            <a href="">
              <ShoppingCart size={30}/>
            </a>
          </div>
           </div>
        </header>
    </div>
  )
}

export default Navbar