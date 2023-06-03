import React from "react";
import{FaFacebookF, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

import "./Newsletter.scss";

const Newsletter = () => {
    return <div className="newsletter-section" >
    <div className="overlay"></div>
        <div className="newsletter-content">
            <div className="small-text">
                Newsletter
                <span className="big-text">Sign Up for latest updates and offers</span>
                </div>
                <div className="form">
                    <input className="input1" type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={14}/>
                    </div>
                    <div className="icon">
                        <FaLinkedin size={14}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={14}/>
                    </div>
                </div>

        </div>
        </div>;
};

export default Newsletter;
