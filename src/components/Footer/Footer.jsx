import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            animi reiciendis blanditiis dolor. Sit quas ipsa unde aperiam cum
            nostrum.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              G-Baani Address One Next To Hiton, Gurugram, Sector 56 Gurgaon,
              Gurgaon, Haryana
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 4973 374 343</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@upshop.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
          <strong>Grabit 2023</strong><span><a target="_blank" rel="noreferrer" href="http://kunalshokeen.tech">Developer Contact</a></span> 
            </div>
            <img src={Payment} alt="payment.png" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
