import { Carousel } from "flowbite-react";
import { carouselData } from "./carouselData";
// import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ProductCategory {
  id: number;
  name: string;
}

export default function Hero() {
  const [productCategory, setProductCategory] = useState<ProductCategory[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/category/")
      .then((response) => response.json())
      .then((data) => setProductCategory(data));
  }, []);

  return (
    <div className="h-96 mt-11 p-5 flex flex-row">
      <nav className="h-full w-64 bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
        <div className="flex flex-col">
          {productCategory.map((item, index) => (
            <Link key={index} to={`/products/${item.name}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Carousel leftControl={<></>} rightControl={<></>}>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="px-20 bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-row items-center justify-center space-x-4 w-[95%] h-full"
          >
            <img src={item.image} alt={item.product} className="w-1/2 h-3/4" />
            <div className="text-center w-1/2 dark:text-white text-black ">
              <h1 className="font-bold">{item.product}</h1>
              <p className="text-base max-[810px]:hidden">{item.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
