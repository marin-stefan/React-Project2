import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";

import products from "../../utils/products.json";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import { addToFavorites } from "../../redux/favorites/FavoritesActions";
import "../../pages/Product/Product.css"

class Product extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }
  componentDidMount() {
    const productIdUrl = this.props.match.params.productId;

    const categoryValues = Object.values(products);

    let currentProduct;
    categoryValues.forEach((category) => {
      const findResult = category.items.find((item) => {
        return Number(productIdUrl) === item.id;
      });

      if (findResult !== undefined) {
        currentProduct = findResult;
      }
    });
    this.setState({ product: currentProduct });
  }

  render() {
    const { name, image, id, price, currency, size, brand, colour, material, description } = this.state.product;
    const { addToCart, addToFavorite } = this.props;
    return (
      <div>
        <Layout>
          <div className="container-fluid container-min-max-width border border-warning bg-light mx-1 rounded-3 shadow-lg">
            <div className="d-flex justify-content-around">
              <div className="w-25">
                <img src={image} alt="Product" className="" />
              </div>
              <div className="w-25">
                <h2>{name}</h2>
                <h3>{`Marca : ${brand}`}</h3>
                <h3>{`Pret : ${price} ${currency}`}</h3>
                <h3>{`Marime : ${size}`}</h3>
                <h3>{`Culoare : ${colour}`}</h3>
                <h3>{`Material : ${material}`}</h3>
                <h4>{`Descriere : ${description}`}</h4>
                <button
                  className="btn btn-dark mx-3"
                  onClick={() =>
                    addToCart({
                      product: {
                        id,
                        name,
                        price,
                        currency,
                      },
                    })
                  }
                >
                  Adauga in cos
                </button>
                <button
                  className="btn btn-dark mx-3"
                  onClick={() =>
                    addToFavorite({
                      product: {
                        id,
                        name,
                        price,
                        currency,
                      },
                    })
                  }
                >
                  Adauga la favorite
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (payload) => dispatch(addToCart(payload)),
    addToFavorite: (payload) => dispatch(addToFavorites(payload))
  };
}

export default connect(null, mapDispatchToProps)(Product);
