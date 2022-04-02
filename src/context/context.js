import React, { useState, useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import { allDogs } from '../data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [dogs, setDogs] = useState([])
  const [addDog, setAddDog] = useState(false)
  const [name, setName] = ('')

  const fetchDogs = () => {
    setLoading(true)
    const newDogs = allDogs
      .filter((item) => {
        if (searchTerm === '') {
          setDogs([])
          setLoading(false)
          return item
        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          setLoading(false)
          return item
        }
      })
      .map((item) => {
        let { id, name, breed, image, owner, size, description } = item
        return { id, name, breed, image, owner, size, description }
      })
    setLoading(false)
    setDogs(newDogs)
  }

  const newDog = () => {
    const newDogList = dogs.map((item) => {
      let { id, name, breed, image, owner, size, description } = item
        return { id, name, breed, image, owner, size, description }
    })
    setDogs(newDogList)
  }

  useEffect(() => {
    newDog()
  }, [addDog])

  useEffect(() => {
    fetchDogs()
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ loading, dogs, setSearchTerm, setAddDog, setName }}>
      {children}
    </AppContext.Provider>
  )
}

//make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
