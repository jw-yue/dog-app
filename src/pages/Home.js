import React from 'react'
import DogList from '../components/showDog/DogList'
import SearchForm from '../components/dogManagment/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm />
      <DogList />
    </main>
  )
}

export default Home
