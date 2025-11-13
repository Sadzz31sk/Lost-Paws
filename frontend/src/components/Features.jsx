import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '/assets/report.png',
      title: 'Report a stray',
      description: 'Found a stray animal? Let us know so we can help rescue them.',
      link: '/report',
      linkText: 'Report Now',
      iconClass: 'w-[30px] h-[35px]'
    },
    {
      icon: '/assets/adopt.png',
      title: 'Adopt a Pet',
      description: 'Give a forever home to an animal in need and change both your lives.',
      link: '/adopt',
      linkText: 'Find a Pet',
      iconClass: 'w-[30px] h-[30px]'
    },
    {
      icon: '/assets/paw.png',
      title: 'Explore Shelters',
      description: 'Find a stray animal? Let us know so we can help rescue them.',
      link: '/shelters',
      linkText: 'Find Shelters',
      iconClass: 'w-[45px] h-[45px]'
    }
  ];

  return (
    <section className="w-screen bg-white px-20 py-[50px] text-center">
      <h2 className="text-[32px] mb-[50px]">Features and Services</h2>
      
      <div className="flex justify-between gap-5 mb-[30px]">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-cream-card rounded-[15px] px-5 py-[30px] flex-1 flex flex-col items-center text-center"
          >
            <div className="bg-orange-light w-[60px] h-[60px] rounded-full flex justify-center items-center mb-5">
              <img 
                src={feature.icon} 
                alt={`${feature.title} Icon`} 
                className={feature.iconClass}
              />
            </div>
            <h3 className="text-[20px] mb-[15px]">{feature.title}</h3>
            <p className="mb-5 text-sm">{feature.description}</p>
            <a 
              href={feature.link} 
              className="bg-orange-primary text-white px-4 py-2 rounded-[5px] font-semibold text-sm"
            >
              {feature.linkText}
            </a>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end items-center gap-2.5 mt-5">
        <span className="font-semibold">Explore more services</span>
        <div className="w-6 h-6 bg-orange-primary rounded-full flex justify-center items-center text-white">
          →
        </div>
      </div>
    </section>
  );
};

export default Features;
