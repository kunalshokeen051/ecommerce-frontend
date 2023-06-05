import './Offer.scss'
import React from 'react'
import {category_header} from '../../../Data';

const Offer = () => {
  return (
    <div className='category-container'>
     { 
      category_header.map((item) =>{
        return(
          <div key={item.id} className='category'>
            <img className='category-image' src={item.logo} alt="logo.png" />
            <h4>{item.name}</h4>
          </div>
        )
      })
     }
    </div>
  ) 
}

export default Offer