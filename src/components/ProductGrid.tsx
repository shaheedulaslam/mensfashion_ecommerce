"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  colors: string[];
  inventory: number;
  featured: boolean;
  active: boolean;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      img: product.images[0] || '/images/placeholder.jpg',
      tags: product.tags
    });
  };

  const getColorValue = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'white': '#fff',
      'black': '#000',
      'navy': '#000080',
      'gray': '#808080',
      'grey': '#808080',
      'blue': '#0000ff',
      'red': '#ff0000',
      'green': '#008000',
      'brown': '#8b4513',
      'beige': '#f5f5dc',
      'olive': '#808000',
      'maroon': '#800000',
      'burgundy': '#800020',
      'charcoal': '#36454f',
      'khaki': '#f0e68c',
      'pink': '#ffc0cb',
      'purple': '#800080',
      'yellow': '#ffff00',
      'orange': '#ffa500',
      'teal': '#008080',
      'cyan': '#00ffff',
      'lavender': '#e6e6fa',
      'cream': '#fffdd0',
      'mustard': '#ffdb58',
      'wine': '#722f37',
      'forest green': '#228b22',
      'sky blue': '#87ceeb',
      'royal blue': '#4169e1',
      'midnight blue': '#191970',
      'light blue': '#add8e6'
    };

    return colorMap[color.toLowerCase()] || '#ccc';
  };

  // Filter out inactive products
  const activeProducts = products.filter(product => product.active);

  if (activeProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🛍️</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">Check back later for new arrivals.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {activeProducts.map((product, index) => (
        <motion.div
          key={product._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={product.images[0] || '/images/placeholder.jpg'}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Featured Badge */}
            {product.featured && (
              <div className="absolute top-3 left-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            )}

            {/* Stock Status */}
            {product.inventory === 0 && (
              <div className="absolute top-3 right-3">
                <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Out of Stock
                </span>
              </div>
            )}

            {product.inventory > 0 && product.inventory <= 10 && (
              <div className="absolute top-3 right-3">
                <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Low Stock
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                title="Add to Wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Add to Cart */}
            {product.inventory > 0 && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Quick Add
                </button>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>
            
            {/* Rating - You can make this dynamic later */}
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
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">₹{product.price}</span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                    </span>
                  </>
                )}
              </div>
              
              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex gap-1">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-full border border-gray-300"
                      style={{ 
                        backgroundColor: getColorValue(color)
                      }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 3 && (
                    <div className="w-3 h-3 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                      <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mb-3">
                <div className="flex flex-wrap gap-1">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="text-xs border border-gray-300 px-2 py-1 rounded hover:border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button (Mobile) */}
            {product.inventory > 0 && (
              <button 
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4 bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors lg:hidden"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart - ₹{product.price}
              </button>
            )}

            {product.inventory === 0 && (
              <button 
                disabled
                className="w-full mt-4 bg-gray-300 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;