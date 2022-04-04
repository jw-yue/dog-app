import React, { useState } from 'react'
import { useGlobalContext } from '../../context/context'
import FormInput from './FormInput'

const Form = ({ isAddCalled, id }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { setForm, setNewDogCalled, setEditDogCalled, setDetermineDog } =
    useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    let fd = new FormData(document.querySelector('#addForm'))
    let newDog = {}
    newDog.name = fd.get('name')
    newDog.breed = fd.get('breed')
    newDog.owner = fd.get('owner')
    newDog.size = fd.get('size')
    newDog.description = fd.get('description')
    newDog.image = fd.get('image')
    setForm(newDog)

    if (isAddCalled) {
      setNewDogCalled(true)
    } else {
      setEditDogCalled(true)
      setDetermineDog(id)
    }
    setModalVisible(!modalVisible)
  }

  //modal
  const toggleDialog = () => {
    setModalVisible(!modalVisible)
  }

  if (modalVisible) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  //modal

  return (
    <>
      <button type="button" className="btn-primary" onClick={toggleDialog}>
        {isAddCalled ? 'Add dog' : 'Edit dog'}
      </button>

      {modalVisible && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2>{isAddCalled ? 'Add dog' : 'Edit dog'}</h2>

              <form
                onSubmit={handleSubmit}
                id="addForm"
                className="form-control"
              >
                <FormInput label="Name" name="name" />
                <FormInput label="Breed" name="breed" />
                <FormInput label="Owner" name="owner" />
                <FormInput label="Size" name="size" />
                <FormInput label="Description" name="description" />
                <FormInput label="Image Link" name="image" />

                <button className="btn-primary" type="submit">
                  Submit
                </button>
              </form>
              <button className="close-modal" onClick={toggleDialog}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Form
