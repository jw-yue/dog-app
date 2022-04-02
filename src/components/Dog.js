import React from 'react'

const DogCard = ({ name, id, breed, image, owner, size, description }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{breed}</h4>
        <h5>{owner}</h5>
        <h6>{size}</h6>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default DogCard
