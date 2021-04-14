import React from "react";
import Spinner from "../ui/Spinner";
import CharactersItem from "./CharactersItem";

const CharactersInGrid = ({ item, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {item.map((item) => (
        <CharactersItem key={item.char_id} item={item}></CharactersItem>
      ))}
    </section>
  );
};

export default CharactersInGrid;
