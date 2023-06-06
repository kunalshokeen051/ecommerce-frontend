import "./Product.scss";
import {useNavigate} from 'react-router-dom';

const Product = ({id, data}) => {

  const navigate = useNavigate();

  const showProduct = () =>{
    navigate("/product/" + id);
    window.scroll(0,0);
  }

  return (
    <div className="product-card" onClick={showProduct}>
      <div className="thumbnail">
        <img src={data.img.data[0].attributes.formats.small.url} alt="prod.jpg" />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
