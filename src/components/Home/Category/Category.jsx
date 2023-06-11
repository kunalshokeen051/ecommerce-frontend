import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Category.scss";
import { Context } from '../../../utils/Context';
import Loader from '../../LogoAnimationLoader/LogoAnimationLoader';

const Category = ({ categories }) => {
  const navigate = useNavigate();

  const {loader, setLoader} = useContext(Context);
  
  const loaderStatus = (value) =>{
    setLoader(value);
  }

  loaderStatus(true);

  return (
  <div onLoad={loaderStatus(false)} id="category-section" className="shop-by-category">
      <h2>Categories</h2>
        <div className="categories">
          {categories?.data?.map((item) => (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`/category/${item.id}`)}
            >
                <img
                  src={
                    item.attributes.img.data.attributes.formats.small.url
                  }
                  alt="prod.jpg"
                />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Category;

