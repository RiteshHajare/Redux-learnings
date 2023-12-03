import React from "react";

function Home(props) {
  console.log("home", props.data);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/iphoto/ios15-iphone13-pro-home-camera-callout.png"
            alt="iphone-img"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone Price : </span>
          <span>$1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ name: "Iphone", price: 1000 })
            }
          >
            Add to cart
          </button>
          <button onClick={() => props.removeToCartHandler()}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
