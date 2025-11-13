import React from 'react';

const Header = ({ isLoggedIn = false }) => {
  return (
    <header className="fixed top-0 w-full z-[100] bg-cream-light flex justify-between items-center px-5 py-2.5">
      <div className="flex items-center gap-1.5">
        <img src="/assets/logo_lostpaws.png" alt="LostPaws Logo" className="h-[35px]" />
        <h1 className="text-[20px] text-[#333] font-normal">
          Lost<span className="text-orange-primary">Paws</span>
        </h1>
      </div>
      
      <nav>
        <ul className="flex list-none gap-5">
          <li className="font-medium">
            <a href="/">Home</a>
          </li>
          <li className="font-medium">
            <a href="/shelters">Shelters</a>
          </li>
          <li className="font-medium">
            <a href="/adopt">Adopt</a>
          </li>
          <li className="font-medium">
            <a href="/donate">Donate</a>
          </li>
          <li className="font-medium">
            <a 
              href="/report" 
              className="bg-orange-primary text-white px-4 py-2 rounded-xl font-bold"
            >
              Report
            </a>
          </li>
          {isLoggedIn ? (
            <li className="font-medium">
              <a 
                href="/logout" 
                className="bg-orange-primary text-white px-4 py-2 rounded-xl font-bold"
              >
                Logout
              </a>
            </li>
          ) : (
            <li className="font-medium">
              <a 
                href="/login" 
                className="bg-orange-primary text-white px-4 py-2 rounded-xl font-bold"
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
