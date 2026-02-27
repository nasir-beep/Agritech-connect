function ProductCard({ name, price, onAddToCart }) {
  return (
    <div className="card">
      <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-4xl">🌾</span>
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-primary font-bold text-xl mb-4">R {price}</p>
      <button 
        onClick={onAddToCart}
        className="btn-primary w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;