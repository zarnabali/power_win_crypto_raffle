'use client'

import React, { useState } from 'react';
import NewNavbar from '../component/navbar/NewNavbar';
import Footer from '../component/Footer/footer';
import { LiveWinnersSection } from './LiveWinnersSection';
import { WinnersListSection } from './WinnersListSection';
import './competitions.css';

const CompetitionsPage = () => {
  const [activeTab, setActiveTab] = useState('all-raffles');
  const [activePrizeIndex, setActivePrizeIndex] = useState(2); // 500 CASH is centered

  // Prize carousel data with actual image paths
  const prizeCarousel = [
    { id: 1, value: "$0.01", type: "Credits", image: "/0.01.png", isCredit: true },
    { id: 2, value: "250", type: "CASH", image: "/250.png", isCash: true },
    { id: 3, value: "500", type: "CASH", image: "/500.png", isActive: true, isCash: true },
    { id: 4, value: "100", type: "CASH", image: "/100.png", isCash: true },
    { id: 5, value: "$25.00", type: "Cash Now", image: "/25.png", isCredit: true },
  ];

  // Prize grid data
  const prizeGrid = [
    { value: "$0.01", type: "Credit Site", image: "/0.01.png", isCredit: true },
    { value: "$5.00", type: "Credit Site", image: "/5.png", isCredit: true },
    { value: "$10.00", type: "Credit Site", image: "/10.png", isCredit: true },
    { value: "$25.00", type: "Credit Site", image: "/25.png", isCredit: true },
    { value: "100", type: "CASH", image: "/100.png", isCash: true },
    { value: "250", type: "CASH", image: "/250.png", isCash: true },
    { value: "500", type: "CASH", image: "/500.png", isCash: true },
  ];

  // Live winners data
  const liveWinners = [
    { winner: "CristianoMaradona69", tickets: "1234124124", prize: "$1000 - MacBook Air", isHighlighted: true },
    { winner: "CristianoMaradona69", tickets: "1234124124", prize: "$1000 - MacBook Air", isHighlighted: true },
    { winner: "CristianoMaradona69", tickets: "1234124124", prize: "$1000 - MacBook Air", isHighlighted: true },
    { winner: "Hidden", tickets: "1234124124", prize: "$25 - Credit", isHighlighted: false },
    { winner: "Klauslohannis", tickets: "121312312", prize: "$100 - Cash", isHighlighted: false },
    { winner: "MichaelJackson1234567890", tickets: "12323123", prize: "$10 - Credit", isHighlighted: false },
  ];

  // Component for prize card with image
  const PrizeCard = ({ value, type, image, isActive = false }) => (
    <div className="relative">
      <div 
        className={`transition-all duration-300 ${
          isActive ? 'scale-150 shadow-2xl' : 'scale-90 opacity-70'
        }`}
      >
        <img 
          src={image} 
          alt={`${value} ${type}`}
          className={`w-auto object-contain ${isActive ? 'h-48' : 'h-32'}`}
        />
      </div>
      {isActive && (
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-red-500 rounded-full"></div>
      )}
    </div>
  );

  return (
    <>
      <NewNavbar />
      <div 
        className="min-h-screen text-white"
        style={{
          backgroundColor: '#222222'
        }}
      >
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-8 py-8">
          
          {/* Top Section - Tagline */}
          <div className="text-left mb-4">
            <p className="text-gray-300 text-sm">Blockchain Raffles. Real Rewards.</p>
          </div>
          
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-medium text-white mb-8">Competitions</h1>
            
            {/* Tab Navigation Container - 80% width, rounder buttons */}
            <div className="flex justify-center mb-12">
              <div 
                className="flex rounded overflow-hidden w-[100%]"
                style={{
                  backgroundColor: '#333333',
                  padding: '4px'
                }}
              >
                <button
                  onClick={() => setActiveTab('all-raffles')}
                  className={`flex-1 py-3 text-2xl font-medium transition-all rounded ${
                    activeTab === 'all-raffles'
                      ? 'text-white'
                      : 'text-white hover:opacity-80'
                  }`}
                  style={{
                    background: activeTab === 'all-raffles' 
                      ? 'linear-gradient(to bottom, #999999 0%, #666666 100%)'
                      : 'linear-gradient(to bottom, #444444 0%, #333333 100%)'
                  }}
                >
                  All Raffles
                </button>
                <button
                  onClick={() => setActiveTab('instant-win')}
                  className={`flex-1 py-3 text-2xl font-medium transition-all rounded ${
                    activeTab === 'instant-win'
                      ? 'text-white'
                      : 'text-white hover:opacity-80'
                  }`}
                  style={{
                    background: activeTab === 'instant-win' 
                      ? 'linear-gradient(to bottom, #999999 0%, #666666 100%)'
                      : 'linear-gradient(to bottom, #444444 0%, #333333 100%)'
                  }}
                >
                  Instant Win
                </button>
              </div>
            </div>
          </div>

          {/* Prize Carousel Section with Homepage-style Container */}
          <div className="mb-12">
            <div 
              className="relative p-24 rounded"
              style={{
                background: 'linear-gradient(180deg,#000000C4 0%, rgba(255,255,255,0.00) 100%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                borderBottom: '1.5px solid #fff',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
              }}
            >
              {/* Red Center Indicator Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-red-500 z-10">
                {/* Top Triangle */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-red-500"></div>
                {/* Bottom Triangle */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"></div>
              </div>

              {/* Carousel Container */}
              <div className="flex justify-center items-center gap-8 mb-8">
                {/* Prize Items */}
                <div className="flex gap-12 items-center">
                  {prizeCarousel.map((prize, index) => (
                    <div key={prize.id} className="relative">
                      <PrizeCard {...prize} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Spin Button and How It Works - Outside Container */}
            <div className="flex justify-between items-center mt-6">
              {/* Empty space for left side */}
              <div className="flex-aut mr-14"></div>
              
              {/* Demo Spin Button - Centered */}
              <button 
                className="text-white pl-3 py-0 rounded-lg text-lg font-medium flex items-center gap-4 transition-colors"
                style={{
                  background: 'linear-gradient(to bottom, #CC0000 0%, #990000 100%)',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Demo Spin
                <span className="bg-black/30 px-4 py-4 rounded text-sm">27</span>
              </button>
              
              {/* How it Works Button - Far Right */}
              <button 
                className="text-white px-4 py-3 rounded-xl text-sm font-medium flex items-center  transition-colors hover:opacity-80"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 100%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                  borderBottom: '1.5px solid #fff',
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                }}
              >
                How it Works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Prize Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-4 gap-6">
              {prizeGrid.slice(0, 4).map((prize, index) => (
                <div
                  key={index}
                  className="rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer h-32 flex flex-col justify-center items-center"
                  style={{
                    background: 'linear-gradient(180deg, #161616 , #79797900 0%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                    borderBottom: '1.5px solid #fff',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  {prize.image ? (
                    <img 
                      src={prize.image} 
                      alt={`${prize.value} ${prize.type}`}
                      className="h-20 object-contain"
                    />
                  ) : (
                    <>
                      <div className={`text-2xl font-bold ${prize.textColor}`}>
                        {prize.value}
                      </div>
                      <div className={`text-sm ${prize.textColor}`}>
                        {prize.type}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-6">
              {prizeGrid.slice(4).map((prize, index) => (
                <div
                  key={index + 4}
                  className="rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer h-32 flex flex-col justify-center items-center"
                  style={{
                    background: 'linear-gradient(180deg, #161616 , #79797900 0%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                    borderBottom: '1.5px solid #fff',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  {prize.image ? (
                    <img 
                      src={prize.image} 
                      alt={`${prize.value} ${prize.type}`}
                      className="h-20 object-contain"
                    />
                  ) : (
                    <>
                      <div className={`text-2xl font-bold ${prize.textColor}`}>
                        {prize.value}
                      </div>
                      <div className={`text-sm ${prize.textColor}`}>
                        {prize.type}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-1 bg-white/20 mb-12"></div>

          {/* Search and Information Section */}
          <div className="mb-8">
            <div className="flex items-center gap-8">
              {/* Search Bar */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Winners"
                    className="w-full border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                    style={{
                      background: 'linear-gradient(180deg, #3D3D3D, #00000033 20%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                      borderBottom: '1.5px solid #fff',
                      boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                    }}
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Information Tabs */}
              <div className="flex gap-4">
                <button 
                  className="text-white px-6 py-4 rounded-2xl text-lg font-medium"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 100%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                    borderBottom: '1.5px solid #fff',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  Live Winners
                </button>
                <button 
                  className="text-white px-6 py-4 rounded-2xl text-lg font-medium flex items-center gap-2 hover:opacity-80"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 100%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                    borderBottom: '1.5px solid #fff',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  Provably Fair
                </button>
                <button 
                  className="text-white px-6 py-4 rounded-2xl text-lg font-medium hover:opacity-80"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.00) 100%), linear-gradient(180deg, rgba(60,60,60,0.45) 60%, rgba(60,60,60,0.10) 100%)',
                    borderBottom: '1.5px solid #fff',
                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
                  }}
                >
                  Leaderboard
                </button>
              </div>
            </div>
          </div>

          {/* Live Winners Table */}
          <div className="mb-16">
            <div 
              className="rounded overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #3D3D3D, #00000033 5%)',
                borderBottom: '1.5px solid #fff',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)'
              }}
            >
              <h2 className="text-3xl font-medium text-white p-6 pb-0">Live Winners</h2>
              <div className="grid grid-cols-3 gap-4 px-6 pb-6 text-lg font-medium text-white">
                <div>Winner</div>
                <div>Tickets</div>
                <div>Prize Value</div>
              </div>
              {liveWinners.map((winner, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 trounded gap-4 p-6 text-white border-t border-gray-700/30 mx-4 ${
                    index === 0 ? 'bg-gradient-to-b rounded-lg from-yellow-500 via-yellow-400/20 to-black/40' :
                    index === 1 ? 'bg-gradient-to-b rounded-lg from-gray-400 via-gray-300/20 to-black/40' :
                    index === 2 ? 'bg-gradient-to-b rounded-lg from-amber-700 via-amber-600/20 to-black/40' :
                    winner.isHighlighted ? 'bg-gradient-to-r from-orange-600/20 to-yellow-600/20' : ''
                  }`}
                >
                  <div className="font-medium">{winner.winner}</div>
                  <div className="text-medium">{winner.tickets}</div>
                  <div className="text-medium">{winner.prize}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompetitionsPage; 