import { Search } from "lucide-react"



const Searchbar = () => {
  return (
    <div>
      <form>
        <div className="flex  gap-3  p-3 relative border-2 border-gray-400 rounded-xl shrink-0">
          <select 
          name=""
          id=""
          aria-label="Search category">
          <option value="">All Catagories</option>
          <option value="">Electronics</option>
          <option value="">Fashion</option>
          <option value="">Beauty</option>
          </select> 
          <input
          type="text"
          placeholder="Search 50,000+ premium products, brands and tech..."
          className=" flex w-150 bg-transparent  text-body-md placeholder:text-outline"/>
          <button><Search /></button>
        </div>
      </form>
    </div>          
  )
}

export default Searchbar