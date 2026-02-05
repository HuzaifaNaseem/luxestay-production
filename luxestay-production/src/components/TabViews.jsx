import { Heart, MessageSquare, User, MapPin, Star, Settings, HelpCircle, LogOut } from './Icons';

// Wishlist Tab
export const WishlistView = ({ favorites, properties, onRemoveFavorite }) => {
  const favoritedProperties = properties.filter(p => favorites.includes(p.id));

  if (favoritedProperties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-amber-100 p-6 rounded-full mb-6">
          <Heart className="w-12 h-12 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">No saved properties yet</h2>
        <p className="text-gray-600 text-center max-w-sm">
          Start exploring and tap the heart icon to save your favorite luxury stays
        </p>
      </div>
    );
  }

  return (
    <div className="py-6 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Wishlist</h2>
      <p className="text-gray-600 mb-6">{favoritedProperties.length} saved {favoritedProperties.length === 1 ? 'property' : 'properties'}</p>

      <div className="space-y-4">
        {favoritedProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-28 h-28 object-cover"
            />
            <div className="flex-1 p-3 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{property.title}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {property.location}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-gray-900">${property.price}<span className="text-xs font-normal text-gray-500">/night</span></p>
                <button
                  onClick={() => onRemoveFavorite(property.id)}
                  className="text-red-500 hover:text-red-600 p-1"
                >
                  <Heart className="w-5 h-5" filled={true} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inbox Tab
export const InboxView = () => {
  const messages = [
    { id: 1, host: 'Sarah M.', property: 'Maldives Villa', message: 'Your booking is confirmed! Looking forward...', time: '2h ago', unread: true, avatar: '👩' },
    { id: 2, host: 'James K.', property: 'Paris Apartment', message: 'Thank you for your inquiry. The apartment is...', time: '1d ago', unread: false, avatar: '👨' },
    { id: 3, host: 'LuxeStay Support', property: '', message: 'Welcome to LuxeStay! Start exploring...', time: '3d ago', unread: false, avatar: '🏠' },
  ];

  return (
    <div className="py-6 px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Inbox</h2>
      <p className="text-gray-600 mb-6">Your messages and notifications</p>

      <div className="space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`bg-white rounded-2xl p-4 shadow-md flex gap-3 cursor-pointer hover:shadow-lg transition-all ${msg.unread ? 'border-l-4 border-amber-600' : ''}`}
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              {msg.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className={`font-semibold text-gray-900 ${msg.unread ? 'text-amber-700' : ''}`}>{msg.host}</h3>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              {msg.property && <p className="text-xs text-amber-600 mb-1">{msg.property}</p>}
              <p className="text-sm text-gray-600 truncate">{msg.message}</p>
            </div>
            {msg.unread && <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">This is a demo inbox</p>
      </div>
    </div>
  );
};

// Profile Tab
export const ProfileView = ({ favorites, onBecomeHost }) => {
  const menuItems = [
    { icon: User, label: 'Personal Information', description: 'Update your details' },
    { icon: Heart, label: 'Wishlist', description: `${favorites.length} saved properties` },
    { icon: Settings, label: 'Settings', description: 'App preferences' },
    { icon: HelpCircle, label: 'Help & Support', description: 'Get assistance' },
  ];

  return (
    <div className="py-6 px-4">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div>
            <h2 className="text-xl font-bold">Guest User</h2>
            <p className="text-amber-100 text-sm">Sign in to access all features</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-white text-amber-700 py-2 rounded-full font-semibold hover:bg-amber-50 transition-colors">
          Sign In / Register
        </button>
      </div>

      {/* Become a Host CTA */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 mb-6">
        <h3 className="font-semibold text-gray-900 mb-1">Become a Host</h3>
        <p className="text-sm text-gray-600 mb-3">Earn extra income by sharing your space</p>
        <button
          onClick={onBecomeHost}
          className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-700 transition-colors"
        >
          Learn More
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="w-full bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all text-left"
          >
            <div className="bg-amber-100 p-2 rounded-lg">
              <item.icon className="w-5 h-5 text-amber-700" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <button className="w-full mt-6 py-3 text-red-600 font-medium hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2">
        <LogOut className="w-5 h-5" />
        Log Out
      </button>
    </div>
  );
};

// Helper icons not in main Icons file
const ChevronRight = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
