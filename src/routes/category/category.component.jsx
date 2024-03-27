import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../ components/product-card/product-card.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../ components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default Category;
