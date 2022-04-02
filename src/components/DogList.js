import React from 'react'
import Dog from './Dog'
import Loading from './Loading'
import { useGlobalContext } from '../context/context'

const DogList = () => {
  // const dogAreasList = useSelector((state) => state.dogAreas.listDogAreas)
  const { dogs, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (dogs.length < 1) {
    return <h2 className="section-title">no dogs match your search criteria</h2>
  }
  return (
    <section className="section">
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
