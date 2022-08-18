import React, { useState } from "react";
import StoreData from "./StoreData";

import Header from "../src/components/header/Header";
import Home from "./pages/home/Home";
import Footer from "../src/components/footer/Footer";

import './App.scss';

function App() {

  const [ storeDataValues, setStoreDataValues ] = useState({
    name : "O Cãoselheiro",
    alternativeName : "Cãoselheiro",
    logo : "",
    fantasy : "O Cãoselheiro Comércio LTDA",
    cnpj : "30.324.633/0001-16",
    phone : "(11) 97212-1314",
    email : "ocaoselheiro@ocaoselheiro.com.br",
    media : [{
      facebook : "/caoselheiro",
      instagram : "@caoselheiro",
      twitter : "@caoselheiro",
    }]
  });

  return (

    <div className="App">
      <StoreData.Provider value={{storeDataValues}}>
        <Header />
        <Home />
        <Footer />
      </StoreData.Provider>
    </div>
  );
}

export default App;
