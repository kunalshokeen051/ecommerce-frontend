import React,{useState} from 'react'
import './Modal.scss';
import poster from '../../../assets/hero/Black Blue Simple Gaming Banner Landscape.png'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const Modal = () => {
    const [showModal,setShowModal] = useState(true);
    const navigate = useNavigate();
    return (
        <>
            <div className={`${showModal ?"":"hidden"}overlay-home`}/>
            <div
             className={`${showModal ?"":"hidden"} inner-container`}>
             <AiOutlineCloseCircle size={32} color='white' onClick={() =>{setShowModal(false)}}/>
                <img src={poster} alt="poster.jpg" />
                <h4>Experience the perfect harmony of technology and savings at
                    DEALSPOT SUMMER SALE.
                    <span>Upgrade your devices without breaking the bank. Don't miss out on this electrifying opportunity!</span>
                    <span> OFFER CLOSED SUNDAY 11:59PM</span>
                    <span>Subscribe to our Newsletter to get a discount code.</span></h4>
               <button onClick={() =>{
                setShowModal(false);
                navigate('/comingSoon');
                }} >Subscribe</button>
            </div>
        </>
    )
}

export default Modal