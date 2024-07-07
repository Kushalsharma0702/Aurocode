'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import PricingBox from './PricingBox';

interface Service {
  name: string;
  price: number;
  features: string[];
}

const services: Service[] = [
  {
    name: 'Website Development',
    price: 10000,
    features: [
      'Custom website design',
      'Responsive design',
      'Content management system',
      'Search engine optimization',
    ],
  },
  {
    name: 'App Development',
    price: 50000,
    features: [
      'Custom app design',
      'Native app development',
      'App store optimization',
      'In-app payment integration',
    ],
  },
  {
    name: 'Cybersecurity Solutions',
    price: 20000,
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Compliance and risk management',
      'Incident response and recovery',
    ],
  },
  {
    name: 'AR/VR Website',
    price: 40000,
    features: [
      'Custom AR/VR design',
      'Interactive 3D models',
      'Virtual reality experience',
      'Augmented reality integration',
    ],
  },
  {
    name: 'Blockchain Website',
    price: 40000,
    features: [
      'Custom blockchain design',
      'Decentralized application development',
      'Smart contract integration',
      'Cryptocurrency integration',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <PricingBox key={index} packageName={service.name} price={service.price} subtitle="Perfect for individuals and small teams starting out with basic features." services={service.features} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;