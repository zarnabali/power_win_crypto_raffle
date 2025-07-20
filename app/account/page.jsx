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

export default function Account() {
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
                  className={`account-sidebar-item${item.name === 'Account' ? ' active' : ''}`}
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
          <div className="account-header">
            <h1 className="account-title">Account</h1>
            <button className="account-close-btn">
              <X size={20} />
            </button>
          </div>
          
          {/* Account Settings Form */}
          <div className="account-settings-form">
            <div className="account-section">
              <h2 className="account-section-title">Personal Information</h2>
              <div className="account-form-row">
                <div className="account-form-group">
                  <label className="account-label">First Name</label>
                  <input 
                    type="text" 
                    className="account-input" 
                    placeholder="Enter your first name"
                    defaultValue="John"
                  />
                </div>
                <div className="account-form-group">
                  <label className="account-label">Last Name</label>
                  <input 
                    type="text" 
                    className="account-input" 
                    placeholder="Enter your last name"
                    defaultValue="Doe"
                  />
                </div>
              </div>
              <div className="account-form-group">
                <label className="account-label">Email</label>
                <input 
                  type="email" 
                  className="account-input" 
                  placeholder="Enter your email"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div className="account-form-group">
                <label className="account-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="account-input" 
                  placeholder="Enter your phone number"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="account-section">
              <h2 className="account-section-title">Security</h2>
              <div className="account-form-group">
                <label className="account-label">Current Password</label>
                <input 
                  type="password" 
                  className="account-input" 
                  placeholder="Enter current password"
                />
              </div>
              <div className="account-form-group">
                <label className="account-label">New Password</label>
                <input 
                  type="password" 
                  className="account-input" 
                  placeholder="Enter new password"
                />
              </div>
              <div className="account-form-group">
                <label className="account-label">Confirm New Password</label>
                <input 
                  type="password" 
                  className="account-input" 
                  placeholder="Confirm new password"
                />
              </div>
            </div>
            
            <div className="account-section">
              <h2 className="account-section-title">Preferences</h2>
              <div className="account-form-group">
                <label className="account-label">Language</label>
                <select className="account-input">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div className="account-form-group">
                <label className="account-label">Currency</label>
                <select className="account-input">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                  <option>CAD ($)</option>
                </select>
              </div>
              <div className="account-form-group">
                <label className="account-checkbox-label">
                  <input type="checkbox" className="account-checkbox" defaultChecked />
                  <span>Receive email notifications</span>
                </label>
              </div>
              <div className="account-form-group">
                <label className="account-checkbox-label">
                  <input type="checkbox" className="account-checkbox" defaultChecked />
                  <span>Receive SMS notifications</span>
                </label>
              </div>
            </div>
            
            <div className="account-actions">
              <button className="account-save-btn">Save Changes</button>
              <button className="account-cancel-btn">Cancel</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
} 