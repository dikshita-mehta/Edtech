import React from "react";
import "./Payment.css";
import card_img from "./images/card_img.png";

function Payment() {
  return (
    <div className="Payment">
      <div className="Payment_container">
        <form className="Payment_form" action="">
          <div className="Payment_row">
            <div className="Payment_col">
              <h3 className="Payment_title">billing address</h3>

              <div className="Payment_inputBox">
                <span>full name :</span>
                <input type="text" placeholder="john deo" />
              </div>
              <div class="Payment_inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" />
              </div>
              <div className="Payment_inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality" />
              </div>
              <div className="Payment_inputBox">
                <span>city :</span>
                <input type="text" placeholder="mumbai" />
              </div>

              <div className="Payment_flex">
                <div className="Payment_inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="india" />
                </div>
                <div class="Payment_inputBox">
                  <span>zip code :</span>
                  <input type="text" placeholder="123 456" />
                </div>
              </div>
            </div>

            <div className="Payment_col">
              <h3 className="Payment_title">payment</h3>

              <div className="Payment_inputBox">
                <span>cards accepted :</span>
                <img src={card_img} alt="" />
              </div>
              <div className="Payment_inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo" />
              </div>
              <div className="Payment_inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" />
              </div>
              <div className="Payment_inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" />
              </div>

              <div className="Payment_flex">
                <div className="Payment_inputBox">
                  <span>exp year :</span>
                  <input type="number" placeholder="2022" />
                </div>
                <div className="Payment_inputBox">
                  <span>CVV :</span>
                  <input type="text" placeholder="1234" />
                </div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="proceed to checkout"
            className="Payment_submit-btn"
          />
        </form>
      </div>
    </div>
  );
}

export default Payment;
