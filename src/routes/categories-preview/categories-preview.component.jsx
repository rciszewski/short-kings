import React from "react";

import CategoryPreview from "../../ components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";

const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
  
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
