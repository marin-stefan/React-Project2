import React, { Component } from "react";
import Layout from "../components/Layout";
import products from "../utils/products.json";
import Category from "./Category";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";

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
    const { name, image, id, price, currency } = this.state.product;
    const { addToCart } = this.props;
    return (
      <div>
        <Layout>
          <div className="container-fluid container-min-max-width border border-warning bg-light mx-1 rounded-3 shadow-lg">
            <h1>{name}</h1>
            <div className="">
              <img src={image} alt="Product" />
            </div>
              <button className="btn btn-dark mx-3" onClick={() => addToCart({
                  product: {
                      id,
                      name,
                      price,
                      currency,
                      image
                  }
              })}
 
              >Adauga in cos
              </button>
          </div>
        </Layout>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
   return {
       addToCart: (product) => dispatch(addToCart(product))
   }
}

export default connect(null, mapDispatchToProps)(Product)
