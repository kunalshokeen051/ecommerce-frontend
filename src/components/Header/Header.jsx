import { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from '../../assets/logo.png'
import { Context } from "../../utils/Context";
import LoginButton from '../Auth/LoginButton/LoginButton'
import LogoutButton from '../Auth/LogoutButton/LogoutButton'
import UserProfile from "../Auth/UserProfile/UserProfile";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, showCart, setShowCart, wishlistItems ,user } = useContext(Context);

  console.log(user);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
      setShowCart(false);
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
            <li>About</li>
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
             { user?.length === 0 ||  user?.name === undefined
             ? <div className="auth-buttons">
             <LoginButton />
              <UserProfile />
             </div>
              :
              <div className="auth-buttons">
           <div className="user-data">
           <img src={user?.image} alt="userpic.png" />
              <h5>{user?.name}</h5>
           </div>
              <LogoutButton />
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
