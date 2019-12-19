import React from "react";
//import logo from "../images/logo.svg";
import "../stylesheets/App.scss";
import Header from "./Header";
import ShowDummy from "./ShowDummy";
import ShowClass from "./ShowClass";

const api = [
  {
    name: "Lost"
  },
  {
    name: "Aída"
  }
];

function App() {
  return (
    <div className="app">
      Hola Mundo!!
      <Header />
      <ShowDummy name={api[0].name} genero="comedy" />
      <ShowClass name="Dexter" genero="drama" />
    </div>
  );
}

export default App;
