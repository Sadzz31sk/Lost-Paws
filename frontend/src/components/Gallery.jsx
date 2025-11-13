import React from 'react';

const Gallery = () => {
  const images = [
    '/assets/both2.jpeg',
    '/assets/cats.jpeg',
    '/assets/dog2.jpeg',
    '/assets/dog7.jpeg',
    '/assets/cats4.jpeg',
    '/assets/dog1.jpeg',
    '/assets/dogs1.jpeg',
    '/assets/cat2.jpeg'
  ];

  return (
    <section className="bg-white px-40 py-5 text-center max-w-screen max-h-screen overflow-auto box-border">
      <h2 className="text-[32px] mb-5">
        <span className="text-orange-primary">Paws</span> Gallery
      </h2>
      
      <div className="grid grid-cols-6 grid-rows-3 gap-2.5 h-[calc(100vh-200px)]">
        <div className="row-span-2 col-span-2 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[0]} 
            alt="Pet photo 1"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-2 col-span-1 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[1]} 
            alt="Pet photo 2"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-1 col-span-1 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[2]} 
            alt="Pet photo 3"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-2 col-span-2 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[3]} 
            alt="Pet photo 4"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-2 col-span-1 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[4]} 
            alt="Pet photo 5"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-1 col-span-1 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[5]} 
            alt="Pet photo 6"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-1 col-span-2 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[6]} 
            alt="Pet photo 7"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
        
        <div className="row-span-1 col-span-2 rounded-[10px] overflow-hidden relative">
          <img 
            src={images[7]} 
            alt="Pet photo 8"
            className="w-full h-full object-cover block rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
