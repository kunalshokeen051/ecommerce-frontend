import { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from '../../assets/logo.png'
import { Context } from "../../utils/Context";
import LoginButton from '../Auth/LoginButton'
import Logout from '../Auth/LogOut'
import Profile from '../Auth/Profile'
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const { isAuthenticated} = useAuth0();
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, showCart, setShowCart, wishlistItems, auth} = useContext(Context);

  console.log(auth);
  
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left">
            <img src={logo} alt="logo.png" />
          </div>
          <div className="center" >
            <li onClick={() => {
              return (
                navigate("/"),
                window.scroll(0, 0)
              )
            }}>Home</li>
            <li onClick={() => { navigate("/about") }} >About</li>
            <li><a href="#category-section">Categories</a></li>
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(!showSearch)} />
            <span className="cart-icon" onClick={() => navigate('/wishlist')}>
              <AiOutlineHeart />
              {!!(wishlistItems.length) && <span>{wishlistItems.length}</span>}
            </span>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            <div className="auth-form">
              {auth 
                 ? <Logout />
                :
                <div className="auth-form-profile">
                  <Profile />
                <LoginButton />
                </div>
              }
            </div>
          </div>
        </div>
      </header>

      {/* mobile Menu */}

      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
