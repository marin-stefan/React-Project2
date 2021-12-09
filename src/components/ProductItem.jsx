import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { addToFavorites } from "../redux/actions/favorites";

function ProductItem(props) {
    const { name, price, currency, image, addToCartInjected, addToFavoriteInjected } = props;
 
    return (
        <div className="col-4 product-item d-flex flex-column align-items-center">
            <img src={image} alt="Product" className="w-100 mb-2" />
            <p className="text-center mb-1">{name}</p>
            <p className="text-center">{price } {currency}</p>
            <button 
                className="btn btn-outline-dark" 
                onClick={() => {
                    addToCartInjected({
                        product: {
                            name, 
                            price,
                            currency,
                            image
                        }
                    })
                }}
            >
                Adauga in cos
            </button>
           
            <button 
                className="btn btn-outline-dark" 
                onClick={() => {
                    addToFavoriteInjected({
                        product: {
                            name, 
                            price,
                            currency,
                            image
                        }
                    })
                }}
            >
                Adauga la favorite
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