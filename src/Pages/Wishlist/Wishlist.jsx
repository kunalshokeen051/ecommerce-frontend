import React, { useContext } from 'react'
import './Wishlist.scss';
import Context from '../../utils/Context'


const Wishlist = () => {

  const { wishlistItems } = useContext(Context);


  return (
    <div className='wishlist-container'>
   {!wishlistItems.length ? "" 
   : wishlistItems?.map((item) =>{
      return <div key={item?.id} className='wishlist-item'>
      <img src={item?.img?.data[0]?.attributes?.formats?.small?.url} alt="prod.jpg" />
      <h3>{item?.attributes?.title}</h3>
      <h3>{item?.attributes?.price}</h3>
      </div>
    })}
    </div>
  )
}

export default Wishlist