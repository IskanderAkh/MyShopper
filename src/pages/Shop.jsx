import React from "react";
import ShopCatalog from "../components/ShopCatalog/ShopCatalog";

const Shop = () => {
  return (
    <>
      <h1 className="current-location">Магазин</h1>
      <div className="current-location-link"><a href="/">Главная </a> — <p> Магазин</p>{" "}</div>
      <div className="shop">
        <ShopCatalog availability={true} />
      </div>
    </>
  );
};

export default Shop;
