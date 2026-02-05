import ImageCarousel from './ImageCarousel';
import { Star, MapPin, Heart, Share, Sparkles } from './Icons';

const PropertyCard = ({ property, index, onFavorite, isFavorited, onBook, onShare }) => {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group opacity-0 animate-fade-in stagger-${index % 6 + 1}`}>
      <div className="relative">
        <ImageCarousel images={property.images} propertyId={property.id} />

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShare?.(property);
            }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110 shadow-lg"
            aria-label="Share property"
          >
            <Share className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(property.id);
            }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110 shadow-lg"
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className="w-4 h-4"
              filled={isFavorited}
              style={{ color: isFavorited ? '#dc2626' : '#374151' }}
            />
          </button>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                {property.title}
              </h3>
              {property.superhost && (
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs px-2.5 py-1 rounded-full font-medium inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  SUPERHOST
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm flex items-center gap-1.5">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{property.location}</span>
            </p>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star filled={true} className="w-4 h-4 text-amber-500" />
          <span className="font-semibold text-gray-900">{property.rating}</span>
          <span className="text-gray-600 text-sm">({property.reviews} reviews)</span>
        </div>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-3">
          {property.amenities.slice(0, 3).map((amenity, idx) => (
            <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">
              {amenity}
            </span>
          ))}
        </div>
        
        {/* Property details */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3 pb-3 border-b border-gray-100">
          <span>{property.guests} guests</span>
          <span>·</span>
          <span>{property.bedrooms} beds</span>
          <span>·</span>
          <span>{property.bathrooms} baths</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">${property.price.toLocaleString()}</span>
            <span className="text-gray-600 ml-1 text-sm">/ night</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBook?.(property);
            }}
            className="btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
