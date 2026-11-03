import { BookOpenText, CookingPot, Dumbbell, Flower, HeadphonesIcon, Shirt, Sofa, Watch } from "lucide-react"


const Category = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='w-300 h-50 '>
            <div>
                <div className="text-2xl font-bold">Shop by Category</div>
                <div className="text-sm">Explore curated collections spanning technology, living, and personal essentials.</div>
            </div>
            <div className="flex gap-10  py-10">
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><HeadphonesIcon className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Electronics</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><Shirt className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Fashion</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><Sofa className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div className="text-nowrap">Home & Living</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><Flower className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Beauty</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><Dumbbell className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Sports</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><BookOpenText className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Books</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><CookingPot className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Kitchen</div>
                </div>
                <div className=" border w-1/8 border-gray-300 p-4 flex items-center justify-center flex-col rounded-xl hover:border-blue-700 group ">
                    <div className="  p-4 w-15 h-15 rounded-full bg-blue-600 "><Watch className=" transition-transform  duration-200 group-hover:scale-150 text-white" size={25} /></div>
                    <div>Watches</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category