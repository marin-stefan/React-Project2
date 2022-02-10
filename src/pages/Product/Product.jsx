import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import products from "../../utils/productsimgbb.json";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/CartActions";
import { addToFavorites } from "../../redux/favorites/FavoritesActions";
import "../../pages/Product/Product.css";

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

  updateMainImage(image) {
    let updatedProduct = { ...this.state.product };
    updatedProduct.imageMain = image;
    this.setState({ product: updatedProduct });
  }

  render() {
    const {
      name,
      imageMain,
      image1,
      image2,
      image3,
      image4,
      id,
      price,
      currency,
      size,
      brand,
      colour,
      material,
      description,
    } = this.state.product;
    const { addToCart, addToFavorite } = this.props;

    return (
      <div>
        <Layout>
          <div className="container-fluid container-min-max-width border border-warning bg-light mx-1 rounded-3 shadow-lg">
            <div className="d-flex justify-content-around">
              <div className="w-100 d-flex">
                <div className="w-75">
                  <img src={imageMain} alt="Product" />
                </div>
                <div className="w-75 mr-5 d-flex flex-column">
                  <img
                    src={image1}
                    alt="Product"
                    className="w-25  border  rounded"
                    onClick={() => this.updateMainImage(image1)}
                  />
                  <img
                    src={image2}
                    alt="Product2"
                    className="w-25  border rounded"
                    onClick={() => this.updateMainImage(image2)}
                  />
                  <img
                    src={image3}
                    alt="Product3"
                    className="w-25 h-25 border rounded"
                    onClick={() => this.updateMainImage(image3)}
                  />
                  <img
                    src={image4}
                    alt="Product4"
                    className="w-25  border rounded"
                    onClick={() => this.updateMainImage(image4)}
                  />
                </div>
              </div>

              <div className="w-100 py-4 px-5 ">
                <h2>{name}</h2>
                <br />
                <ul>
                  <li>
                    <h3>{`Brand : ${brand}`}</h3>
                  </li>
                  <li>
                    <h3>{`Price : ${price} ${currency}`}</h3>
                  </li>
                  <li>
                    <h3>{`Size : ${size}`}</h3>
                  </li>
                  <li>
                    <h3>{`Color : ${colour}`}</h3>
                  </li>
                  <li>
                    <h3>{`Material : ${material}`}</h3>
                  </li>
                  <li>
                    <h4>{`Description : ${description}`}</h4>
                  </li>
                </ul>

                <button
                  className="btn btn-outline-danger mx-3 border-primary"
                  onClick={() =>
                    addToCart({
                      product: {
                        image: image1,
                        id,
                        name,
                        price,
                        currency,
                        description,
                      },
                    })
                  }
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-outline-danger mx-3 border-primary"
                  onClick={() =>
                    addToFavorite({
                      product: {
                        image: image1,
                        id,
                        name,
                        price,
                        currency,
                        description,
                      },
                    })
                  }
                >
                  Add to favorites
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
    addToFavorite: (payload) => dispatch(addToFavorites(payload)),
  };
}

export default connect(null, mapDispatchToProps)(Product);
