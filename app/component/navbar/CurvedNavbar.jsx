import React from 'react';

const CurvedNavbar = ({ children }) => {
  return (
    <div className="navbar-container">
      {children && (
        <div className="navbar-children-overlay">
          {children}
        </div>
      )}
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <div className="diamond-shape"></div>
          </div>
          <span className="logo-text">POWER WIN</span>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Wallet Button */}
          <button className="wallet-btn">
            <span className="wallet-icon">💳</span>
            <div className="wallet-info">
              <span className="wallet-label">Wallet</span>
              <span className="wallet-credit">Credit £125.00</span>
              <span className="wallet-spins">Spins 27</span>
            </div>
          </button>

          {/* User Button */}
          <button className="user-btn">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-email">johndoe@gmail.com</span>
            </div>
          </button>

          {/* Language and Currency Button */}
          <button className="lang-currency-btn">
            <div className="lang-currency-stack">
              <span className="language">EN</span>
              <span className="currency">£</span>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
  .navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  width: 100%;
  overflow: hidden;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0 0 40px 40px;
  clip-path: ellipse(120% 100% at 50% 0%);
  z-index: 1000;

  background: rgba(0, 0, 0); /* translucent white for glass effect */
  backdrop-filter: blur(15px) saturate(160%);
  -webkit-backdrop-filter: blur(15px) saturate(160%);
}


.navbar-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.3) 0%,
    rgba(45, 45, 45, 0.3) 100%
  ); /* make gradient semi-transparent */
  clip-path: ellipse(120% 100% at 50% 0%);
  z-index: -1;
}


        .navbar-container::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: transparent;
          border-left: 2px solid rgba(255, 255, 255, 0.4);
          border-right: 2px solid rgba(255, 255, 255, 0.4);
          border-bottom: 2px solid rgba(255, 255, 255, 0.4);
          clip-path: ellipse(120% 100% at 50% 0%);
          z-index: 0;
        }

        .navbar-content {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0 40px;
          z-index: 1;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .diamond-shape {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f);
          transform: rotate(45deg);
          border-radius: 8px;
          position: relative;
        }

        .diamond-shape::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60%;
          height: 60%;
          background: transparent;
          transform: translate(-50%, -50%) rotate(-45deg);
          border-radius: 4px;
        }

        .logo-text {
          font-family: 'Arial', sans-serif;
          font-size: 20px;
          font-weight: bold;
          color: #ff6b6b;
          letter-spacing: 1px;
        }

        .right-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .wallet-btn, .user-btn, .lang-currency-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 25px;
          padding: 8px 16px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .wallet-btn:hover, .user-btn:hover, .lang-currency-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-2px);
        }

        .wallet-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
        }

        .wallet-icon {
          font-size: 20px;
        }

        .wallet-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .wallet-label {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
        }

        .wallet-credit {
          font-size: 12px;
          color: #b0b0b0;
        }

        .wallet-spins {
          font-size: 12px;
          color: #b0b0b0;
        }

        .user-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
        }

        .user-name {
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
        }

        .user-email {
          font-size: 12px;
          color: #b0b0b0;
        }

        .lang-currency-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .lang-currency-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .language {
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
        }

        .currency {
          font-size: 14px;
          font-weight: bold;
          color: #ffd93d;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .navbar-content {
            padding: 0 20px;
          }
          
          .wallet-btn, .user-btn {
            padding: 8px 12px;
          }
          
          .wallet-info, .user-info {
            display: none;
          }
          
          .logo-text {
            font-size: 16px;
          }
        }

  .navbar-children-overlay {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }
      `}</style>
    </div>
  );
};

export default CurvedNavbar;