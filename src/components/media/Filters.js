import { useRef } from "react"
import { FiChevronDown } from "react-icons/fi"
import { MdSearch } from "react-icons/md"

const Filters = ({ filterByType, clearFilters }) => {
    const movieRef = useRef()
    const bookRef = useRef()

    const resetFilters = () => {
        clearFilters()
        movieRef.current.checked = false
        bookRef.current.checked = false
    }

    return (
        <div className="filters">
            <div className="filters__row">
                <div className="dropdowns">
                    <div className="dropdown">
                        <button className="dropdown__btn">Genre</button>
                        <FiChevronDown className="input-icon" />
                    </div>
                    <div className="dropdown">
                        <button className="dropdown__btn">Year</button>
                        <FiChevronDown className="input-icon" />
                    </div>
                </div>
                <div className="search">
                    <input type="search__input" />
                    <MdSearch className="input-icon input-icon--search" />
                </div>
            </div>
            <div className="filters__row">
                <div className="radios">
                    <input type="radio" id="movies" name="radio-filter" value="movie" ref={movieRef} onChange={(e) => filterByType(e)} />
                    <label htmlFor="movies">Movies</label>
                    <input type="radio" id="books" name="radio-filter" value="book" ref={bookRef} onChange={(e) => filterByType(e)} />
                    <label htmlFor="books">Books</label>
                </div>
                <button className="filters__clear" onClick={resetFilters}>clear filters</button>
            </div>
        </div>
    );
}

export default Filters;