interface CarouselItemProps {
  image?: string;
  product: string;
  description: string;
}

const SliderComponent = ({
  image,
  product,
  description,
}: CarouselItemProps) => {
  return (
    <div className="flex items-center bg-white justify-center h-screen dark:bg-gray-700">
      <img src={image} alt={product} className="w-1/2" />
      <div className="ml-4 text-black dark:text-white text-center">
        <h1 className="text-4xl font-bold">{product}</h1>
        <p className="text-lg">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
