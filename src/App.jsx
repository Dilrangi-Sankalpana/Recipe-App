import React, { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import "./App.css";
import FoodDetails from "./components/FoodDetails";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [selectedFoodID, setSelectedFoodID] = useState("");

  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setSelectedFoodID={setSelectedFoodID} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails selectedFoodID={selectedFoodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
