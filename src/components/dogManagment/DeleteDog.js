import React from 'react'
import { useGlobalContext } from '../../context/context'

const DeleteDog = ({ id }) => {
  const { setDetermineDog, setDeleteDogCalled } = useGlobalContext()

  const deleteDog = (e) => {
    e.preventDefault()
    setDeleteDogCalled(true)
    setDetermineDog(id)
  }
  return (
    <>
      <button type="button" className="btn-primary" onClick={deleteDog}>
        Delete Dog
      </button>
    </>
  )
}

export default DeleteDog
