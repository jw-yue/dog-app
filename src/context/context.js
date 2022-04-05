import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { allDogs } from '../data'

const AppContext = React.createContext()

const initialvalues = {
  name: '',
  breed: '',
  owner: '',
  size: '',
  description: '',
}

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [dogs, setDogs] = useState([])
  const [form, setForm] = useState(initialvalues)
  const [newDogCalled, setNewDogCalled] = useState(false)
  const [editDogCalled, setEditDogCalled] = useState(false)
  const [deleteDogCalled, setDeleteDogCalled] = useState(false)

  const [determineDog, setDetermineDog] = useState('')

  //get all dogs
  const getDogs = () => {
    setLoading(false)
    setDogs(allDogs)
    dogs.map((item) => {
      let { id, name, breed, image, owner, size, description } = item
      return { id, name, breed, image, owner, size, description }
    })
  }

  //search dogs
  const fetchDogs = useCallback(() => {
    setLoading(false)
    const newDogs = allDogs
      .filter((item) => {
        if (searchTerm === '') {
          setDogs([])
          setLoading(false)
          return []
        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          setLoading(false)
          setDogs(item)
          return item
        }
      })
      .map((item) => {
        let { id, name, breed, image, owner, size, description } = item
        return { id, name, breed, image, owner, size, description }
      })
    setDogs(newDogs)
  }, [searchTerm])

  //add dog and edit dog
  const newDog = () => {
    if (newDogCalled) {
      form.id = dogs.length + 1
      if (form.image === undefined || form.image === '') {
        form.image = `${process.env.PUBLIC_URL}/assets/Benny.jpg`
      }
      dogs.push(form)
    } else if (editDogCalled) {
      console.log(newDogCalled)
      for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].id === determineDog) {
          dogs[i].name = form.name
          dogs[i].breed = form.breed
          dogs[i].owner = form.owner
          dogs[i].size = form.size
          dogs[i].description = form.description
          dogs[i].image = form.image
        }
      }
    }

    const newDogList = dogs.map((item) => {
      let { id, name, breed, image, owner, size, description } = item
      return { id, name, breed, image, owner, size, description }
    })
    setDogs(newDogList)
    setNewDogCalled(false)
  }

  //delete dog
  const deleteDog = () => {
    if (deleteDogCalled) {
      for (let i = 0; i < dogs.length; i++) {
        if (dogs[i].id === determineDog) {
          setDogs(dogs.splice(i, 1))
        }
      }

      const newDogList = dogs.map((item) => {
        let { id, name, breed, image, owner, size, description } = item
        return { id, name, breed, image, owner, size, description }
      })
      setDogs(newDogList)
    }
    setDetermineDog('')
    setDeleteDogCalled(false)
  }

  useEffect(() => {
    deleteDog()
  }, [deleteDogCalled])

  useEffect(() => {
    newDog()
  }, [newDogCalled, editDogCalled])

  useEffect(() => {
    fetchDogs()
  }, [fetchDogs, searchTerm])

  useEffect(() => {
    getDogs()
  }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        dogs,
        setSearchTerm,
        setForm,
        setNewDogCalled,
        setEditDogCalled,
        setDeleteDogCalled,
        setDetermineDog,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
