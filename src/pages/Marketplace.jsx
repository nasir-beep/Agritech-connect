import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import ProductCard from "../components/ProductCard";

function Marketplace() {
  const [cart, setCart] = useState([]);
  
  // Sample products
  const products = [
    { id: 1, name: "Maize Seeds", price: 120, category: "Seeds" },
    { id: 2, name: "Organic Fertilizer", price: 250, category: "Fertilizers" },
    { id: 3, name: "Tomato Seedlings", price: 80, category: "Seedlings" },
    { id: 4, name: "Irrigation Kit", price: 450, category: "Equipment" },
    { id: 5, name: "Pest Control Spray", price: 180, category: "Pesticides" },
    { id: 6, name: "Garden Tools Set", price: 350, category: "Tools" },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // Filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Marketplace</h1>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mb-8 p-4 bg-green-50 rounded-lg">
          <p className="text-lg">
            🛒 Cart: <span className="font-bold">{cart.length}</span> items
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No products found in this category.
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Marketplace;