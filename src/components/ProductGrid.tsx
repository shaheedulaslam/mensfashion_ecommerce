// components/ProductGrid.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  featured: boolean;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-3 left-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Add to Cart */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
                <ShoppingBag className="w-4 h-4" />
                Quick Add
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">(4.0)</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold">₹{product.price}</span>
                {product.price > 2000 && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹{Math.round(product.price * 1.2)}
                  </span>
                )}
              </div>
              
              {/* Color Options */}
              <div className="flex gap-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-gray-300"
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'white' ? '#fff' : 
                                    color.toLowerCase() === 'black' ? '#000' :
                                    color.toLowerCase() === 'navy' ? '#000080' :
                                    color.toLowerCase() === 'gray' ? '#808080' :
                                    color.toLowerCase() === 'blue' ? '#0000ff' :
                                    color.toLowerCase() === 'red' ? '#ff0000' :
                                    color.toLowerCase() === 'green' ? '#008000' :
                                    color.toLowerCase() === 'brown' ? '#8b4513' :
                                    color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                    color.toLowerCase() === 'olive' ? '#808000' :
                                    color.toLowerCase() === 'maroon' ? '#800000' :
                                    color.toLowerCase() === 'burgundy' ? '#800020' :
                                    color.toLowerCase() === 'charcoal' ? '#36454f' :
                                    color.toLowerCase() === 'khaki' ? '#f0e68c' : '#ccc'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-xs border border-gray-300 px-2 py-1 rounded"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;