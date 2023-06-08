import React from 'react'
import './SubscriberPage.scss';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const SubscriberPage = () => {
  const navigate = useNavigate();

  return (
    <div className='outer-container'>
      <div className="inner-container1">
        <h1>Coming Soon</h1>
        <h2 onClick={() => navigate("/")} > < BsFillArrowLeftSquareFill/> Go Back to HomeScreen</h2>
      </div>
    </div>
  )
}

export default SubscriberPage