import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import './Product.css';


export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product flex">
      <div className="Product_img">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="Product_txt">
        <h1 className="name">{product.name}</h1>
        <p><strong>Price:</strong> {product.price}$</p>
        <p><strong>Description: </strong>{product.description}</p>
        <AddToCart product={product} />
      </div>
    </div>
  )
}