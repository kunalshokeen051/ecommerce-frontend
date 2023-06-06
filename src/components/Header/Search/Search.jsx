import {useState } from 'react';
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from 'react-router-dom';
import {useFetch} from '../../../hooks/useFetch';

const Search = ({ setShowSearch }) => {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
   setQuery(e.target.value);
  }

  let {data} = useFetch(`/api/products?populate=*&filters[title][$containsi]=${query}`);
  console.log(data);

if(!query.length){
data = null;
}

  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus
         placeholder="Search for Products" 
value={query} onChange={onChange}
         />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
         {data?.data?.map((item) => {
   return (
            <div key={item.id} 
            onClick={() =>{
              navigate("/product/" + item.id)
              setShowSearch(false)
              }}
             className="search-result-item">
            <div className="img-container">
              <img src={item.attributes.img.data[0].attributes.url} alt="prod.webp" />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <span className="desc">{item.attributes.desc}</span>
            </div>
          </div>
          )
         })}
        </div>
      </div>
    </div>
  );
};

export default Search;
