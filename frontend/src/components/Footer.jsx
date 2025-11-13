import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white px-5 py-10">
      <div className="flex justify-between max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src="/assets/logo_lostpaws.png" alt="LostPaws Logo" className="w-10 h-10" />
            <h3 className="text-lg">Lost Paws</h3>
          </div>
          
          <p className="text-sm text-[#ccc] mb-5">
            Helping stray animals find their forever homes
          </p>
          
          <div className="flex gap-[15px]">
            <a href="#" className="w-[30px] h-[30px] rounded-full bg-dark-card flex justify-center items-center">
              <span>📷</span>
            </a>
            <a href="#" className="w-[30px] h-[30px] rounded-full bg-dark-card flex justify-center items-center">
              <span>📘</span>
            </a>
            <a href="#" className="w-[30px] h-[30px] rounded-full bg-dark-card flex justify-center items-center">
              <span>🐦</span>
            </a>
          </div>
        </div>
        
        <div className="flex gap-20">
          <div>
            <h3 className="mb-5 text-lg">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2.5">
                <a href="/" className="text-[#ccc] text-sm">Home</a>
              </li>
              <li className="mb-2.5">
                <a href="/report" className="text-[#ccc] text-sm">Report</a>
              </li>
              <li className="mb-2.5">
                <a href="/shelters" className="text-[#ccc] text-sm">Shelter</a>
              </li>
              <li className="mb-2.5">
                <a href="/adopt" className="text-[#ccc] text-sm">Adopt</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-5 text-lg">Contact Us</h3>
            <p className="text-sm text-[#ccc] mb-2.5">help@example.com</p>
            <p className="text-sm text-[#ccc] mb-2.5">helper@example.com</p>
            <p className="text-sm text-[#ccc] mb-2.5">Phone: +91 9X0X9X0X9X</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
