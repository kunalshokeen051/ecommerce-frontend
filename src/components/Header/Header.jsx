import { useEffect, useState, useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import logo from '../../assets/logo.png'
import { Context } from "../../utils/Context";


const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { cartCount, showCart, setShowCart } = useContext(Context);

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
                window.scroll(0,0)
              )
            }}>Home</li>
            <li onClick={() => window.scroll(0,810)}>About</li>
            <li>Categories</li>
            </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(!showSearch)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            <BiUserCircle />
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
