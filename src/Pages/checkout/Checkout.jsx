import React, { useContext, useState } from 'react'
import './Checkout.scss'
import { Context } from '../../utils/Context'
import Header from '../../components/Header/Header';
import logo from '../../assets/logo.png';
import { makePaymentRequest } from "../../utils/Api";

const Checkout = () => {

  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const { cartSubTotal,loader, setloader, cartCount, cartItems } = useContext(Context);


  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      }

      script.onerror = () => {
        resolve(false);
      }

      document.body.appendChild(script);
    })
  }

  const displayRazorpay = async (amount) => {
    try{
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline ... Failed to load checkout page");
      return;
    }

    const options = {
      key: process.env.REACT_APP_KEY_ID,
      currency: "INR",
      amount: amount * 100,
      name: "DealSpot",
      description: "Thanks for Purchasing",
      img: logo,


      handler: (response) => {
        alert(response.razorpay_payment_id);
        alert("Payment is successful");
        if(response.razorpay_payment_id){
          makePaymentRequest("/api/orders", {
            products: cartItems, 
            paymentId:response.razorpay_payment_id
        });
        alert("data saved")
        }
      },
    
  }
const paymentObject = new window.Razorpay(options);
paymentObject.open();
    }
    catch (err) {
      console.log(err);
    }
}

return (
  <>
    <Header/>
    <div className='checkout-page'>
      <div className="inner-checkout-container">
        <h1 onClick= {() => displayRazorpay(cartSubTotal)} >Checkout</h1>
        <div className='form-container'>
          <form className='left' >
            <div className="col-1">
              <label htmlFor="name">Name</label>
              <input  type="text" name='name' />
            </div>
            <div className="col-2">
              <label htmlFor="email">E-mail</label>
              <input type="email" name='email' />
            </div>
            <div className="col-3">
              <label htmlFor="phone">Phone</label>
              <input  type="number" name='phone' />
            </div>
            <div className="col-4">
              <label htmlFor="address">Address</label>
              <input type="text" name='address' autoFocus />
            </div>
          </form>
            <button>Pay Now</button>
        </div>
        {console.log(cartSubTotal)}
      </div>
      <div className="right">
        <div className='cart-details'>
          <h2>Your Cart details:</h2>
          <div className='item-container'>
            {cartItems.map((item) => {
              return (
                <div key={item.id} className='product-container'>
                  <div className="title">
                    <h4>{item.attributes.title}</h4>
                    <p>Quantity: {item.attributes.quantity}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="checkout-footer">
            <h3>{`Total Items: ${" "} ${""} ${cartCount}`}</h3>
            <h3>{`Your SubTotal is:  ${" "} ${""} ₹ ${cartSubTotal}`}</h3>
            <h3>Delivery Charge: &#8377; 0</h3>
            <div className='break-line' />
            <h3>
              <span>Total Amount to be paid: </span>
              <span>&#8377; {cartSubTotal}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default Checkout