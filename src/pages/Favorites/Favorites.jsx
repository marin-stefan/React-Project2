import React from "react";
import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import { removeFromFavorites } from "../../redux/favorites/FavoritesActions";

function Favorites(props) {
  const { favoriteProducts, removeFromFavoritesInjected, addToCartInjected } =
    props;
  return (
    <div>
      <Layout>
        <div className="container container-min-max-width bg-light py-5 my-5">
          <h2>Favorites</h2>
          {favoriteProducts.map((favoriteProduct, index) => {
            return (
              <div>
                <div className="d-flex border m-3">
                  <p className="w-50">{favoriteProduct.name}</p>
                  <p className="w-50">
                    {favoriteProduct.price} {favoriteProduct.currency}
                  </p>

                  <button
                    className="btn btn-dark mx-3"
                    onClick={() => {
                      addToCartInjected({
                        product: {
                          id: favoriteProduct.id,
                          name: favoriteProduct.name,
                          price: favoriteProduct.price,
                          currency: favoriteProduct.currency,
                        },
                      });
                      removeFromFavoritesInjected({
                        product: {
                          index,
                        },
                      });
                    }}
                  >
                    Muta in cos
                  </button>
                  <button
                    className="btn btn-dark mx-3"
                    onClick={() =>
                      addToCartInjected({
                        product: {
                          id: favoriteProduct.id,
                          name: favoriteProduct.name,
                          price: favoriteProduct.price,
                          currency: favoriteProduct.currency,
                        },
                      })
                    }
                  >
                    Adauga in cos
                  </button>

                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      removeFromFavoritesInjected({
                        product: {
                          index,
                        },
                      });
                    }}
                  >
                    X
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
