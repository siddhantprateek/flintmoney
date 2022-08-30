import React from "react";
import "./featured.styles.css";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="ft-left">
        <img
          className="ft-image"
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
        <div className="item-container">
          <h1>For a lot of coins, on a lot of chains</h1>
          <p>
          Your Bitcoin and Ethereum. Your USDT and USDC. Almost all the coins you have, and some more, can be invested on Flint, using your favourite networks.
          </p>
        </div>
        <div className="item-container">
          <h1>Where interest is earned every second</h1>
          <p>
          Don’t wait. Have your interest added to your portfolio literally every second. And watch your crypto wealth grow in real-time.
          </p>
        </div>
        <div className="item-container">
          <h1>Like a crypto savings account, but better</h1>
          <p>
          There are no lock-ins on Flint. Even while earning high returns on your crypto, you have the ability to withdraw at any time.
          </p>
        </div>
        <div className="item-container">
          <h1>All cash, no cache</h1>
          <p>
          You earn returns in the same cryptocurrency that you invest. There are no twisted terms or token rewards to keep you away from your wealth.
          </p>
        </div>
        <div className="empty-space">
        </div>
      </div>
    </div>
  );
};

export default Featured;
