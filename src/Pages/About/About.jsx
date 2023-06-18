import React from 'react'
import './About.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import AboutUs from '../../assets/Aboutus.jpg';
import { AiFillShop } from 'react-icons/ai';
import { BsGlobeAmericas } from 'react-icons/bs';
import { BiAddToQueue } from 'react-icons/bi';


const About = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className='About'>
                <div className="left">
                    <img src={AboutUs} alt="about.png" />
                </div>
                <div className="right">
                    <h3 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius reiciendis voluptatem adipisci ipsam excepturi, rem alias iusto est fugiat vero unde laboriosam a, totam corporis perferendis et natus pariatur quibusdam illo! Labore mollitia doloribus earum eligendi eveniet dolor fugiat inventore, facilis vitae quae blanditiis incidunt soluta id sequi eaque molestiae ipsa omnis asperiores saepe rerum. Officia officiis similique consequuntur, beatae deleniti vero ut totam ipsam laborum iusto aut magnam enim libero, numquam sapiente quasi tenetur. Dolorum suscipit dolorem repellat quam, numquam, voluptate sequi atque in cum, maiores repudiandae. Vitae nobis incidunt quo illum, maiores consequuntur iure mollitia quasi eos.</h3>
                    <div className="about-container">
                        <h3>
                            <span><AiFillShop /></span>
                            Lorem ipsum dolor sit
                        </h3>
                        <h3>
                            <span><BsGlobeAmericas /></span>
                            Lorem ipsum dolor sit
                        </h3>
                        <h3>
                            <span><BiAddToQueue /></span>
                            Lorem ipsum dolor sit
                        </h3>
                    </div>
                    <div onClick={() =>{navigate("/")}} className='cta-button'>
                        Go Back to Homescreen
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About