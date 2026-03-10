import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard({
  title,
  description,
  image,
  price,
  originalPrice,
  rating = 5,
  badge,
  onBuyClick,
}) {
  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-4xl bg-cream">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {originalPrice && (
          <div className="absolute top-4 right-4">
            <span className="bg-secondary text-white text-xs font-medium px-3 py-1.5 rounded-full">
              Sale
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating ? "text-primary fill-primary" : "text-gray-300"
              }
            />
          ))}
        </div>

        <h3 className="text-heading-4 font-serif font-semibold text-text-primary mb-2">
          {title}
        </h3>

        <p className="text-text-muted text-body-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        {price && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-text-primary">{price}</span>

            {originalPrice && (
              <span className="text-sm text-text-muted line-through">
                {originalPrice}
              </span>
            )}
          </div>
        )}

        <button
          onClick={onBuyClick}
          className="btn-primary w-full text-sm inline-flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Buy on Amazon
        </button>
      </div>
    </div>
  );
}