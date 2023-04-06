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

  const renderCategoryOptions = () => (
    <ul className="category-filter">
      <li>
        <h1 className="filter-heading">Category</h1>
      </li>
      {categoryOptions.map(each => {
        const onCategoryChange = () => {
          updateCategory(each.categoryId)
        }

        return (
          <li key={each.categoryId}>
            <button
              type="button"
              onClick={onCategoryChange}
              className="filter-button"
            >
              <p>{each.name}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )

  const renderRatingsOptions = () => (
    <ul className="category-filter">
      <li>
        <h1 className="filter-heading">Rating</h1>
      </li>
      {ratingsList.map(each => {
        const onRatingsChange = () => {
          updateRatings(each.ratingId)
        }
        return (
          <li key={each.ratingId}>
            <button
              type="button"
              onClick={onRatingsChange}
              className="filter-rating-button"
            >
              <img
                className="filter-rating-img"
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
              />
              <p>& up</p>
            </button>
          </li>
        )
      })}
    </ul>
  )

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

      {renderCategoryOptions()}
      {renderRatingsOptions()}

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
