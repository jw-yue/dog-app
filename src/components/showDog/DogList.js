import React from 'react'
import Dog from './Dog'
import Loading from '../loading/Loading'
import { useGlobalContext } from '../../context/context'
import AddDog from '../dogManagment/AddDog'

const DogList = () => {
  const { dogs, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (dogs.length < 1) {
    return (
      <section className="section">
        <div className="cocktail-section">
          <AddDog />
        </div>
        <h2 className="section-title">no dogs match your search criteria</h2>
      </section>
    )
  }
  console.log(dogs)

  return (
    <section className="section">
      <div className="cocktail-section">
        <AddDog />
      </div>
      <h2 className="section-title">Dogs of Voyant</h2>
      <div className="cocktails-center">
        {dogs.map((item) => {
          return <Dog key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default DogList