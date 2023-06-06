import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div id="category-section" className="shop-by-category">
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


// process.env.REACT_APP_DEV_URL +
                                // item.attributes.img.data.attributes.url