import React from "react";
import "./featured.styles.css";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="ft-left">
        <img
          src={`https://www.flint.money/_next/image?url=%2Fright.png&w=1920&q=75`}
          alt=""
        />
      </div>

      <div className="ft-right">
        <div className="item-container">
          <h1>Maximised returns, minimised risks</h1>
          <p>
            Crypto wealth management is all about striking a balance. And we
            know how to. Earn returns on your coins, without overthinking the
            risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
