
export interface product {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    slug: string;
    category: {
        name: string;
        parent: {
            name: string;
        };
    };
}

