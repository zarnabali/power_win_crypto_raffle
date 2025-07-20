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

export default function Transactions() {
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
                  className={`account-sidebar-item${item.name === 'Transactions' ? ' active' : ''}`}
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
          <div className="transactions-header">
            <h1 className="transactions-title">Transactions</h1>
            <button className="transactions-close-btn">
              <X size={20} />
            </button>
          </div>
          
          {/* Filter Tabs */}
          <div className="transactions-filter-tabs">
            <button className="transactions-filter-btn active">All</button>
            <button className="transactions-filter-btn">Deposits</button>
            <button className="transactions-filter-btn">Withdrawals</button>
            <button className="transactions-filter-btn">Purchases</button>
            <button className="transactions-filter-btn">Winnings</button>
          </div>
          
          {/* Transactions Table */}
          <div className="transactions-table-container">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="transaction-type deposit">Deposit</td>
                  <td className="transaction-amount">+$50.00</td>
                  <td className="transaction-status completed">Completed</td>
                  <td className="transaction-date">2024-01-15</td>
                  <td className="transaction-id">TX123456789</td>
                </tr>
                <tr>
                  <td className="transaction-type withdrawal">Withdrawal</td>
                  <td className="transaction-amount">-$25.00</td>
                  <td className="transaction-status pending">Pending</td>
                  <td className="transaction-date">2024-01-14</td>
                  <td className="transaction-id">TX987654321</td>
                </tr>
                <tr>
                  <td className="transaction-type purchase">Purchase</td>
                  <td className="transaction-amount">-$10.00</td>
                  <td className="transaction-status completed">Completed</td>
                  <td className="transaction-date">2024-01-13</td>
                  <td className="transaction-id">TX456789123</td>
                </tr>
                <tr>
                  <td className="transaction-type winning">Winning</td>
                  <td className="transaction-amount">+$100.00</td>
                  <td className="transaction-status completed">Completed</td>
                  <td className="transaction-date">2024-01-12</td>
                  <td className="transaction-id">TX789123456</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
} 