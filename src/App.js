import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Modale from "./components/Modale";
import Footer from "./components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvelbackend.herokuapp.com/characters"
      );
      console.log("response.data", response.data.results);

      const modifiedData = response.data.results.splice(0, 10);

      setData(modifiedData);
    };

    fetchData();
  }, []);
    // "http://hp-api.herokuapp.com/api/characters"
    // "https://marvelbackend.herokuapp.com/characters"

  return (
  
    <div className="App">
      <Header />
      <Hero />
      {data!== null ? <Characters data={data} /> : null}
      <Modale />
      <Footer />
    </div>
    
  );
};

export default App;
