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
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, showCart, setShowCart } = useContext(Context);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

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
    setProfile(null);
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


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
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            {profile == null
              ?
              <h4 onClick={() => login()}>Sign in with Google 🚀 </h4>
              :
              <div>
                <h4>Hi, {profile.name}</h4>
                <button onClick={logOut}>Logout</button>
              </div>}
              {profile == null ? " " : <img className="profile-pic" src={profile.picture} alt="profile.png" /> }
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
