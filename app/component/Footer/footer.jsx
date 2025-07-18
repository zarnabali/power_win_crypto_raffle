import Link from "next/link"
import { Send, Instagram, Facebook, Youtube } from "lucide-react"
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main footer content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left section - Logo and description */}
          <div className="logo-section">
            <div className="logo-container">
              <img src="/Images/logo.png" alt="PowerWin Logo" className="footer-logo-img" style={{height: '90px', width: 'auto'}} />
              
            </div>

            <p className="tagline">Blockchain Raffles. Real Rewards.</p>

            <p className="description">
              PowerWin Crypto is the next-generation blockchain raffle platform. Experience Provably fair giveaways with
              real-time transparency powered by Chainlink VRF. Win luxury prizes through secure, decentralized draws.
              Built on Web3.0 technology.
            </p>

            <div className="age-restriction">18+</div>
          </div>

          {/* Center navigation columns */}
          <div className="nav-section">
            <nav className="nav-list">
              <Link href="#" className="nav-link">
                Home
              </Link>
              <Link href="#" className="nav-link">
                Winners
              </Link>
              <Link href="#" className="nav-link">
                FAQ
              </Link>
              <Link href="#" className="nav-link">
                My Account
              </Link>
            </nav>
          </div>

          <div className="nav-section">
            <nav className="nav-list">
              <Link href="#" className="nav-link">
                Mobile App
              </Link>
              <Link href="#" className="nav-link">
                Refferal Win
              </Link>
              <Link href="#" className="nav-link">
                Fairness
              </Link>
              <Link href="#" className="nav-link">
                About Us
              </Link>
            </nav>
          </div>

          {/* Right section - Support */}
          <div className="support-section">
            <h3 className="support-title">Support</h3>
            <Link href="mailto:powerwin@crypto.com" className="support-email">
              powerwin@crypto.com
            </Link>
          </div>

          {/* New column - Join Telegram button */}
          <div className="telegram-section">
            <Link href="#" className="telegram-button">
              <Send className="telegram-icon" />
              <span>Join Telegram</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom section with legal links and social icons */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            {/* Legal links */}
            <div className="legal-section">
              <div className="crypto-icons">
                <div className="crypto-icon bitcoin">
                  <span className="crypto-icon-symbol">₿</span>
                </div>
                <div className="crypto-icon ethereum"></div>
                <div className="crypto-icon usdc">
                  <div className="crypto-icon-dot"></div>
                </div>
                <div className="crypto-icon polygon">
                  <div className="crypto-icon-dot"></div>
                </div>
              </div>
              <Link href="#" className="legal-link">
                Privacy Policy
              </Link>
              <Link href="#" className="legal-link">
                Terms & Conditions
              </Link>
              <Link href="#" className="legal-link">
                Acceptable Use Policy
              </Link>
              <Link href="#" className="legal-link">
                Cookie Policy
              </Link>
            </div>

            {/* Social media icons */}
            <div className="social-icons">
              <Link href="#" className="social-link">
                <Instagram className="social-icon" />
              </Link>
              <Link href="#" className="social-link">
                <Facebook className="social-icon" />
              </Link>
              <Link href="#" className="social-link">
                <Youtube className="social-icon" />
              </Link>
              <Link href="#" className="social-link">
                <div className="tiktok-icon">
                  <span>♪</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
