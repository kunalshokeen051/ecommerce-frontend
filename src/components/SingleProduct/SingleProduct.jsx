
import { useState, useContext } from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Navigate, useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import {Context} from '../../utils/Context'

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);
  console.log(data);


  const increment = () => {
    setQuantity((prevValue) => prevValue + 1);
  }

  const decrement = () => {
    if (quantity > 1)
      setQuantity((prevValue) => prevValue - 1);
  }

  if (!data) return;
  const product = data?.data[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={product.img.data[0].attributes.url} alt="prod.jpg" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">₹ {product.price}</span>
            <span className="desc">
              {product.desc}
            </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}> - </span>
                <span>{quantity}</span>
                <span onClick={increment}> + </span>
              </div>
              <button className="add-to-cart-button" onClick={() =>{
                 //product id and its quantity}
                handleAddToCart(data.data[0], quantity ) ; 
                setQuantity(1);
              }}>
                <FaCartPlus size={20}/> Add to Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: {' '}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <a href="www.facebook.com" target="_blank"> <FaFacebookF size={16}  className="icon"/> </a>
                  <a href="www.instagram.com" target="_blank"> <FaInstagram size={16} className="icon" />  </a>
                  <a href="www.pinterest.com" target="_blank"> <FaPinterest size={16} className="icon" />  </a>
                  <a href="www.twitter.com" target="_blank"> <FaTwitter size={16}  className="icon"/>  </a>
                 <a href="www.linkedin.com" target="_blank"> <FaLinkedinIn size={16} className="icon" />  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id} />
      </div>
    </div>
  );
};

export default SingleProduct;
