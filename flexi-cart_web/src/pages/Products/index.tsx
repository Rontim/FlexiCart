import { useLoaderData } from "react-router-dom";
import { product } from "../../types";

const Products = () => {
  const data = useLoaderData() as product[];
  //   const navigation = useNavigation();
  console.log(data);

  return (
    <div>
      <h1>Products</h1>
      {data.map((product: product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default Products;
