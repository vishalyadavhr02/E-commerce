import RatingCard from "./RatingCard"

const Rating = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-7xl p-4 sm:p-6">
        <div className="text-md flex items-center justify-center font-bold text-blue-600">
          SOCIAL PROOF
        </div>
        <div className="flex items-center justify-center py-3 text-center text-2xl font-bold sm:text-3xl">
          Loved by Shoppers Worldwide
        </div>
        <div className="flex items-center justify-center text-center text-sm text-gray-600">
          Here is what verified customers have to say about their ShopNest order experiences.
        </div>
        <div>
          <RatingCard />
        </div>
      </div>
    </div>
  )
}

export default Rating