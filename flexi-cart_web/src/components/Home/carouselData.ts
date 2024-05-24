import { expresso, fitness_tracker, leather_laptop_bag, trendy_sneakers, wireless_headphones } from "../../assets/carousel_images";


interface CarouselItem {
    image: string,
    product: string;
    description: string;
}

export const carouselData: CarouselItem[] = [
    {
        product: "Smart Fitness Tracker",
        description:
            "Elevate workouts with our Smart Fitness Tracker. Stylish design, real-time monitoring.",
        image: fitness_tracker
    },
    {
        product: "Stylish Leather Laptop Bag",
        description:
            "Upgrade your professional look with our Stylish Leather Laptop Bag. Fashion meets functionality.",
        image: leather_laptop_bag
    },
    {
        product: "Wireless Noise-Canceling Headphones",
        description:
            "Immerse in superior sound with our Wireless Noise-Canceling Headphones. Escape the noise, embrace the music.",
        image: wireless_headphones
    },
    {
        product: "Trendy Sneakers for Every Occasion",
        description:
            "Step out in style with our Trendy Sneakers. Comfort and fashion effortlessly blended.",
        image: trendy_sneakers
    },
    {
        product: "Professional Espresso Machine",
        description:
            "Start your day right with our Professional Espresso Machine. Barista-quality coffee at home.",
        image: expresso
    },
];

