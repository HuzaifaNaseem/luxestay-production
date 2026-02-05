import { useState } from 'react';
import { X, Copy, Facebook, Twitter, Mail, Check } from './Icons';

const SharePanel = ({ isOpen, onClose, property }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !property) return null;

  const shareUrl = `https://luxestay.com/property/${property.id}`;
  const shareText = `Check out this amazing property: ${property.title} in ${property.location}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      onClick: () => window.location.href = `mailto:?subject=${encodeURIComponent(`Check out ${property.title}`)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative min-h-screen flex items-end sm:items-center justify-center">
        <div className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Share this property</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Property preview */}
          <div className="p-4">
            <div className="flex gap-4 bg-gray-50 rounded-xl p-3">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{property.title}</h3>
                <p className="text-sm text-gray-500">{property.location}</p>
                <p className="text-sm font-semibold text-amber-600 mt-1">${property.price}/night</p>
              </div>
            </div>
          </div>

          {/* Share options */}
          <div className="px-4 pb-4">
            <p className="text-sm font-medium text-gray-700 mb-3">Share via</p>
            <div className="flex gap-3">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.onClick}
                  className={`flex-1 ${option.color} text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2`}
                >
                  <option.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{option.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Copy link */}
          <div className="px-4 pb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Or copy link</p>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-600 truncate">
                {shareUrl}
              </div>
              <button
                onClick={handleCopy}
                className={`px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-amber-600 text-white hover:bg-amber-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePanel;
