import React from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import { removeFromFavorites } from "../redux/actions/favorites";

function Favorites(props) {
    const { favoriteProducts, removeFromFavoritesInjected } = props;
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
      removeFromFavoritesInjected: (payload) => dispatch(removeFromFavorites(payload)),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
