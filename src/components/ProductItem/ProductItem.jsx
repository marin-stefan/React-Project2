import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions" ;
import { addToFavorites } from "../../redux/favorites/FavoritesActions";
import { Link } from "react-router-dom";

function ProductItem(props) {
    const {  name, price, currency, image, addToCartInjected, addToFavoriteInjected, id  } = props;
 
    return (
        <div className="col-12 col-md-4 product-item d-flex flex-column align-items-center">
            <Link to={`/product/${id}`}>
            <img src={image} alt="Product" className="w-100 mb-2" />
            </Link>
            <p className="text-center mb-1">{name}</p>
            <p className="text-center">{price } {currency}</p>

            <button 
                className="btn btn-outline-dark" 
                onClick={() => {
                    addToCartInjected({
                        product: {
                            
                            id,
                            name, 
                            price,
                            currency,
                            image
                        }
                    })
                }}
            >
                Add to cart
            </button>
           
            <button 
                className="btn btn-outline-dark" 
                onClick={() => {
                    addToFavoriteInjected({
                        product: {
                            id,
                            name, 
                            price,
                            currency,
                            image
                        }
                    })
                }}
            >
                Add to favorites
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        addToCartInjected: (payload) => dispatch(addToCart(payload)),
        addToFavoriteInjected: (payload) => dispatch(addToFavorites(payload))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem)