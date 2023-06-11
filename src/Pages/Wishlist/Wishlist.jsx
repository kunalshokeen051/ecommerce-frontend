import React, { useContext } from 'react'
import './Wishlist.scss';
import { Context } from '../../utils/Context';
import placeholder from '../../assets/icons8-wishlist-100.png'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header'

const Wishlist = () => {
  const { wishlistItems } = useContext(Context);

  const navigate = useNavigate();

  return (
    <>
    <Header />
      {!wishlistItems.length

        ? <div className='wishlist-container-empty'>
          <div className='empty-wishlist'>
            <div className="wishlist-inner-container">
              <img src={placeholder} alt="placeholder.jpg" />
              <h3>Please Add something to Wishlist First</h3>
              <button onClick={() => navigate('/')}> Go Back to Home </button>
            </div>
          </div>
        </div>

        :<div className='wishlist-container-content'>
        {wishlistItems?.map((item) => {
          return <div key={item?.id} className='wishlist-item'>
            <img src={item?.attributes?.img?.data[0]?.attributes?.formats?.small?.url} alt="prod.jpg" />
            <hr className='border' />
            <div className="text-content">
              <h1>{item?.attributes?.title}</h1>
              <h3>₹ {item?.attributes?.price}</h3>
            </div>
            <button onClick={() => { navigate(`/checkout`) }} >Buy Now</button>
          </div>
        })}
        </div>
   } </> 
  )}

export default Wishlist