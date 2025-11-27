// client/lib/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 139999,
    image:
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 324,
    category: "Mobiles",
  },
  {
    id: "2",
    name: "MacBook Pro 16",
    price: 199999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 256,
    category: "Laptops",
  },
  {
    id: "3",
    name: "Apple Watch Series 9",
    price: 45999,
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 178,
    category: "Smart Watches",
  },
  {
    id: "4",
    name: "AirPods Pro (2nd Gen)",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 642,
    category: "Earbuds",
  },
  {
    id: "5",
    name: "Samsung Galaxy S24 Ultra",
    price: 129999,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 301,
    category: "Mobiles",
  },
  {
    id: "6",
    name: "Dell XPS 15",
    price: 159999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 211,
    category: "Laptops",
  },
  {
    id: "7",
    name: "Noise ColorFit Pro 4",
    price: 5999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 432,
    category: "Smart Watches",
  },
  {
    id: "8",
    name: "OnePlus Watch 2",
    price: 19999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 87,
    category: "Smart Watches",
  },
  {
    id: "9",
    name: "Sony WH-1000XM5",
    price: 29999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 523,
    category: "TV & Audio",
  },
  {
    id: "10",
    name: "Realme 12 Pro",
    price: 34999,
    image:
      "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 267,
    category: "Mobiles",
  },
  {
    id: "11",
    name: "HP Pavilion 15",
    price: 69999,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 112,
    category: "Laptops",
  },
  {
    id: "12",
    name: "Boat Airdopes 131",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 3.5,
    reviews: 891,
    category: "Earbuds",
  },
];

export const getProductById = (id: string) =>
  allProducts.find((p) => p.id === id);
