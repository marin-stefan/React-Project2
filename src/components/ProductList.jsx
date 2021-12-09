import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  const { products, filter } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        {products
          ? products.map((product) => (
                filter
                ? filter.map((elem)=>{
                  return product.price <=elem[1] && product.price >= elem[0]
                  ?(
                    <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    currency={product.currency}
                    image={product.image}
                    />
                   )
                  :null
                })
                :null 
          ))
          : null}
      </div>
    </div>
  );
}

export default ProductList;
