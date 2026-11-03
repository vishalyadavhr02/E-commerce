import { Mail, MessageSquareText, Share2, ShoppingBag } from "lucide-react"


const Footer = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center '>
      <div>
        <div className="w-300 h-80  flex justify-center items-center">
            <div className="w-1/3">
                <div>
                  <a href="#" className="flex items-center text-2xl gap-2.5 ">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform">
                      <ShoppingBag/>
                    </div>
                    <div>
                      <span className="text-headline-md font-bold tracking-tight text-primary">ShopNest</span>
                    </div>
                 </a>
                </div>
                <div className="p-4">
                   ShopNest provides modern retail curation for refined living. Discover verified hardware, timeless apparel, and contemporary living spaces with seamless delivery.
                </div>
                <div className="flex gap-5">
                  <div className="p-2 bg-gray-300 w-fit rounded"><Share2 size={16} strokeWidth={2.25} /></div>
                  <div className="p-2 bg-gray-300 w-fit rounded"><MessageSquareText size={16} strokeWidth={2.25} /></div>
                  <div className="p-2 bg-gray-300 w-fit rounded"><Mail size={16} strokeWidth={2.25} /></div>
                </div>
            </div>
            <div className="w-2/3 flex gap-10 items-center justify-evenly">
                <div>
                  <div className="text-lg font-bold pb-3">
                  <h2>Shop Categories</h2>
                </div>
                <div>
                  <ul>
                    <li>Shop Catalog</li>
                    <li>Special Deals</li>
                    <li>Gift Cards</li>
                    <li>Trending</li>
                    <li>What's New</li>
                  </ul>
                </div>
                </div>
                <div>
                  <div className="text-lg font-bold pb-3">
                  <h2>Shop Categories</h2>
                </div>
                <div>
                  <ul>
                    <li>Shop Catalog</li>
                    <li>Special Deals</li>
                    <li>Gift Cards</li>
                    <li>Trending</li>
                    <li>What's New</li>
                  </ul>
                </div>
                </div>
                <div>
                  <div className="text-lg font-bold pb-3">
                  <h2>Shop Categories</h2>
                </div>
                <div>
                  <ul>
                    <li>Shop Catalog</li>
                    <li>Special Deals</li>
                    <li>Gift Cards</li>
                    <li>Trending</li>
                    <li>What's New</li>
                  </ul>
                </div>
                </div>
            </div>
         </div>
          <div className="w-full pb-10 border-t border-gray-300"></div>
          <div className="flex justify-center items-center text-sm p-3">
            © 2024 ShopNest Inc. All rights reserved.
          </div>
      </div>
  </div>
  )
}

export default Footer