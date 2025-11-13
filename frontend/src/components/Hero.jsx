import React from 'react';

const Hero = () => {
  return (
    <section className="mt-[60px] flex items-center px-5 py-[50px] gap-10 w-full mx-auto">
      <div className="flex-1 flex justify-center items-center">
        <img 
          src="/assets/main.png" 
          alt="White cat looking out of window" 
          className="w-full rounded-[10px] max-w-[500px]"
        />
      </div>
      
      <div className="flex-1 text-center font-medium flex flex-col justify-center items-center">
        <h1 className="text-[42px] mb-2.5 leading-[1.2]">
          Help Them Find Their <br/><span className="text-orange-primary">Forever Home</span>
        </h1>
        
        <p className="text-center mb-[30px] max-w-[500px]">
          Join our community in rescuing, recovering, and rehoming stray animals. 
          Together we can make a difference in their lives.
        </p>
        
        <div className="flex gap-2.5">
          <a 
            href="/adopt" 
            className="px-6 py-3 rounded-[5px] font-semibold text-base cursor-pointer inline-block bg-orange-primary text-white"
          >
            Adopt a Pet
          </a>
          <a 
            href="/shelters" 
            className="px-6 py-3 rounded-[5px] font-semibold text-base cursor-pointer inline-block border border-orange-primary text-orange-primary bg-transparent"
          >
            Explore Shelters
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
