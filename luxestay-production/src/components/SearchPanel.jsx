import { useState } from 'react';
import { X, MapPin, Calendar, Users, Search, Minus, Plus } from './Icons';

const SearchPanel = ({
  isOpen,
  onClose,
  guestCount,
  setGuestCount,
  onSearch
}) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [activeSection, setActiveSection] = useState('location');

  const popularDestinations = [
    { name: 'Maldives', country: 'Island Paradise', icon: '🏝️' },
    { name: 'Paris', country: 'France', icon: '🗼' },
    { name: 'Santorini', country: 'Greece', icon: '🏛️' },
    { name: 'Bali', country: 'Indonesia', icon: '🌴' },
    { name: 'Dubai', country: 'UAE', icon: '🏙️' },
    { name: 'Tokyo', country: 'Japan', icon: '🗾' },
  ];

  const handleSearch = () => {
    onSearch?.({ location, checkIn, checkOut, guests: guestCount });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative min-h-screen md:min-h-0 md:mt-24 md:mx-auto md:max-w-3xl">
        <div className="bg-white md:rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Search Properties</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Search Sections */}
          <div className="p-4 space-y-4">
            {/* Location */}
            <div
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                activeSection === 'location'
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveSection('location')}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Location</p>
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-gray-900 font-medium bg-transparent outline-none placeholder-gray-400 mt-1"
                  />
                </div>
              </div>

              {/* Popular Destinations */}
              {activeSection === 'location' && (
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Popular Destinations</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {popularDestinations.map((dest) => (
                      <button
                        key={dest.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLocation(`${dest.name}, ${dest.country}`);
                        }}
                        className="flex items-center gap-2 p-2 rounded-xl hover:bg-amber-100 transition-colors text-left"
                      >
                        <span className="text-2xl">{dest.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{dest.name}</p>
                          <p className="text-xs text-gray-500">{dest.country}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeSection === 'checkin'
                    ? 'border-amber-600 bg-amber-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveSection('checkin')}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Check In</p>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-gray-900 font-medium bg-transparent outline-none mt-1"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  activeSection === 'checkout'
                    ? 'border-amber-600 bg-amber-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveSection('checkout')}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Check Out</p>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-gray-900 font-medium bg-transparent outline-none mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Guests */}
            <div
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                activeSection === 'guests'
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setActiveSection('guests')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Guests</p>
                    <p className="text-gray-900 font-medium mt-1">{guestCount} {guestCount === 1 ? 'guest' : 'guests'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuestCount(Math.max(1, guestCount - 1));
                    }}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors disabled:opacity-50"
                    disabled={guestCount <= 1}
                  >
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="w-8 text-center font-semibold text-gray-900">{guestCount}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setGuestCount(Math.min(16, guestCount + 1));
                    }}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors disabled:opacity-50"
                    disabled={guestCount >= 16}
                  >
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={() => {
                setLocation('');
                setCheckIn('');
                setCheckOut('');
                setGuestCount(2);
              }}
              className="text-gray-700 font-medium hover:text-gray-900 underline"
            >
              Clear all
            </button>
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
