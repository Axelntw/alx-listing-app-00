import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '../../interfaces';
import { CURRENCY_SYMBOL } from '../../constants';
import Card from './Card';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, address, rating, price, image, discount } = property;
  
  return (
    <Card>
      <div className="relative">
        {/* Property Image */}
        <div className="relative h-64 w-full">
          {/* Using a div with background image as fallback for external URLs */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${image})` }}
          />
          
          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              {discount}% OFF
            </div>
          )}
        </div>
        
        {/* Property Details */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg truncate">{name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{rating.toFixed(2)}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-2">
            {address.city}, {address.country}
          </p>
          
          <p className="font-semibold text-lg">
            {CURRENCY_SYMBOL}{price.toLocaleString()} <span className="text-sm text-gray-500 font-normal">/ night</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;