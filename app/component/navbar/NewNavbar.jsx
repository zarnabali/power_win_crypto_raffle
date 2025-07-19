"use client";

import React from 'react';
import { ChevronDown, CreditCard, User, Globe, Bell } from 'lucide-react';
import Image from 'next/image';

const NewNavbar = () => {
  return (
    <div className="w-full h-24 flex items-center justify-center relative" style={{
      background: 'linear-gradient(to bottom, #000000 0%, #000000 30%, #2e2e2e 30%, #2e2e2e 100%)'
    }}>
      {/* Partial left border - goes from bottom to 30% up */}
      <div className="absolute left-0 bottom-0 w-0.5 bg-[#D9D9D9]" style={{ height: '30%' }}></div>
      
      {/* Partial right border - goes from bottom to 30% up */}
      <div className="absolute right-0 bottom-0 w-0.5 bg-[#D9D9D9]" style={{ height: '30%' }}></div>
      
      <div className="w-full flex ">
        {/* Box 1 - 50% width with logo */}
        <div className="w-1/2 h-16 mt-2 rounded-t-3xl bg-[#2e2e2e] border-2 border-r-2 border-solid  border-b-0 border-[#D9D9D9] border-r-0 flex items-center justify-left pl-5 p-1">
          <Image 
            src="/logo.png" 
            alt="PowerWin Logo" 
            width={220} 
            height={50} 
            className=" object-cover  align-left pt-3 pl-10"
          />
        </div>
        
        {/* Box 2 - 50% width with navigation buttons */}
        <div className="w-1/2 h-16 mt-[24px] bg-black rounded-b-3xl border-2 border-solid border-l-0 border-t-0 border-[#D9D9D9] flex items-center justify-center relative">
          <div className="flex items-center space-x-2 w-full justify-center px-2 absolute -top-2">
            <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-full px-6 py-3 h-14 text-sm transition-colors flex-1 shadow-lg border border-[#D9D9D9]">
              Home
            </button>
            
            <div className="relative group flex-1">
              <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-full px-6 py-3 h-14 text-sm flex items-center space-x-1 transition-colors w-full justify-center shadow-lg border border-[#D9D9D9]">
                <span>Competitions</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 w-full">
                <div className="py-1">
                  <div className="px-3 py-1 text-white hover:bg-gray-600 text-xs cursor-pointer">Active</div>
                  <div className="px-3 py-1 text-white hover:bg-gray-600 text-xs cursor-pointer">Ended</div>
                </div>
              </div>
            </div>
            
            <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-full px-6 py-3 h-14 text-sm transition-colors flex-1 shadow-lg border border-[#D9D9D9]">
              Winners
            </button>
            
            <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-full px-6 py-3 h-14 text-sm transition-colors flex-1 shadow-lg border border-[#D9D9D9]">
              Referral
            </button>
          </div>
        </div>
        
        {/* Box 3 - 33% width with 4 buttons in 2x2 grid */}
        <div className="w-1/3 h-16 mt-2 rounded-t-3xl bg-[#2e2e2e] border-2 border-b-0 border-l-0 border-solid border-[#D9D9D9] flex items-center justify-center relative">
          <div className="flex items-center space-x-3 w-full justify-center px-3 absolute -top-2">
            {/* Wallet Button with 3 rows */}
            <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-2xl mt-4 px-4 py-2 text-xs transition-colors shadow-lg border border-[#D9D9D9] flex flex-col items-center justify-center min-w-24">
              <div className="flex items-center space-x-2 mb-1">
                <CreditCard className="w-4 h-4" />
                <span className="font-semibold">Wallet</span>
              </div>
              <div className="text-white text-xs">Credit £125.00</div>
              <div className="text-white text-xs">Spins 27</div>
            </button>
            
            {/* User Button with 3 rows */}
            <button className="bg-[#2e2e2e] mt-4  hover:bg-[#3a3a3a] text-white rounded-2xl px-4 py-2  text-xs transition-colors shadow-lg border border-[#D9D9D9] flex flex-col items-center justify-center min-w-24">
              <div className="flex items-center space-x-2 mb-1">
                <User className="w-4 h-4" />
                <span className="font-semibold">John Doe</span>
              </div>
              <div className="text-gray-300 text-xs">johndoe@gmail.com</div>
              <div className="text-gray-300 text-xs">User Profile</div>
            </button>
            
            {/* Language and Alert Buttons in 2x2 grid */}
            <div className="flex flex-col space-y-1 mt-4">
              {/* Language Button - First Row */}
              <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-2xl px-4 py-2 text-xs transition-colors shadow-lg border border-[#D9D9D9] flex items-center justify-center min-w-16">
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">EN</span>
                </div>
              </button>
              
              {/* Alert Button - Second Row */}
              <button className="bg-[#2e2e2e] hover:bg-[#3a3a3a] text-white rounded-2xl px-4 py-2 text-xs transition-colors shadow-lg border border-[#D9D9D9] flex items-center justify-center min-w-16">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar; 