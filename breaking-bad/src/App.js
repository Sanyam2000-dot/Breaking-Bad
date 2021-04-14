import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header.js";
import CharactersInGrid from "./components/characters/CharactersInGrid";

function App() {
  const [item, setItem] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    const fetchapi = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters      `
      );
      console.log(result.data);

      setItem(result.data);
      SetIsLoading(false);
    };
    fetchapi();
  }, []);
  return (
    <div className="container">
      <Header />
      <CharactersInGrid item={item} isLoading={isLoading} />
    </div>
  );
}

export default App;
