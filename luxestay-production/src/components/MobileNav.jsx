import { Search, Heart, MessageSquare, User } from './Icons';

const MobileNav = ({ activeTab, setActiveTab, favorites }) => {
  const navItems = [
    { icon: Search, label: 'Explore', id: 'explore' },
    { icon: Heart, label: 'Wishlist', id: 'wishlist', badge: favorites.length },
    { icon: MessageSquare, label: 'Inbox', id: 'inbox' },
    { icon: User, label: 'Profile', id: 'profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 md:hidden">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center gap-1 transition-all relative ${
              activeTab === item.id
                ? 'text-amber-700'
                : 'text-gray-500'
            }`}
            aria-label={item.label}
          >
            <div className="relative">
              <item.icon className={`w-6 h-6 ${activeTab === item.id ? 'scale-110' : ''}`} />
              {item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
            {activeTab === item.id && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-700 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
