import React, { useState, useRef} from 'react'
import { useGlobalContext } from '../context/context'

const AddDog = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { setAddDog, setName } = useGlobalContext()
  const nameValue = useRef('')

  const submitForm = () => {
    setModalVisible(!modalVisible)
    setAddDog(true)
  }
  const toggleDialog = () => {
    setModalVisible(!modalVisible)  
  }

  const defineName = () => {
    setName(nameValue.current.value)
  }

  if (modalVisible){
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
      <>   
        <button type="button" className="btn-primary" onClick={toggleDialog}>
          Add Dog      
        </button>

      {modalVisible && (
        <div className="modal">
          <div className='overlay'>
            <div className='modal-content'>
              <h2>Add Dog</h2>
              <form>
                <label>
                  Name:
                  <input type="text" name="name" ref={nameValue} onChange={defineName}
                />
                </label>
                <label>
                  Breed:
                  <input type="text" name="input"/>
                </label>
                <label>
                  Owner:
                  <input type="text" name="owner"/>
                </label>
                <label>
                  Size:
                  <input type="text" name="size"/>
                </label>
                <label>
                  Description:
                  <textarea type="text" name="description"/>
                </label>
                
              </form>
              <button className='close-modal' onClick={toggleDialog}>X</button>
              <button className='submit' onClick={submitForm}>Submit</button>
            </div>
          </div>
        </div>
        )}
        </>
  )
}

export default AddDog
