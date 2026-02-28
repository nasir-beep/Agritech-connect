import { useState } from "react";
import Navbar from "../services/Navbar";
import Footer from "../services/Footer";
import ProductCard from "../components/ProductCard";

function Marketplace() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const products = [
    { id: 1, name: "Maize Seeds", price: 120, category: "Seeds" },
    { id: 2, name: "Organic Fertilizer", price: 250, category: "Fertilizers" },
    { id: 3, name: "Tomato Seedlings", price: 80, category: "Seedlings" },
    { id: 4, name: "Irrigation Kit", price: 450, category: "Equipment" },
    { id: 5, name: "Pest Control Spray", price: 180, category: "Pesticides" },
    { id: 6, name: "Garden Tools Set", price: 350, category: "Tools" },
  ];

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);
  const addToCart = (product) => { setCart([...cart, product]); alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-8">Marketplace</h1>

        <div className="mb-4 md:mb-8 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex flex-nowrap md:flex-wrap gap-2 min-w-max md:min-w-0">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base whitespace-nowrap ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"}`}>{category}</button>
            ))}
          </div>
        </div>

        <div className="mb-4 md:mb-8 p-3 md:p-4 bg-green-50 rounded-lg">
          <p className="text-base md:text-lg">Cart: <span className="font-bold">{cart.length}</span> items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} onAddToCart={() => addToCart(product)}/>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 py-12">No products found in this category.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Marketplace;