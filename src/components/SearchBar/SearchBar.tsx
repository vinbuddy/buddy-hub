import { FiSearch } from "react-icons/fi";

function SearchBar() {
    return (
        <form className="text-gray-400 focus-within:text-black text-lg mx-auto relative bg-input w-full flex flex-col md:flex-row items-center justify-center px-5 py-2 rounded-full gap-2 shadow-sm transition-all">
            <FiSearch />
            <input
                id="search-bar"
                placeholder="Search"
                className="ml-1 w-full rounded-md flex-1 outline-none bg-input transition-all"
            />
        </form>
    );
}

export default SearchBar;
