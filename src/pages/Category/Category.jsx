import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import ProductList from "../../components/ProductList/ProductList";
import BaseListSideBar from "../../components/BaseListSideBar/BaseListSideBar";
import products from "../../utils/productsimgbb.json";
import { withRouter } from "../../components/withRouter";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      filter: [],
    };
  }

  componentDidMount() {
    const categoryName = this.props.router.params.categoryName;
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
  // border border-warning bg-light rounded-3 shadow-lg

  render() {
    return (
      <Layout>
        <div className="container d-flex flex-wrap justify-content-between flex-direction-column bg-light">
          
            <div className=""> 
              <BaseListSideBar
                formData={(event) => {
                  event.preventDefault();
                  this.formData();
                }}
              />
            </div>
          
            <div> 
              <h2 className="text-warning text-center">{this.state.category.name}</h2>
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

export default withRouter(Category);
