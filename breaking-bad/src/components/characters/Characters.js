import React from "react";
import Spinner from "../ui/Spinner";

const Characters = ({ item, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {item.map((item) => (
        <li key={item}>{item.name}</li>
      ))}
    </section>
  );
};

export default Characters;
