import Link from "next/link"
import { Send } from "lucide-react"
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa"
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="logo-section">
            <div className="logo-container">
              <img src="/Images/logo.png" alt="PowerWin Logo" className="footer-logo-img" style={{ height: '90px', width: 'auto' }} />
            </div>
            <p className="tagline">Blockchain Raffles. Real Rewards.</p>
            <p className="description">
              PowerWin Crypto is the next-generation blockchain raffle platform. Experience provably fair giveaways with
              real-time transparency powered by Chainlink VRF. Win luxury prizes through secure, decentralized draws.
              Built on Web3.0 technology.
            </p>
            <div className="age-restriction">18+</div>
          </div>

          <div className="nav-section">
            <nav className="nav-list">
              <Link href="#" className="nav-link">Home</Link>
              <Link href="#" className="nav-link">Winners</Link>
              <Link href="#" className="nav-link">FAQ</Link>
              <Link href="#" className="nav-link">My Account</Link>
            </nav>
          </div>

          <div className="nav-section">
            <nav className="nav-list">
              <Link href="#" className="nav-link">Mobile App</Link>
              <Link href="#" className="nav-link">Refferal Win</Link>
              <Link href="#" className="nav-link">Fairness</Link>
              <Link href="#" className="nav-link">About Us</Link>
            </nav>
          </div>

          <div className="support-section">
            <h3 className="support-title">Support</h3>
            <Link href="mailto:powerwin@crypto.com" className="support-email">powerwin@crypto.com</Link>
          </div>

          <div className="telegram-section">
            <Link href="#" className="telegram-button">
              <Send className="telegram-icon" />
              <span>Join Telegram</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <div className="legal-section">
              <div className="crypto-icons">
                <div className="crypto-icon bitcoin"><span className="crypto-icon-symbol">₿</span></div>
                <div className="crypto-icon ethereum"></div>
                <div className="crypto-icon usdc"><div className="crypto-icon-dot"></div></div>
                <div className="crypto-icon polygon"><div className="crypto-icon-dot"></div></div>
                <div className="crypto-icon solana"></div>
                <div className="crypto-icon sui"></div>
              </div>
              <Link href="#" className="legal-link">Privacy Policy</Link>
              <Link href="#" className="legal-link">Terms & Conditions</Link>
              <Link href="#" className="legal-link">Acceptable Use Policy</Link>
              <Link href="#" className="legal-link">Cookie Policy</Link>
            </div>
            <div className="social-icons">
              <Link href="#" className="social-link"><FaInstagram className="social-icon" /></Link>
              <Link href="#" className="social-link"><FaFacebook className="social-icon" /></Link>
              <Link href="#" className="social-link"><FaYoutube className="social-icon" /></Link>
              <Link href="#" className="social-link"><FaTiktok className="social-icon" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
