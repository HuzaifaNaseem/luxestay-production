import { Home, Search, User, Menu, X, Filter } from './Icons';

const Header = ({
  searchOpen,
  setSearchOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
  guestCount,
  favorites,
  isMobile,
  onBecomeHost
}) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-slide-in">
            <div className="bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 p-3 rounded-xl shadow-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-900 bg-clip-text text-transparent tracking-tight">
                LuxeStay
              </h1>
              <p className="text-xs text-gray-600 -mt-1 font-medium">Luxury Escapes</p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div 
              className="bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <div className="flex items-center divide-x divide-gray-200">
                <div className="flex-1 px-6 py-3 hover:bg-gray-50 transition-colors">
                  <p className="text-xs font-semibold text-gray-900 mb-0.5">Location</p>
                  <p className="text-sm text-gray-500">Where to?</p>
                </div>
                <div className="flex-1 px-6 py-3 hover:bg-gray-50 transition-colors">
                  <p className="text-xs font-semibold text-gray-900 mb-0.5">Check In</p>
                  <p className="text-sm text-gray-500">Add dates</p>
                </div>
                <div className="flex-1 px-6 py-3 hover:bg-gray-50 transition-colors">
                  <p className="text-xs font-semibold text-gray-900 mb-0.5">Guests</p>
                  <p className="text-sm text-gray-500">{guestCount} guests</p>
                </div>
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-3 m-2 rounded-full hover:from-amber-700 hover:to-amber-800 transition-all hover:scale-105">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onBecomeHost}
              className="text-gray-700 hover:text-amber-700 font-medium px-4 py-2 rounded-full hover:bg-amber-50 transition-all"
            >
              Become a Host
            </button>
            <button className="relative text-gray-700 hover:text-amber-700 p-2 rounded-full hover:bg-gray-100 transition-all">
              <User className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMobile && (
        <div className="px-4 pb-4">
          <button 
            className="w-full bg-white border border-gray-200 rounded-full shadow-md px-4 py-3 flex items-center gap-3 hover:shadow-lg transition-all"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5 text-gray-500" />
            <div className="text-left flex-1">
              <p className="text-sm font-semibold text-gray-900">Where to?</p>
              <p className="text-xs text-gray-500">Anywhere · Any week · {guestCount} guests</p>
            </div>
            <Filter className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
