export const properties = [
  {
    id: 1,
    title: "Oceanfront Villa Serenity",
    location: "Malibu, California",
    price: 2500,
    rating: 4.98,
    reviews: 127,
    superhost: true,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 5,
    amenities: ["Ocean View", "Private Pool", "WiFi", "Premium"],
    category: "beachfront"
  },
  {
    id: 2,
    title: "Mountain Retreat Chalet",
    location: "Aspen, Colorado",
    price: 3200,
    rating: 5.0,
    reviews: 94,
    superhost: true,
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
    ],
    guests: 10,
    bedrooms: 5,
    bathrooms: 6,
    amenities: ["Mountain View", "Hot Tub", "WiFi", "Fireplace"],
    category: "mountain"
  },
  {
    id: 3,
    title: "Tuscan Villa Estate",
    location: "Tuscany, Italy",
    price: 4500,
    rating: 4.96,
    reviews: 156,
    superhost: true,
    images: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
    ],
    guests: 12,
    bedrooms: 6,
    bathrooms: 7,
    amenities: ["Vineyard", "Chef Kitchen", "WiFi", "Garden"],
    category: "countryside"
  },
  {
    id: 4,
    title: "Beachfront Paradise Villa",
    location: "Santorini, Greece",
    price: 3800,
    rating: 4.99,
    reviews: 203,
    superhost: true,
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
    ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 4,
    amenities: ["Beach Access", "Infinity Pool", "WiFi", "Sunset View"],
    category: "islands"
  },
  {
    id: 5,
    title: "Modern Skyline Penthouse",
    location: "Dubai, UAE",
    price: 5200,
    rating: 5.0,
    reviews: 89,
    superhost: true,
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 5,
    amenities: ["City View", "Rooftop", "WiFi", "Concierge"],
    category: "city"
  },
  {
    id: 6,
    title: "Tropical Island Escape",
    location: "Bali, Indonesia",
    price: 2800,
    rating: 4.97,
    reviews: 178,
    superhost: true,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=800&q=80"
    ],
    guests: 10,
    bedrooms: 5,
    bathrooms: 6,
    amenities: ["Jungle View", "Private Pool", "WiFi", "Spa"],
    category: "islands"
  }
];

export const filterCategories = [
  { id: 'all', label: 'All Homes', icon: '🏠' },
  { id: 'beachfront', label: 'Beachfront', icon: '🏖️' },
  { id: 'mountain', label: 'Mountain', icon: '⛰️' },
  { id: 'countryside', label: 'Countryside', icon: '🌾' },
  { id: 'city', label: 'City', icon: '🏙️' },
  { id: 'islands', label: 'Islands', icon: '🏝️' }
];
