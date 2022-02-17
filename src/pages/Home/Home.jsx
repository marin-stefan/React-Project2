import React from "react";
import Layout from "../../components/Layout/Layout";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import products from "../../utils/productsimgbb.json";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryNames: [],
    };
  }

  componentDidMount() {
    const categories = Object.values(products);
    const categoryNames = Object.keys(products);
    this.setState({ categories, categoryNames });
  }

  render() {
    return (
      <div>
        <Layout>
          <div className="container-fluid">
            <div className="row">
              {this.state.categories.map((category, index) => {
                return (
                  <HomeCategory
                    key={index}
                    image={category.image}
                    title={category.name}
                    description={category.description}
                    routeName={this.state.categoryNames[index]}
                  />
                );
              })}
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Home;
