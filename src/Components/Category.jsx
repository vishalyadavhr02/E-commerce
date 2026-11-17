import { BookOpenText, CookingPot, Dumbbell, Flower, HeadphonesIcon, Shirt, Sofa, Watch } from "lucide-react"

const categories = [
  { label: "Electronics", icon: HeadphonesIcon },
  { label: "Fashion", icon: Shirt },
  { label: "Home & Living", icon: Sofa },
  { label: "Beauty", icon: Flower },
  { label: "Sports", icon: Dumbbell },
  { label: "Books", icon: BookOpenText },
  { label: "Kitchen", icon: CookingPot },
  { label: "Watches", icon: Watch },
]

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-7xl">
        <div>
          <div className="text-xl font-bold sm:text-2xl">Shop by Category</div>
          <div className="text-sm">
            Explore curated collections spanning technology, living, and personal essentials.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4 lg:grid-cols-8 lg:gap-6">
          {categories.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group flex flex-col items-center justify-center rounded-xl border border-gray-300 p-4 hover:border-blue-700"
            >
              <div className="h-15 w-15 rounded-full bg-blue-600 p-4">
                <Icon
                  className="text-white transition-transform duration-200 group-hover:scale-150"
                  size={25}
                />
              </div>
              <div className="mt-1 text-center text-sm sm:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category