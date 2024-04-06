import React from "react";
import "./App.css";
import { productData } from "./darazData";

const App = () => {
  return (
    <div id="main-container">
      {productData.map((item) => {
        return (
          <div className="item-container" key={item.id}>
            <img src={item.image} style={{ width: "185px", height: "185px" }} />
            <span
              style={{ fontSize: "15px", color: "#212121", fontWeight: "bold" }}
            >
              {item.name}
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#f85606",
                fontFamily: "Roboto",
                fontWeight: "bold",
              }}
            >
              {`Rs.${item.price}`}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
