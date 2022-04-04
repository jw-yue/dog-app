import React from 'react'
import DogForm from '../dogForm/DogForm'

const EditDog = ({ id }) => {
  const isAddCalled = false

  return (
    <>
      <DogForm isAddCalled={isAddCalled} id={id} />
    </>
  )
}

export default EditDog
