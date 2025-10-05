// app/collections/casual-pants/page.tsx
"use client";

import React from 'react';
import CollectionLayout from '@/components/CollectionLayout';
import ProductGrid from '@/components/ProductGrid';


const casualPants = [
  {
    id: 1,
    name: "Classic Chino Pants",
    price: 1899,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=80",
    description: "Versatile chino pants",
    sizes: ["30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive"],
    featured: true
  },
  {
    id: 2,
    name: "Cargo Casual Trousers",
    price: 2199,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=80",
    description: "Utility cargo pants",
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Black", "Gray"],
    featured: false
  },
  {
    id: 3,
    name: "Linen Blend Casual Pants",
    price: 2499,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=500&auto=format&fit=crop&q=80",
    description: "Breathable linen blend",
    sizes: ["30", "32", "34"],
    colors: ["White", "Beige", "Blue"],
    featured: true
  },
  {
    id: 4,
    name: "Denim Jeans - Classic",
    price: 2299,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=80",
    description: "Classic fit denim",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    featured: false
  },
  {
    id: 5,
    name: "Jogger Style Pants",
    price: 1799,
    image: "https://images.unsplash.com/photo-1506629905607-e48b0e67d879?w=500&auto=format&fit=crop&q=80",
    description: "Comfortable jogger design",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Navy", "Black"],
    featured: false
  },
  {
    id: 6,
    name: "Corduroy Casual Pants",
    price: 2699,
    image: "https://images.unsplash.com/photo-1584370848018-ea1c6f323c6e?w=500&auto=format&fit=crop&q=80",
    description: "Vintage corduroy fabric",
    sizes: ["30", "32", "34"],
    colors: ["Brown", "Green", "Beige"],
    featured: false
  }
];

export default function CasualPantsCollection() {
  return (
    <CollectionLayout
      title="Casual Pants"
      description="Relaxed fit pants for weekend wear and casual outings. Comfort meets style."
    >
      <ProductGrid products={casualPants} />
    </CollectionLayout>
  );
}