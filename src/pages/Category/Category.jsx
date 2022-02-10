import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import ProductList from "../../components/ProductList/ProductList";
import BaseListSideBar from "../../components/BaseListSideBar/BaseListSideBar";
import products from "../../utils/productsimgbb.json";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      filter: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const categoryName = match.params.categoryName;
    this.setState({ category: products[categoryName] });
    this.formData();
  }

  formData() {
    const f100 = document.getElementById("filter100");
    const f1000 = document.getElementById("filter1000");
    const f10000 = document.getElementById("filter10000");
    const values = [
      this.checkboxCheck(f100),
      this.checkboxCheck(f1000),
      this.checkboxCheck(f10000),
    ];
    const updatedValues = values.filter((elem) => elem);
    if (updatedValues.length > 0) {
      this.setState({ filter: updatedValues });
    } else {
      this.setState({ filter: [] });
      this.setState((prevState) => ({
        filter: [...prevState.filter, [1, 9999]],
      }));
    }
  }

  checkboxCheck(value) {
    if (value.checked) {
      if (value.id === "filter100") {
        const element = [1, 99];
        return element;
      } else if (value.id === "filter1000") {
        const element = [100, 999];
        return element;
      } else if (value.id === "filter10000") {
        const element = [1000, 9999];
        return element;
      }
    }
  }

  render() {
    return (
      <Layout>
        <div className="d-flex">
          <div className="border border-warning w-25 bg-light rounded-3 shadow-lg mx-1">
            <BaseListSideBar
              formData={(event) => {
                event.preventDefault();
                this.formData();
              }}
            />
          </div>
          <div className="container-fluid container-min-max-width border border-warning bg-light mx-1 rounded-3 shadow-lg">
            <h2 className="text-warning">{this.state.category.name}</h2>
            <ProductList
              products={this.state.category.items}
              filter={this.state.filter}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Category;
