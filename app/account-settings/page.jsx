import React from 'react';
import Link from 'next/link';
import NewNavbar from '../component/navbar/NewNavbar';
import Footer from '../component/Footer/footer';
import '../component/WinnerParticipant/winner-participant.css';
import { Bell } from 'lucide-react';

const sidebarItems = [
  { name: 'Tickets', route: '/tickets' },
  { name: 'My Prizes', route: '/my-prizes' },
  { name: 'Wallet', route: '/wallet' },
  { name: 'Transactions', route: '/transactions' },
  { name: 'Account', route: '/account' },
  { name: 'Affiliate', route: '/account-settings' },
];

export default function AccountSettings() {
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
                  className={`account-sidebar-item${item.name === 'Affiliate' ? ' active' : ''}`}
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
          <div className="section-card" style={{ width: '100%', maxWidth: 1100, margin: '0 auto', background: 'transparent', borderRadius: 16, boxShadow: 'none', padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
              <div style={{ fontSize: 28, fontWeight: 500, color: '#fff' }}>Affiliate</div>
              <button className="winner-section-btn" style={{ fontSize: 16, padding: '10px 24px', background: '#232326', color: '#fff', border: '1.5px solid #fff', borderRadius: 8 }}>Affiliate Link</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 32 }}>
              <div style={{ background: '#232326', borderRadius: 12, padding: 20, color: '#fff', minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>Your Referral Code</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>dsdsadas</div>
              </div>
              <div style={{ background: '#232326', borderRadius: 12, padding: 20, color: '#fff', minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>Total Deposited</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>$0.00</div>
              </div>
              <div style={{ background: '#232326', borderRadius: 12, padding: 20, color: '#fff', minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>Total Earnings</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>$0.00</div>
              </div>
              <div style={{ background: '#232326', borderRadius: 12, padding: 20, color: '#fff', minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>Users Brought</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>0</div>
              </div>
              <div style={{ background: '#232326', borderRadius: 12, padding: 20, color: '#fff', minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>Total Opened</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>$0.00</div>
              </div>
              <div style={{ background: '#232326', borderRadius: 12, padding: 20, color: '#fff', minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#9ca3af', marginBottom: 8 }}>Unclaimed Earnings</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>$0.00</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <input type="number" min={0} placeholder="0" style={{ background: '#232326', border: '1.5px solid #fff', borderRadius: 8, color: '#fff', padding: '10px 16px', fontSize: 16, width: 120 }} />
              <button className="winner-section-btn" style={{ fontSize: 16, padding: '10px 24px', background: '#232326', color: '#fff', border: '1.5px solid #fff', borderRadius: 8 }}>Claim</button>
              <button className="winner-section-btn" style={{ fontSize: 16, padding: '10px 24px', background: '#232326', color: '#fff', border: '1.5px solid #fff', borderRadius: 8 }}>Claim All</button>
            </div>
            <div style={{ background: '#232326', borderRadius: 12, padding: 0, overflow: 'hidden' }}>
              <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#18181b', color: '#9ca3af', fontWeight: 500, fontSize: 16 }}>
                    <th style={{ padding: '16px 12px', textAlign: 'left' }}>Username</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left' }}>Deposit Amount</th>
                    <th style={{ padding: '16px 12px', textAlign: 'left' }}>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {[1,2,3].map((i) => (
                    <tr key={i} style={{ borderTop: '1px solid #232326', fontSize: 16 }}>
                      <td style={{ padding: '16px 12px' }}>DPLpwdjwpidpwdwvl</td>
                      <td style={{ padding: '16px 12px' }}>$10.000</td>
                      <td style={{ padding: '16px 12px' }}>$1000</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
} 