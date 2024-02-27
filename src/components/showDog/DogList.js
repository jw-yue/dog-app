import React from "react";
import DogCard from "./Dog";
import Loading from "../loading/Loading";
import { useGlobalContext } from "../../context/context";
import AddDog from "../dogManagment/AddDog";

const DogList = () => {
  const { dogs, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (dogs.length < 1) {
    return (
      <section className="section">
        <div className="dog-section">
          <AddDog />
        </div>
        <h2 className="section-title">no dogs match your search criteria</h2>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="dog-section">
        <AddDog />
      </div>
      <h2 className="section-title">Dogs Directory</h2>
      <div className="dogs-center">
        {dogs.map((item) => {
          return <DogCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default DogList;
