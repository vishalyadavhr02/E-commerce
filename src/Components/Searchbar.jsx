import { Search } from "lucide-react"

const Searchbar = () => {
  return (
    <div className="w-full">
      <form>
        <div className="relative flex w-full items-center gap-2 rounded-xl border-2 border-gray-400 p-2 sm:gap-3 sm:p-3">
          <select
            name=""
            id=""
            aria-label="Search category"
            className="hidden shrink-0 sm:block"
          >
            <option value="">All Categories</option>
            <option value="">Electronics</option>
            <option value="">Fashion</option>
            <option value="">Beauty</option>
          </select>
          <input
            type="text"
            placeholder="Search 50,000+ premium products..."
            className="min-w-0 flex-1 visited:border-none bg-transparent text-sm text-body-md placeholder:text-outline outline-none sm:text-base"
          />
          <button type="submit" className="shrink-0">
            <Search />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar