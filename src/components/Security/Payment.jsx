"use client";

import "./payment.css";
import React, {useState} from "react";

export default function Payment() {
  const [checkout, setCheckout] = useState(true);

  return (
    <div className=" w-full h-full md:h-[43vh] grid place-items-center ">
      {checkout ? (
        <div className="modal h-full md:h-[43vh]  ">
          <form className="form h-full">
            <div className="credit-card-info--form">
              <div className="input_container">
                <label htmlFor="password_field" className="input_label">
                  Card holder full name
                </label>
                <input
                  id="password_field"
                  className="input_field"
                  type="text"
                  defaultValue="Activus"
                  name="input-name"
                  title="Inpit title"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="input_container">
                <label htmlFor="password_field" className="input_label">
                  Card Number
                </label>
                <input
                  id="password_field"
                  className="input_field"
                  type="number"
                  defaultValue="371449635398431"
                  name="input-name"
                  title="Inpit title"
                  placeholder="0000 0000 0000 0000"
                />
              </div>
              <div className="input_container">
                <label htmlFor="password_field" className="input_label">
                  Expiry Date / CVV
                </label>
                <div className="split">
                  <input
                    id="password_field"
                    className="input_field"
                    type="text"
                    defaultValue="01/24"
                    name="input-name"
                    title="Expiry Date"
                    placeholder="01/23"
                  />
                  <input
                    id="password_field"
                    className="input_field"
                    type="number"
                    defaultValue="386"
                    name="cvv"
                    title="CVV"
                    placeholder="CVV"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setCheckout(false);
              }}
              className="purchase--btn"
            >
              Checkout
            </button>
          </form>
        </div>
      ) : (
        <div className="container">
          <div className="left-side">
            <div className="card">
              <div className="card-line"></div>
              <div className="buttons"></div>
            </div>
            <div className="post">
              <div className="post-line"></div>
              <div className="screen">
                <div className="dollar">$</div>
              </div>
              <div className="numbers"></div>
              <div className="numbers-line2"></div>
            </div>
          </div>
          <div className="right-side">
            <div className="new">Hover to pay</div>
          </div>
        </div>
      )}
    </div>
  );
}

// https://prod.spline.design/o692LzdFA8jbu8J5/scene.splinecode
