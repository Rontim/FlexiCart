import { Carousel } from "flowbite-react";
import { carouselData } from "./carouselData";
// import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categoryData, type ProductCategory } from "./categoryData";

export default function Hero() {
  const [productCategory, setProductCategory] = useState<ProductCategory[]>([]);

  useEffect(() => {
    setProductCategory(categoryData);
  }, []);

  return (
    <div className="h-96 mt-14 p-5 flex flex-row gap-x-5">
      <nav className="h-full w-1/5 bg-gray-50 dark:bg-gray-800 rounded-xl pl-3 no-scrollbar overflow-scroll overflow-x-hidden">
        <div className="flex flex-col overflow-hidden">
          {productCategory.map((item, index) => (
            <div>
              <Link
                key={index}
                to={`/products/${item.slug}`}
                className="align-middle items-center space-x-2 flex flex-row mt-2 text-sm text-gray-800 dark:text-white hover:text-blue-500"
              >
                {item.icon && item.icon}
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div className="box-border overflow-hidden w-3/5 h-full">
        <Carousel leftControl={<></>} rightControl={<></>}>
          {carouselData.map((item, index) => (
            <div
              key={index}
              className="px-20 w-full h-full bg-gray-50 dark:bg-gray-800 rounded-lg flex flex-row items-center justify-center space-x-4"
            >
              <img
                src={item.image}
                alt={item.product}
                className="w-1/2 h-3/4"
              />
              <div className="text-center w-1/2 dark:text-white text-black ">
                <h1 className="font-bold">{item.product}</h1>
                <p className="text-base max-[810px]:hidden">
                  {item.description}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
