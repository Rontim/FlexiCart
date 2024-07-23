import {
  useLoaderData,
  useNavigation,
  LoaderFunctionArgs,
} from "react-router-dom";
import ProductNavBar from "../../components/NavBar/ProductNavBar";
import { product } from "../../types";
import { Spinner } from "flowbite-react";

// eslint-disable-next-line react-refresh/only-export-components
export async function productLoader({ params }: LoaderFunctionArgs) {
  try {
    const req = await fetch(
      `http://localhost:1337/api/v1/products/${params.categoryslug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (req.ok) {
      return await req.json();
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}

const Products = () => {
  const data = useLoaderData() as product[];
  const navigation = useNavigation();

  if (navigation.state == "loading") {
    return (
      <div className="w-full flex p-4 justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <>
      <ProductNavBar />
      {data.map((product: product) => {
        return (
          <div key={product.id}>
            <p className="dark:text-white text-dark">{product.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Products;
