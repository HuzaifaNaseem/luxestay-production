import { useState } from 'react';
import { X, Home, DollarSign, Shield, Star } from './Icons';

const HostModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    guests: '',
    email: ''
  });

  const benefits = [
    { icon: DollarSign, title: 'Earn Extra Income', description: 'Average hosts earn $1,500/month' },
    { icon: Shield, title: 'Host Protection', description: '$1M liability insurance included' },
    { icon: Star, title: 'Premium Support', description: '24/7 dedicated host support team' },
  ];

  const propertyTypes = [
    { id: 'house', label: 'House', icon: '🏠' },
    { id: 'apartment', label: 'Apartment', icon: '🏢' },
    { id: 'villa', label: 'Villa', icon: '🏡' },
    { id: 'cabin', label: 'Cabin', icon: '🏕️' },
  ];

  const handleSubmit = () => {
    console.log('Host application:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    onClose();
    setStep(1);
    setFormData({ propertyType: '', location: '', guests: '', email: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full animate-fade-in">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-3 rounded-xl">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Become a Host</h2>
                <p className="text-amber-100">Share your space, earn extra income</p>
              </div>
            </div>
          </div>

          {step === 1 && (
            <div className="p-6">
              {/* Benefits */}
              <div className="space-y-4 mb-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-amber-50 transition-colors">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg"
              >
                Get Started
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What type of property?</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {propertyTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({ ...formData, propertyType: type.id })}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.propertyType === type.id
                        ? 'border-amber-600 bg-amber-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{type.icon}</span>
                    <span className="font-medium text-gray-900">{type.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-full font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!formData.propertyType}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Tell us more</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Guests</label>
                  <input
                    type="number"
                    placeholder="How many guests?"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-full font-semibold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.location || !formData.email}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Progress dots */}
          <div className="flex justify-center gap-2 pb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-2 h-2 rounded-full transition-all ${
                  s === step ? 'bg-amber-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostModal;
