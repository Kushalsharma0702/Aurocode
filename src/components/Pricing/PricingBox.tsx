import React from 'react';

interface Service {
  name: string;
  price: number;
  features: string[];
}

interface PricingBoxProps {
  packageName: string;
  price: number;
  subtitle: string;
  services: string[];
}

const PricingBox: React.FC<PricingBoxProps> = ({
  packageName,
  price,
  subtitle,
  services,
}) => {
  return (
    <div className="w-full">
      <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
            ₹{price.toLocaleString()} {/* Assuming you want to format price with ₹ symbol */}
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button className="flex w-full items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Start Free Trial
          </button>
        </div>
        <div>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="text-body-color">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;