import React from "react";
import "./globalStyles";
import { render } from "react-dom";
import SearchResultList from "./components/OccasionSearchList";
import SearchResultTab from "./components/OccasionSearchResult";
import occasionListData from "./mockData/occasionList";
import Navbar from "./components/navbar";

const App = () => (
  <div>
    <Navbar />
    <SearchResultList
      renderItems={() =>
        occasionListData.map((props, index) => {
          return <SearchResultTab key={index} {...props} />;
        })
      }
    />
  </div>
);

render(<App />, document.getElementById("root"));
