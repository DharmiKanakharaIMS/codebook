import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducers";

const initialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext(initialState);

function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  function initialProducts(products) {
    dispatch({
      type: "ProductList",
      payload: { products: products },
    });
  }
  function bestSeller(products) {
    return state.bestSellerOnly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }
  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
  }
  function rating(products) {
    if (state.rating === "4StarsABove") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.rating === "3StarsABove") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.rating === "2StarsABove") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.rating === "1StarsABove") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }

  const filteredProductList = rating(
    sort(inStock(bestSeller(state.productList)))
  );
  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProducts,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;

export const useFilter = () => useContext(FilterContext);
