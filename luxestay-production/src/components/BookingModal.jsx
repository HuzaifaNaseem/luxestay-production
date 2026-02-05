import { useState } from 'react';
import { X, Calendar, Users, Star, MapPin, Check, Minus, Plus } from './Icons';

const BookingModal = ({ isOpen, onClose, property }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [step, setStep] = useState(1);

  if (!isOpen || !property) return null;

  const nights = checkIn && checkOut
    ? Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
    : 0;

  const subtotal = property.price * nights;
  const cleaningFee = 150;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  const handleConfirm = () => {
    if (step === 1) {
      setStep(2);
    } else {
      alert(`Booking confirmed for ${property.title}!\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nTotal: $${total.toLocaleString()}`);
      onClose();
      setStep(1);
      setCheckIn('');
      setCheckOut('');
      setGuests(2);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full animate-fade-in">
          {/* Header with property image */}
          <div className="relative h-40">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">{property.title}</h2>
              <p className="text-sm text-white/80 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {property.location}
              </p>
            </div>
          </div>

          {/* Price and rating */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <span className="text-2xl font-bold text-gray-900">${property.price}</span>
              <span className="text-gray-600"> / night</span>
            </div>
            <div className="flex items-center gap-1">
              <Star filled={true} className="w-4 h-4 text-amber-500" />
              <span className="font-semibold">{property.rating}</span>
              <span className="text-gray-500">({property.reviews})</span>
            </div>
          </div>

          {step === 1 && (
            <div className="p-4 space-y-4">
              {/* Dates */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border-2 border-gray-200 focus-within:border-amber-600 transition-colors">
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Check In</label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-gray-900 font-medium bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="p-3 rounded-xl border-2 border-gray-200 focus-within:border-amber-600 transition-colors">
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Check Out</label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="w-full text-gray-900 font-medium bg-transparent outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="p-3 rounded-xl border-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-600" />
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Guests</p>
                      <p className="text-gray-900 font-medium">{guests} {guests === 1 ? 'guest' : 'guests'}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors disabled:opacity-50"
                      disabled={guests <= 1}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center font-semibold">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(property.guests, guests + 1))}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-amber-600 transition-colors disabled:opacity-50"
                      disabled={guests >= property.guests}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Max {property.guests} guests</p>
              </div>

              {/* Price breakdown */}
              {nights > 0 && (
                <div className="bg-amber-50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">${property.price} x {nights} nights</span>
                    <span className="text-gray-900">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cleaning fee</span>
                    <span className="text-gray-900">${cleaningFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service fee</span>
                    <span className="text-gray-900">${serviceFee}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-amber-200">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="p-4 space-y-4">
              <h3 className="font-semibold text-gray-900">Confirm your booking</h3>

              <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Dates</p>
                    <p className="font-medium">{checkIn} → {checkOut}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-medium">{guests} {guests === 1 ? 'guest' : 'guests'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p>Free cancellation for 48 hours after booking</p>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 flex gap-3">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded-full font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
              >
                Back
              </button>
            )}
            <button
              onClick={handleConfirm}
              disabled={!checkIn || !checkOut || nights <= 0}
              className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {step === 1 ? 'Reserve' : 'Confirm Booking'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
