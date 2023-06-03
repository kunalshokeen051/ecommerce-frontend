import { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [ShowMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset > 200) {
      setScrolled(true);
      setShowCart(false);
      setShowMenu(false);
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
          <ul className="left">
            <li onClick={() => {
              return (
                navigate("/"),
                window.scroll(0,0)
              )
            }}>Home</li>
            <li onClick={() => window.scroll(0,810)}>About</li>
            <li onClick={() => setShowMenu(!ShowMenu)}>Categories</li>
          </ul>
          <div className="center" onClick={() => {
              return (
                navigate("/"),
                window.scroll(0,0),
                setShowMenu(false),
                setShowSearch(false)
              )
            }} >Grabit
            </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(!showSearch)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(!showCart)}>
              <CgShoppingCart />
              <span>{cartItems}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
      <div className={`expanded-header ${ShowMenu ? "showExpandedMenu" : ""}`}>
        <div className="left">
          <h4>All your favorite categories in one place</h4>
        </div>
        <hr style={{ height:'100px'}} />
        <div className="right">
          <ol className="list">
            <li onClick={navigate()} >Headphones</li>
            <li onClick={navigate()} >Wireless Earbuds</li>
            <li onClick={navigate()} >Bluetooth Speakers</li>
            <li onClick={navigate()} >Smart Watches</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Header;