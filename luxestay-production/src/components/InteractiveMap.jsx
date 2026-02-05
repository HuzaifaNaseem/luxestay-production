import { useState } from 'react';
import { MapPin, X, Star } from './Icons';

const InteractiveMap = ({ properties, onSelectProperty }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);

  // Simulated map positions for properties (in a real app, these would be lat/lng)
  const getMarkerPosition = (index, total) => {
    // Distribute markers across the map area
    const positions = [
      { top: '20%', left: '30%' },
      { top: '35%', left: '60%' },
      { top: '55%', left: '25%' },
      { top: '45%', left: '75%' },
      { top: '70%', left: '45%' },
      { top: '25%', left: '80%' },
      { top: '60%', left: '65%' },
      { top: '40%', left: '40%' },
    ];
    return positions[index % positions.length];
  };

  return (
    <div className="w-full h-full relative bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 overflow-hidden">
      {/* Map grid lines for visual effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Decorative map elements */}
      <div className="absolute top-10 left-10 w-32 h-20 bg-green-200/50 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-40 h-24 bg-blue-200/50 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-16 bg-green-300/40 rounded-full blur-lg" />

      {/* Property markers */}
      {properties.slice(0, 8).map((property, index) => {
        const position = getMarkerPosition(index, properties.length);
        const isSelected = selectedMarker === property.id;
        const isHovered = hoveredMarker === property.id;

        return (
          <div
            key={property.id}
            className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer z-10"
            style={{ top: position.top, left: position.left }}
            onMouseEnter={() => setHoveredMarker(property.id)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={() => setSelectedMarker(isSelected ? null : property.id)}
          >
            {/* Price tag marker */}
            <div
              className={`px-3 py-1.5 rounded-full font-bold text-sm shadow-lg transition-all duration-200 ${
                isSelected || isHovered
                  ? 'bg-gray-900 text-white scale-110'
                  : 'bg-white text-gray-900 hover:scale-105'
              }`}
            >
              ${property.price}
            </div>

            {/* Marker pointer */}
            <div
              className={`w-3 h-3 mx-auto -mt-1 rotate-45 transition-colors ${
                isSelected || isHovered ? 'bg-gray-900' : 'bg-white'
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />

            {/* Property popup */}
            {isSelected && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl overflow-hidden z-20 animate-fade-in">
                <div className="relative">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-32 object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMarker(null);
                    }}
                    className="absolute top-2 right-2 bg-white/90 p-1 rounded-full hover:bg-white"
                  >
                    <X className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{property.title}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {property.location}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <Star filled={true} className="w-3 h-3 text-amber-500" />
                      <span className="text-xs font-medium">{property.rating}</span>
                    </div>
                    <p className="font-bold text-gray-900">
                      ${property.price}<span className="text-xs font-normal text-gray-500">/night</span>
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProperty?.(property);
                    }}
                    className="w-full mt-2 bg-amber-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
        <p className="text-xs font-semibold text-gray-700 mb-2">Map Legend</p>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-6 h-4 bg-white rounded-full shadow text-center text-[10px] font-bold">$</div>
          <span>Property price/night</span>
        </div>
        <p className="text-[10px] text-gray-400 mt-2">Click markers for details</p>
      </div>

      {/* Zoom controls (decorative) */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg overflow-hidden">
        <button className="p-2 hover:bg-gray-100 border-b border-gray-200 block">
          <span className="text-lg font-bold text-gray-700">+</span>
        </button>
        <button className="p-2 hover:bg-gray-100 block">
          <span className="text-lg font-bold text-gray-700">−</span>
        </button>
      </div>
    </div>
  );
};

export default InteractiveMap;
