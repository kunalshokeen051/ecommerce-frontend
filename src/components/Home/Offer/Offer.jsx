import './Offer.scss'
import React from 'react'
import {category_header} from '../../../Data';
import { useNavigate } from 'react-router-dom';

const Offer = () => {

  const navigate = useNavigate();

  return (
    <div className='category-container'>
     { 
      category_header.map((item) =>{
        return(
          <div key={item.id} className='category'
          onClick={() =>{navigate(item.link);}}
          >
            <img className='category-image' 
            src={item.logo} alt="logo.png" />
            <h4>{item.name}</h4>
          </div>
        )
      })
     }
    </div>
  ) 
}

export default Offer