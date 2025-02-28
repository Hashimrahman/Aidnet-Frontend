import React from 'react';

import image1 from '../../assets/grid1-img.jpg'
import image2 from '../../assets/grid2-img.jpg'
import image3 from '../../assets/grid3-img.jpg'

interface MetricCardProps {
  title: string;
  description: string;
  imageSrc: any;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, description, imageSrc }) => (
  <div className="relative overflow-hidden rounded-lg -z-10">
    <div 
      className="aspect-[3/4] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/50">
        <div className="p-6 h-full flex flex-col justify-start mt-6">
          <h3 className="text-white text-2xl md:text-4xl font-roboto font-extralight mb-2">
            {title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base font-roboto font-extralight">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ImpactMetrics: React.FC = () => {
  const metrics = [
    {
      title: "50+ Disaster Responses",
      description: "Swift action in emergencies, delivering essential aid and resources where they are needed most",
      imageSrc: image1
    },
    {
      title: "5,000+ Volunteers Mobilized",
      description: "Uniting volunteers, donors, and resources to deliver swift, impactful disaster relief and rebuild stronger communities",
      imageSrc: image2
    },
    {
      title: "20,000+ Supplies Delivered",
      description: "From food and medicine to shelter and financial aid, ensuring help reaches those in need",
      imageSrc: image3
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Making a Difference
        <div className="h-1 w-1/2 md:w-1/4 gradient-bg mx-auto mt-2"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            description={metric.description}
            imageSrc={metric.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ImpactMetrics;