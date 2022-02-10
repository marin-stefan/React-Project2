import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import { removeFromFavorites } from "../../redux/favorites/FavoritesActions";

function Favorites(props) {
  const { favoriteProducts, removeFromFavoritesInjected, addToCartInjected } = props;
  
  return (
    <div>
      <Layout>
        <div className="container container-min-max-width bg-light py-3 my-3">
          <h2 className="mx-3">Favorite Products</h2>
          {favoriteProducts.map((favoriteProduct, index) => {
            return (
              <div>
                <div className="d-flex justify-content-between border m-3">
                  <div className="w-25">
                    <img
                      src={favoriteProduct.image}
                      alt="Product"
                      className="thumbnail-image"
                    />
                  </div>
                  <div className="w-50">
                    <h5 className=" text-center ">{favoriteProduct.name}</h5>
                    <h6>{favoriteProduct.description}</h6>
                  </div>
                  <div className="w-25">
                    <h5 className="text-center text-danger mt-4">
                      {favoriteProduct.price} {favoriteProduct.currency}
                    </h5>
                  </div>

                  <button
                    className="btn btn-outline-dark mx-3 my-1 border-danger"
                    onClick={() =>
                      addToCartInjected({
                        product: {
                          id: favoriteProduct.id,
                          image: favoriteProduct.image,
                          name: favoriteProduct.name,
                          price: favoriteProduct.price,
                          currency: favoriteProduct.currency,
                          description: favoriteProduct.description,
                        },
                      })
                    }
                  >
                    Add to cart
                  </button>

                  <button
                    className="btn btn-outline-danger my-1 mx-3 border-warning"
                    onClick={() => {
                      removeFromFavoritesInjected({
                        product: {
                          index,
                        },
                      });
                    }}
                  >
                    Remove
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
    favoriteProducts: state.favorite.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromFavoritesInjected: (payload) =>
      dispatch(removeFromFavorites(payload)),
    addToCartInjected: (payload) => dispatch(addToCart(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
