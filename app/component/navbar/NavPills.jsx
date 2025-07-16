"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavigationButtons = () => {
  return (
    <div  style={{ width: '100%' }}>
      <nav
        className="flex flex-row items-center gap-4"
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '16px', width: '100%' }}
      >
        <button className="nav-button">
          Home
        </button>
        
        <button className="nav-button">
          <span>Competitions</span>
          <ChevronDown size={16} />
        </button>
        
        <button className="nav-button">
          Winners
        </button>
        
        <button className="nav-button">
          Refferal Win
        </button>
      </nav>
      
      <style jsx>{`
        .nav-button {
          background: #4a4a4a;
          border: 1px solid #a0a0a0;
          border-radius: 30px 30px 8px 8px;
          padding: 12px 32px;
          color: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
        }
        
        .nav-button:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
        }
        
        .nav-button:active {
          transform: translateY(0);
        }
        
        .nav-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.5);
        }
      `}</style>
    </div>
  );
};

export default NavigationButtons;