import FeaturedProducts from "./Products/FeaturedProducts";
import Offers from "./Products/Offers";
import Category from "./Products/ProductCategory";

const Products = () => {
  return (
    <div className="ml-1 text-gray-900 dark:text-gray-50">
      <Offers />
      <FeaturedProducts />
      <Category />
    </div>
  );
};

export default Products;
