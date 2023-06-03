import React,{Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Category.scss";
import Loader from '../../Loader/Loader';

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <Suspense fallback={<Loader />}>
    <div className="shop-by-category">
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
    </Suspense>
  );
};

export default Category;


// process.env.REACT_APP_DEV_URL +
                                // item.attributes.img.data.attributes.url