import React, { useRef } from 'react'
import { useGlobalContext } from '../../context/context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  const searchDog = (e) => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search dog</label>
          <input type="text" id="name" ref={searchValue} onChange={searchDog} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
