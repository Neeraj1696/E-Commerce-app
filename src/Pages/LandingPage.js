import React from "react";
import "../Style/LandingPage.css";

const LandingPage = () => {
  const data = ["All Products", "Electronics", "Sports", "Kitchenware"];
  return (
    <div>
      <div className="headig">
        <h4>Welcome To Online Shopping</h4>
      </div>
      <div className="container">
        <div className="container_products">
          <div className="col">
            <div className="row">
              {data.map((category, index) => (
                <div className="main_container" key={index}>
                  <a href="/">{category}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
