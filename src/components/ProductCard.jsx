function ProductCard({ name, price, onAddToCart }) {
  return (
    <div className="card p-4 md:p-6">
      <div className="h-32 md:h-40 bg-gray-200 rounded-lg mb-3 md:mb-4 flex items-center justify-center">
        <span className="text-3xl md:text-4x1">🌾</span>
      </div>
      <h3 className="font-bold text-base md:text-lg mb-1 truncate">{name}</h3>
      <p className="text-primary font-bold text-lg md:text-xl mb-3 md:mb-4">R {price}</p>
      <button onClick={onAddToCart} className="btn-primary w-full text-sm md:text-base py-2 md:py-2.5">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;