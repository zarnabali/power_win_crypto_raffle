import React from 'react';
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

export default function Tickets() {
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
                  className={`account-sidebar-item${item.name === 'Tickets' ? ' active' : ''}`}
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
          <div className="tickets-header">
            <h1 className="tickets-title">Tickets</h1>
            <button className="tickets-close-btn">
              <X size={20} />
            </button>
          </div>
          
          {/* Main Tabs */}
          <div className="tickets-main-tabs">
            <button className="tickets-tab active">Current</button>
            <button className="tickets-tab">Past</button>
          </div>
          
          {/* Filter Tabs */}
          <div className="tickets-filter-tabs">
            <button className="tickets-filter-btn">All</button>
            <button className="tickets-filter-btn active">Competitions</button>
            <button className="tickets-filter-btn">Spin to Win</button>
            <button className="tickets-filter-btn">Instant Win</button>
          </div>
          
          {/* Empty State */}
          <div className="tickets-empty-state">
            <h2 className="tickets-empty-title">You don't have any tickets yet!</h2>
            <p className="tickets-empty-description">
              Get started now! Explore competitions and secure your first ticket
            </p>
            <button className="tickets-cta-btn">Competitions</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
} 