import { Carousel } from "flowbite-react";
import { carouselData } from "./carouselData";

export default function Hero() {
  return (
    <div className="h-80">
      <Carousel>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="px-20 flex flex-row items-center justify-center space-x-4"
          >
            <img
              src={item.image}
              alt={item.product}
              className="h-1/4 shadow"
              height={"25%"}
              width={"25%"}
            />
            <div className="text-center w-1/3 dark:text-white text-black ">
              <h1 className="font-bold">{item.product}</h1>
              <p className="text-base">{item.description}</p>
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
