import React from 'react'
import DeleteDog from '../dogManagment/DeleteDog'
import EditDog from '../dogManagment/EditDog'
import './styles.scss'

const DogCard = ({ name, id, breed, image, owner, size, description }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img
          src={image}
          alt={name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src = 'assets/question_dog.jpg'
          }}
        />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{breed}</h4>
        <h5>{owner}</h5>
        <h6>{size}</h6>
        <p>{description}</p>
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
