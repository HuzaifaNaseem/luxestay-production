import { useState, useEffect } from 'react';
import Header from './components/Header';
import PropertyCard from './components/PropertyCard';
import MobileNav from './components/MobileNav';
import SearchPanel from './components/SearchPanel';
import HostModal from './components/HostModal';
import BookingModal from './components/BookingModal';
import SharePanel from './components/SharePanel';
import { WishlistView, InboxView, ProfileView } from './components/TabViews';
import InteractiveMap from './components/InteractiveMap';
import { Filter } from './components/Icons';
import { properties, filterCategories } from './data/properties';
import './index.css';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('explore');
  const [isMobile, setIsMobile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [hostModalOpen, setHostModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProperties = properties.filter(property => {
    if (selectedFilter === 'all') return true;
    return property.category === selectedFilter;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-white">
      <Header
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        guestCount={guestCount}
        favorites={favorites}
        isMobile={isMobile}
        onBecomeHost={() => setHostModalOpen(true)}
      />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Listings Section */}
        <div className="w-full md:w-1/2 lg:w-3/5 overflow-y-auto pb-24 md:pb-8 custom-scrollbar">
          {/* Mobile Tab Content */}
          {isMobile && activeTab === 'wishlist' && (
            <WishlistView
              favorites={favorites}
              properties={properties}
              onRemoveFavorite={toggleFavorite}
            />
          )}

          {isMobile && activeTab === 'inbox' && (
            <InboxView />
          )}

          {isMobile && activeTab === 'profile' && (
            <ProfileView
              favorites={favorites}
              onBecomeHost={() => setHostModalOpen(true)}
            />
          )}

          {/* Explore Tab (default) - Property Listings */}
          {(!isMobile || activeTab === 'explore') && (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Luxury Vacation Rentals
                </h2>
                <p className="text-gray-600 text-lg">
                  Discover {filteredProperties.length} extraordinary homes worldwide
                </p>
              </div>

              {/* Enhanced Filters */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                  {filterCategories.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-5 py-3 rounded-full font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                        selectedFilter === filter.id
                          ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-600 hover:text-amber-700 hover:shadow-md'
                      }`}
                    >
                      <span>{filter.icon}</span>
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties available
                  </p>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-700 font-medium"
                  >
                    <Filter className="w-4 h-4" />
                    More Filters
                  </button>
                </div>
              </div>

              {/* Property Grid */}
              <div className="grid grid-cols-1 gap-8">
                {filteredProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    index={index}
                    onFavorite={toggleFavorite}
                    isFavorited={favorites.includes(property.id)}
                    onBook={(prop) => {
                      setSelectedProperty(prop);
                      setBookingModalOpen(true);
                    }}
                    onShare={(prop) => {
                      setSelectedProperty(prop);
                      setShareModalOpen(true);
                    }}
                  />
                ))}
              </div>

              {/* No results */}
              {filteredProperties.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">😕</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className="btn-primary"
                  >
                    View All Properties
                  </button>
                </div>
              )}

              {/* Footer */}
              <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-500 text-sm">
                  Created by <span className="font-semibold text-amber-700">Huzaifa Naseem</span>
                </p>
              </footer>
            </div>
          )}
        </div>

        {/* Interactive Map Section - Desktop Only */}
        <div className="hidden md:block md:w-1/2 lg:w-2/5 sticky top-20 h-[calc(100vh-80px)]">
          <InteractiveMap
            properties={filteredProperties}
            onSelectProperty={(prop) => {
              setSelectedProperty(prop);
              setBookingModalOpen(true);
            }}
          />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <MobileNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          favorites={favorites}
        />
      )}

      {/* Search Panel */}
      <SearchPanel
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        guestCount={guestCount}
        setGuestCount={setGuestCount}
        onSearch={(searchParams) => {
          console.log('Search params:', searchParams);
          // Filter logic can be added here
        }}
      />

      {/* Host Modal */}
      <HostModal
        isOpen={hostModalOpen}
        onClose={() => setHostModalOpen(false)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedProperty(null);
        }}
        property={selectedProperty}
      />

      {/* Share Panel */}
      <SharePanel
        isOpen={shareModalOpen}
        onClose={() => {
          setShareModalOpen(false);
          setSelectedProperty(null);
        }}
        property={selectedProperty}
      />
    </div>
  );
}

export default App;
