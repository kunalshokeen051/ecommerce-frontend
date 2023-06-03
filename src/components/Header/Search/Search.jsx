import { MdClose } from "react-icons/md";

import "./Search.scss";

import prod from "../../../assets/products/headphone-prod-4.webp";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="prod.webp" />
            </div>
            <div className="prod-details">
              <span className="name">Boat Headphones Air 400</span>
              <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, numquam.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
