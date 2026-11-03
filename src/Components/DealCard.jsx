import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react';
export  function DealCard({ image, name,rating, price,reviews,left,claimed, originalPrice }) {
  const [wished, setWished] = useState(false);

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  const percent = Math.min(100, Math.max(0, claimed));
  const barColor =
    percent >= 80 ? "bg-red-700" : percent >= 60 ? "bg-amber-400" : "bg-indigo-600";
  const leftColor = percent >= 80 ? "text-red-700 font-semibold" : "text-gray-600";


  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 hover:border-blue-700 group">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 transition-transform  duration-200 group-hover:scale-102">
            <img src={image} alt={name} className="h-full w-full object-cover " />
            <span className="absolute left-2 top-2 rounded bg-red-700 px-2 py-0.5 text-xs font-bold text-white">
            -{discount}%
             </span>
             <button
                onClick={() => setWished(!wished)}
                className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
            >
            <Heart
            size={18}
            className={wished ? "fill-red-500 text-red-500" : "text-gray-800"}
          />
            </button>
        </div>
        <div className='py-2 font-bold te'>{name}</div>
        <div className='flex gap-1 text-xs items-center'>
            <Star size={15}/> 
            {rating}
            <div>({reviews})</div>
        </div>
        <div className='flex gap-3'>
            <div className='font-semibold'>${price}</div>
            <div className='text-gray-600 line-through'>{originalPrice}</div>
        </div>
        <div className='border-t border-gray-300 my-4'></div>
        <div className="flex items-center justify-between text-xs">
        <span className="text-gray-600">Claimed: {percent}%</span>
        <span className={leftColor}>{left} left</span>
        </div>
        <div
        className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-indigo-50"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
      <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${percent}%` }}
      />
      </div>
      <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-700">
      <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  )
}
export default DealCard