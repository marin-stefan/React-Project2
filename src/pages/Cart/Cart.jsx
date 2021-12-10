import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/CartActions";

function Cart(props) {
  const { cartProducts, removeFromCartInjected } = props;
  return (
    <div>
      <Layout>
        <div className="container container-min-max-width bg-light py-5 my-5">
          <h2>Shopping cart</h2>
          {cartProducts.map((cartProduct, index) => {
            console.log(index)
            return (
              <div>
                
                <div className="d-flex border m-3">
                  <p className="w-50">{cartProduct.name}</p>
                  <p className="w-50">
                    {cartProduct.price} {cartProduct.currency}
                  </p>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      removeFromCartInjected({
                        product: {
                          index,
                        },
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartProducts: state.cart.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCartInjected: (payload) => dispatch(removeFromCart(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
