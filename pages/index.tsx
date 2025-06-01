import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Pill from '../components/common/Pill';
import PropertyCard from '../components/common/PropertyCard';
import Layout from '../components/layout/Layout';
import { SAMPLE_LISTINGS, PROPERTYLISTINGSAMPLE, FILTER_CATEGORIES, HERO_IMAGE } from '../constants';
import { PropertyProps } from '../interfaces';

const Home: NextPage = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };
  
  // Filter properties based on active filters
  const filteredProperties = activeFilters.length > 0 
    ? PROPERTYLISTINGSAMPLE.filter(property => 
        property.category.some(cat => activeFilters.includes(cat))
      )
    : PROPERTYLISTINGSAMPLE;
  
  return (
    <Layout>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Airbnb clone listing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="h-[500px] bg-cover bg-center" 
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Explore places</h2>
          <div className="flex flex-wrap">
            {FILTER_CATEGORIES.map((filter) => (
              <Pill 
                key={filter}
                label={filter}
                isActive={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              />
            ))}
          </div>
        </div>
        
        {/* Listing Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
        
        {/* Original Sample Listings Section - Keeping for reference */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_LISTINGS.map((listing) => (
              <Card key={listing.id}>
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p>Listing Image Placeholder</p>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-lg">{listing.title}</h2>
                  <p className="text-gray-600">{listing.location}</p>
                  <p className="font-semibold mt-2">${listing.price} / night</p>
                  <div className="mt-4">
                    <Button>View Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;