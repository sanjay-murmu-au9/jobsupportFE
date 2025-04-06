import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <div className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by thousands of job seekers
          </h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Our platform has helped thousands of individuals find their dream jobs
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
              Registered Users
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">5,000+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
              Jobs Posted
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">1,200+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
              Successful Placements
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">800+</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default StatsSection; 