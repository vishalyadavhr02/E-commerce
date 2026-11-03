import RatingCard from "./RatingCard"


const Rating = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-300 p-6'>
        <div className='flex justify-center items-center font-bold text-md text-blue-600'>
            SOCIAL PROOF
        </div>
        <div className='flex justify-center items-center py-3 text-3xl font-bold'>
          Loved by Shoppers Worldwide
        </div>
        <div className='flex justify-center items-center text-sm text-gray-600'>
          Here is what verified customers have to say about their ShopNest order experiences.
        </div>
        <div>
            <RatingCard/>
        </div>
      </div>
    </div>
  )
}

export default Rating