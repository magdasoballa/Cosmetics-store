export interface Product {
    id: number;
    brand: string;
    name: string;
    price: string;
    price_sign: string;
    currency: string;
    image_link: string;
    description: string;
    product_colors: Color[];
    rating: number;
    category: string;
    product_type: string;
    tag_list: [string]
}

interface Color {
    hex_value: string,
    colour_name: string
}