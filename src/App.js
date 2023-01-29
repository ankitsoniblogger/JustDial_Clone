import React from "react";
import Header from "./components/navbar/Header";
import Search from "./components/search/Search";
import Slider from "./components/slider/Slider";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Search />
      <Slider />
    </div>
  );
};

export default App;
