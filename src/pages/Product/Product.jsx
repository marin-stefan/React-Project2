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
          <div className=" m-1 p-2 product-box-main border border-primary rounded">
            <div className="product-box-left">
              <div className="">
                <img
                  src={imageMain}
                  alt="Product"
                  className="img-fluid py-2 my-1 mx-1 border border-danger rounded"
                />
              </div>
              <div className="thumb-img">
                <img
                  src={image1}
                  alt="Product"
                  className="product-one img-fluid border border-danger rounded my-1 mx-1"
                  onClick={() => this.updateMainImage(image1)}
                />
                <img
                  src={image2}
                  alt="Product2"
                  className="img-fluid border border-danger rounded my-1 mx-1"
                  onClick={() => this.updateMainImage(image2)}
                />
                <img
                  src={image3}
                  alt="Product3"
                  className="img-fluid border border-danger rounded my-1 mx-1"
                  onClick={() => this.updateMainImage(image3)}
                />
                <img
                  src={image4}
                  alt="Product4"
                  className="img-fluid border border-danger rounded my-1 mx-1"
                  onClick={() => this.updateMainImage(image4)}
                />
              </div>
            </div>

            <div className=" product-box-right">
              <h2>{name}</h2>
              <br />
              <ul>
                <li>
                  <h4>
                    Brand : <span className="fs-5">{brand}</span>
                  </h4>
                </li>
                <li>
                  <h4>
                    Price : <span className="fs-4 text-danger">{price} {currency}</span>
                  </h4>
                </li>
                <li>
                  <h4>
                    Size : <span className="fs-5">{size}</span>  
                  </h4>
                </li>
                <li>
                  <h4>
                    Color : <span className="fs-5">{colour}</span>  
                  </h4>
                </li>
                <li>
                  <h4>
                    Material : <span className="fs-5">EU {material}</span>  
                  </h4>
                </li>
                <li>
                  <h4>
                    Description : <span className="fs-5">{description}</span></h4>
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
