import React from 'react';
import Link from 'next/link';
import NewNavbar from '../component/navbar/NewNavbar';
import Footer from '../component/Footer/footer';
import '../component/WinnerParticipant/winner-participant.css';
import { Bell, X, Gift, Trophy, Star } from 'lucide-react';

const sidebarItems = [
  { name: 'Tickets', route: '/tickets' },
  { name: 'My Prizes', route: '/my-prizes' },
  { name: 'Wallet', route: '/wallet' },
  { name: 'Transactions', route: '/transactions' },
  { name: 'Account', route: '/account' },
  { name: 'Affiliate', route: '/account-settings' },
];

export default function MyPrizes() {
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
                  className={`account-sidebar-item${item.name === 'My Prizes' ? ' active' : ''}`}
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
          <div className="prizes-header">
            <h1 className="prizes-title">My Prizes</h1>
            <button className="prizes-close-btn">
              <X size={20} />
            </button>
          </div>
          
          {/* Filter Tabs */}
          <div className="prizes-filter-tabs">
            <button className="prizes-filter-btn active">All Prizes</button>
            <button className="prizes-filter-btn">Cash Prizes</button>
            <button className="prizes-filter-btn">Physical Prizes</button>
            <button className="prizes-filter-btn">Digital Prizes</button>
          </div>
          
          {/* Prizes Grid */}
          <div className="prizes-grid">
            <div className="prize-card">
              <div className="prize-icon">
                <Trophy size={32} />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">Grand Prize Winner</h3>
                <p className="prize-description">Congratulations! You won the grand prize in the Bitcoin Raffle.</p>
                <div className="prize-value">$1,000.00</div>
                <div className="prize-status claimed">Claimed</div>
              </div>
            </div>
            
            <div className="prize-card">
              <div className="prize-icon">
                <Gift size={32} />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">Weekly Bonus</h3>
                <p className="prize-description">Weekly participation bonus for active users.</p>
                <div className="prize-value">$50.00</div>
                <div className="prize-status pending">Pending</div>
              </div>
            </div>
            
            <div className="prize-card">
              <div className="prize-icon">
                <Star size={32} />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">Referral Bonus</h3>
                <p className="prize-description">Bonus for referring new users to the platform.</p>
                <div className="prize-value">$25.00</div>
                <div className="prize-status claimed">Claimed</div>
              </div>
            </div>
            
            <div className="prize-card">
              <div className="prize-icon">
                <Trophy size={32} />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">Spin to Win</h3>
                <p className="prize-description">Won in the daily spin to win competition.</p>
                <div className="prize-value">$10.00</div>
                <div className="prize-status available">Available</div>
              </div>
            </div>
            
            <div className="prize-card">
              <div className="prize-icon">
                <Gift size={32} />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">Holiday Special</h3>
                <p className="prize-description">Special holiday promotion prize.</p>
                <div className="prize-value">$75.00</div>
                <div className="prize-status claimed">Claimed</div>
              </div>
            </div>
            
            <div className="prize-card">
              <div className="prize-icon">
                <Star size={32} />
              </div>
              <div className="prize-content">
                <h3 className="prize-title">Loyalty Reward</h3>
                <p className="prize-description">Loyalty reward for consistent participation.</p>
                <div className="prize-value">$30.00</div>
                <div className="prize-status available">Available</div>
              </div>
            </div>
          </div>
          
          {/* Empty State (hidden by default) */}
          <div className="prizes-empty-state" style={{ display: 'none' }}>
            <h2 className="prizes-empty-title">No prizes yet!</h2>
            <p className="prizes-empty-description">
              Start participating in competitions to win amazing prizes
            </p>
            <button className="prizes-cta-btn">Browse Competitions</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
} 