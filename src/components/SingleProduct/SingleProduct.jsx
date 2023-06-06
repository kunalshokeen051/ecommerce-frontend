
import { useState, useContext } from "react";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Navigate, useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch'
import LogoAnimationLoader from '../LogoAnimationLoader/LogoAnimationLoader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCartPlus } from "react-icons/fa";
import { Context } from '../../utils/Context'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share';
import { TbWorldWww } from "react-icons/tb";

const SingleProduct = () => {
  const notify = () => toast('Product Added To cart', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });;
  const [loader, setLoader] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity((prevValue) => prevValue + 1);
  }

  const decrement = () => {
    if (quantity > 1)
      setQuantity((prevValue) => prevValue - 1);
  }

  if (!data) return;
  const product = data?.data[0]?.attributes;
  // console.log(product);

  return (
    <>
      {loader ? <LogoAnimationLoader /> : " "}
      <div className="single-product-main-content" onLoad={() => setLoader(false)}>
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
                <button className="add-to-cart-button" onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                  notify();
                }}>
                  <FaCartPlus size={20} /> Add to Cart
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
                    <FacebookShareButton
                      url={'https://www.facebook.com'}
                      quote={''}
                      hashtag={`#dealspot #${product.title}`}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <WhatsappShareButton
                      url={""}
                      title={'title'}
                      separator={'sepearator'}                      >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={'https://www.dealspot.com'}
                      quote={'Hee Guys Look at this nice product!'}
                      hashtag="#dealspot"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <EmailShareButton
                     subject={`${product.title} only at Dealspot.in`} 
                     body={`Hee Check this Product at ${window.location}`}
                    >
                     <EmailIcon size={32}/>
                    </EmailShareButton>
                    <LinkedinShareButton
                     url={`www.dealspot.com`}
                      quote={'Hee Guys Look at this nice product!'}
                      hashtag="#dealspot"
                    >
                     < LinkedinIcon size={32}/>
                    </LinkedinShareButton>
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default SingleProduct;
