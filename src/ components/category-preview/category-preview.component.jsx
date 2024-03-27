import {
  CategoryPreviewContainer,
  Preview,
  PreviewLink,
} from "./category-preview.styles.jsx";
import ProductCard from "../product-card/product-card.component";


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <PreviewLink to={`${title}`}>{title.toUpperCase()}</PreviewLink>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
