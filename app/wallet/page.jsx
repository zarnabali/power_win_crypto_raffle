'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import NewNavbar from '../component/navbar/NewNavbar';
import Footer from '../component/Footer/footer';
import '../component/WinnerParticipant/winner-participant.css';
import { Bell, X } from 'lucide-react';

const sidebarItems = [
  { name: 'Tickets', route: '/tickets' },
  { name: 'My Prizes', route: '/my-prizes' },
  { name: 'Wallet', route: '/wallet' },
  { name: 'Transactions', route: '/transactions' },
  { name: 'Account', route: '/account' },
  { name: 'Affiliate', route: '/account-settings' },
];

const cryptoOptions = [
  { name: 'Solana', symbol: 'SOL', logo: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/solana-sol-7152167-5795323.png' },
  { name: 'Bitcoin', symbol: 'BTC', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-bitcoin-icon-download-in-svg-png-gif-file-formats--logo-cryptocurrency-crypto-pack-business-icons-645902.png?f=webp' },
  { name: 'Ethereum', symbol: 'ETH', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-ethereum-icon-download-in-svg-png-gif-file-formats--cryptocurrency-coins-currency-bitcoin-pack-business-icons-1545899.png' },
  { name: 'XRP', symbol: 'XRP', logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/xrp-ripple-coin-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--symbol-sign-logo-crypto-coins-pack-science-technology-illustrations-3478985@0.png' },
  { name: 'Shiba Inu', symbol: 'SHIB', logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/shiba-inu-shib-coin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--crypto-cryptocurrency-pack-science-technology-icons-6044464.png' },
  { name: 'USD Coin', symbol: 'USDC', logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/usdc-coin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--usd-crypto-cryptocurrency-pack-science-technology-icons-6044475.png?f=webp' },
  { name: 'Tether', symbol: 'USDT', logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/tether-usdt-coin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cryptocurrency-pack-science-technology-icons-6044470.png?f=webp' },
  { name: 'Cardano', symbol: 'ADA', logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/cardano-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bitcoin-logo-crypto-coin-pack-logos-icons-8263847.png?f=webp' },
];

export default function Wallet() {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  return (
    <>
      <NewNavbar />
      <div className="account-settings-card">
        {/* Sidebar */}
        <aside className="account-sidebar">
          <div className="account-sidebar-title">Account Settings</div>
          <nav className="account-sidebar-menu">
            {sidebarItems.map((item) => (
              <Link key={item.name} href={item.route}>
                <button
                  className={`account-sidebar-item${item.name === 'Wallet' ? ' active' : ''}`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </nav>
          <div className="account-sidebar-divider" />
          <div className="account-sidebar-notifications">
            Notifications
            <Bell size={18} style={{ marginLeft: 8, marginRight: 4 }} />
            <span className="account-sidebar-dot" />
          </div>
        </aside>
        {/* Vertical Divider */}
        <div className="account-settings-divider" />
        {/* Main Content */}
        <main className="account-main-content">
          <div className="wallet-header">
            <h1 className="wallet-title">Wallet</h1>
            <button className="wallet-close-btn">
              <X size={20} />
            </button>
          </div>
          
          {/* Wallet Balances */}
          <div className="wallet-balances">
            <div className="wallet-balance-row">
              <span className="wallet-balance-label">Cash</span>
              <span className="wallet-balance-value">27</span>
            </div>
            <div className="wallet-balance-row">
              <span className="wallet-balance-label">Credit</span>
              <span className="wallet-balance-value">$29.99</span>
            </div>
            <div className="wallet-balance-row">
              <span className="wallet-balance-label">Spins</span>
              <span className="wallet-balance-value">27</span>
            </div>
          </div>
          
          {/* Cash Withdraw Section */}
          <div className="wallet-section">
            <h2 className="wallet-section-title">Cash Withdraw</h2>
            <div className="wallet-withdraw-form">
              <input 
                type="text" 
                placeholder="Enter your Value to Withdraw" 
                className="wallet-input"
              />
              <button className="wallet-withdraw-btn">Request Withdraw</button>
            </div>
          </div>
          
          {/* Deposit Funds Section */}
          <div className="wallet-section">
            <h2 className="wallet-section-title">Deposit Funds</h2>
            <button 
              className="wallet-deposit-btn"
              onClick={() => setIsDepositModalOpen(true)}
            >
              Deposit
            </button>
          </div>
        </main>
      </div>

      {/* Deposit Funds Modal */}
      {isDepositModalOpen && (
        <div className="deposit-modal-overlay" onClick={() => setIsDepositModalOpen(false)}>
          <div className="deposit-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="deposit-modal-header">
              <h2 className="deposit-modal-title">Deposit Funds</h2>
              <button 
                className="deposit-modal-close-btn"
                onClick={() => setIsDepositModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Crypto Section */}
            <div className="deposit-modal-section">
              <h3 className="deposit-section-title">Crypto</h3>
              <div className="crypto-grid">
                {cryptoOptions.map((crypto, index) => (
                  <button key={index} className="crypto-card">
                    <div className="crypto-logo">
                      <img 
                        src={crypto.logo} 
                        alt={crypto.name}
                        className="crypto-logo-img"
                      />
                    </div>
                    <div className="crypto-name">{crypto.name}</div>
                    <div className="crypto-symbol">{crypto.symbol}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Credit Card Section */}
            <div className="deposit-modal-section">
              <h3 className="deposit-section-title">Credit Card</h3>
              <button className="coinbase-btn">Coinbase</button>
            </div>

            {/* Disclaimer */}
            <div className="deposit-disclaimer">
              There is no mechanism to withdraw deposited funds. All funds must be used to purchase.
            </div>

            {/* Affiliate Code Section */}
            <div className="deposit-modal-section">
              <h3 className="deposit-section-title">Affiliate Code</h3>
              <div className="affiliate-form">
                <input 
                  type="text" 
                  placeholder="Enter Affiliate Code" 
                  className="affiliate-input"
                />
                <button className="affiliate-apply-btn">Apply</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
} 