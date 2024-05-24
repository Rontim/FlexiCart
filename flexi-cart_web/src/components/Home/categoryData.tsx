import { IoShirt, IoPhonePortraitOutline } from "react-icons/io5";
import {
  MdChair,
  MdOutlineSportsSoccer,
  MdLibraryBooks,
  MdOutlineSmartToy,
  MdPets,
  MdOutlineMore,
} from "react-icons/md";
import { GiLipstick, GiFruitBowl } from "react-icons/gi";
import { FaCar, FaHeartbeat } from "react-icons/fa";
import {
  clothing_and_fashion,
  electronics,
  automotive,
  beauty_and_personal_care,
  books_and_stationary,
  groceries,
  health_and_fitness,
  home_and_furniture,
  other,
  sports_and_outdoor,
  toys_and_games,
  pets_supply,
} from "../../assets/categoryImages";

export interface ProductCategory {
  id: number;
  name: string;
  slug?: string;
  icon?: JSX.Element;
  image?: string;
}

export const categoryData: ProductCategory[] = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    icon: (
      <IoPhonePortraitOutline className="w-5 h-5 mr-1 text-gray-800 text-sm dark:text-white" />
    ),
    image: electronics,
  },
  {
    id: 2,
    name: "Clothing & Fashion",
    slug: "clothing-and-fashion",
    icon: (
      <IoShirt className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: clothing_and_fashion,
  },
  {
    id: 3,
    name: "Home & Furniture",
    slug: "home-and-furniture",
    icon: (
      <MdChair className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: home_and_furniture,
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    slug: "beauty-and-personal-care",
    icon: (
      <GiLipstick className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: beauty_and_personal_care,
  },
  {
    id: 5,
    name: "Sports & Outdoor",
    slug: "sports-and-outdoor",
    icon: (
      <MdOutlineSportsSoccer className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: sports_and_outdoor,
  },
  {
    id: 6,
    name: "Books & Stationery",
    slug: "books-and-stationery",
    icon: (
      <MdLibraryBooks className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: books_and_stationary,
  },

  {
    id: 7,
    name: "Automotive",
    slug: "automotive",
    icon: (
      <FaCar className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: automotive,
  },
  {
    id: 8,
    name: "Toys & Games",
    slug: "toys-and-games",
    icon: (
      <MdOutlineSmartToy className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: toys_and_games,
  },
  {
    id: 9,
    name: "Grocery",
    slug: "grocery",
    icon: (
      <GiFruitBowl className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: groceries,
  },
  {
    id: 10,
    name: "Health & Fitness",
    slug: "health-and-fitness",
    icon: (
      <FaHeartbeat className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: health_and_fitness,
  },
  {
    id: 11,
    name: "Pet Supplies",
    slug: "pet-supplies",
    icon: (
      <MdPets className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: pets_supply,
  },
  {
    id: 12,
    name: "Others",
    slug: "others",
    icon: (
      <MdOutlineMore className="w-5 h-5 mr-1 text-gray-800 dark:text-white text-sm" />
    ),
    image: other,
  },
];
