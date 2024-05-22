import React, { useEffect } from "react";

const FilterableProductsForSaleList = () => {
  function handleOnSearch(query) {}

  let result;

  if (error) {
    result = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    result = <div>Loading...</div>;
  } else {
    result = productSearchResult.results.map((x, index) => (
      <ProductListItem product={x} key={index} />
    ));
  }

  return (
    <>
      <SearchBar onSearch={handleOnSearch} />
      <div>{result}</div>
    </>
  );
};

export default FilterableProductsForSaleList;
