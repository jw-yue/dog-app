import React from 'react'
import DeleteDog from '../dogManagment/DeleteDog'
import EditDog from '../dogManagment/EditDog'
import './styles.scss'

const DogCard = ({ name, id, breed, image, owner, size, description }) => {
  return (
    <article className="dog">
      <div className="img-container">
        <img
          src={image}
          alt={name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src = `${process.env.PUBLIC_URL}/assets/question_dog.jpg`
            console.log(currentTarget)
          }}
        />
      </div>
      <div className="dog-footer">
        <h3>{name}</h3>
        <h2>{breed}</h2>
        <h4>Owner: {owner}</h4>
        <h4 className="right">Size: {size}</h4>
        <h5 className="letter-spacing">{description}</h5>
      </div>
      <div>
        <span className="padding-left">
          <DeleteDog id={id} />
        </span>
        <span className="right padding-right">
          <EditDog id={id} />
        </span>
      </div>
    </article>
  )
}

export default DogCard
