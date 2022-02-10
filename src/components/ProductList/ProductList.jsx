import React from "react";
import ProductItem from "../ProductItem/ProductItem";

function ProductList(props) {
  const { products, filter } = props;

  return (
    <div className="container-fluid ">
      <div className="row">
        {products
          ? products.map((product) =>
              filter
                ? filter.map((elem, index) => {
                    return product.price <= elem[1] &&
                      product.price >= elem[0] ? (
                      <ProductItem
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        currency={product.currency}
                        image={product.image1}
                        description={product.description}
                      />
                    ) : null;
                  })
                : null
            )
          : null}
      </div>
    </div>
  );
}

export default ProductList;
