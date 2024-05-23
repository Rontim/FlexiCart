import { categoryData } from "../categoryData";

const Category = () => {
  return (
    <div className="box-border relative">
      <div className="py-3 px-4  mb-4 flex flex-row overflow-x-auto overflow-y-hidden no-scrollbar gap-x-5 bg-gray-50 dark:bg-gray-800 rounded-full">
        {categoryData.map((item) => {
          return (
            <div className="flex flex-col items-center text-center justify-center w-1/5 ">
              <div
                className={`w-24 h-24 text-black flex border-1 border-red-600 box-border items-center justify-center text-md bg-gray-200 dark:bg-gray-dark rounded-full`}
              >
                <img
                  className="w-full h-full object-cover rounded-full border-1 border-red-600"
                  src={item.image}
                  alt="product image"
                />
              </div>
              <div className="text-center text-sm mt-1 truncate w-32">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Category;
