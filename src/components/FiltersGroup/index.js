import {BiSearchAlt2} from 'react-icons/bi'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    updateSearch,
    getProducts,
    onClearFilters,
    updateCategory,
    searchQ,
    updateRatings,
  } = props

  const onChangeSearch = event => {
    updateSearch(event.target.value)
  }

  const onCategoryChange = event => {
    updateCategory(event.target.id)
  }
  const onRatingsChange = event => {
    updateRatings(event.target.id)
  }

  const clearFilters = () => {
    onClearFilters()
  }

  const onEnter = event => {
    if (event.key === 'Enter') {
      getProducts()
    }
  }

  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      {/* Replace this element with your code */}
      <div className="search-container">
        <input
          className="search-element"
          onChange={onChangeSearch}
          onKeyDown={onEnter}
          type="search"
          placeholder="Search"
          value={searchQ}
        />
        <BiSearchAlt2 />
      </div>

      <ul className="category-filter">
        <li>
          <p className="filter-heading">Category</p>
        </li>
        {categoryOptions.map(each => (
          <li key={each.categoryId}>
            <button
              type="button"
              onClick={onCategoryChange}
              className="filter-button"
              id={each.categoryId}
            >
              <p>{each.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <ul className="category-filter">
        <li>
          <p className="filter-heading">Rating</p>
        </li>
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button
              type="button"
              onClick={onRatingsChange}
              className="filter-rating-button"
              id={each.ratingId}
            >
              <img
                className="filter-rating-img"
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
              />
              <p>& up</p>
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={clearFilters}
        className="clear-filter-button"
        type="button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
