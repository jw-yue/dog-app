import React from 'react'
import DogList from '../components/DogList'
import SearchForm from '../components/SearchForm'
import AddDog from '../components/AddDog'

const Home = () => {
  return (
    <main>
      <AddDog />
      <SearchForm />
      <DogList />
    </main>
  )
}

export default Home
