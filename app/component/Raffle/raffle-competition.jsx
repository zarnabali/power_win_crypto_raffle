"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Trophy, Ticket } from "lucide-react"
import "./raffle-competition.css"

export default function RaffleCompetition() {
  const [timeLeft, setTimeLeft] = useState({
    days: 19,
    hours: 1,
    minutes: 34,
    seconds: 26,
  })

  const totalTickets = 90000
  const soldTickets = 68157
  const progressPercentage = (soldTickets / totalTickets) * 100
  const ticketPrice = 8.5

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="raffle-competition-container">
      {/* Header */}
      <div className="raffle-header">
        <h1 className="raffle-tagline">Blockchain Raffles. Real Rewards.</h1>
      </div>

      {/* Main Content */}
      <div className="raffle-content">
        {/* Left Column - Information */}
        <div className="raffle-info">
          <div className="raffle-title-section">
            <h2 className="raffle-title">Lamborghini Aventador LP 770-4 SVJ Cabrio</h2>
            <div className="status-badge">Ongoing</div>
          </div>

          <p className="cash-alternative">Cash Alternative - $500,000</p>

          <div className="countdown-section">
            <p className="countdown-label">Competition Ends In:</p>
            <div className="countdown-timer">
              <div className="time-unit">
                <span className="time-number">{timeLeft.days}</span>
                <span className="time-label">Days</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.hours}</span>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.minutes}</span>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-unit">
                <span className="time-number">{timeLeft.seconds}</span>
                <span className="time-label">Seconds</span>
              </div>
              <div className="chainlink-badge">Chainlink VRF</div>
            </div>
          </div>

          <div className="raffle-details">
            <div className="detail-item">
              <div className="detail-icon">🎲</div>
              <p className="detail-text">
                The winner will be selected using Chainlink VRF (Verifiable Random Function), ensuring a provably fair
                and tamper-proof draw.
              </p>
            </div>

            <div className="detail-item">
              <Trophy className="detail-icon-svg" />
              <p className="detail-text">This competition has only 1 winner</p>
            </div>

            <div className="detail-item">
              <Ticket className="detail-icon-svg" />
              <p className="detail-text">{totalTickets.toLocaleString()} Tickets</p>
            </div>
          </div>

          <button className="raffle-rules-button">
            <span>Raffle Rules</span>
            <ExternalLink size={16} />
          </button>

          <div className="progress-section">
            <div className="progress-slider-container" style={{ position: 'relative' }}>
              {/* Percentage indicator above the bar */}
              <div
                className="progress-percentage-indicator"
                style={{ left: `${progressPercentage}%` }}
              >
                <div className="progress-percentage-value">
                  {progressPercentage.toFixed(2).replace('.', ',')}%
                </div>
                <div className="progress-percentage-line" />
              </div>
              <div className="progress-slider">
                <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                <div
                  className="progress-ticks-unfilled"
                  style={{ left: `${progressPercentage}%`, width: `calc(100% - ${progressPercentage}%)`, position: 'absolute', top: 0, height: '100%' }}
                ></div>
                {/* Custom thumb at the end of progress bar */}
                <div
                  className="progress-thumb"
                  style={{ left: `calc(${progressPercentage}% - 16px)` }}
                ></div>
              </div>
            </div>
            <div className="progress-stats">
              <span>
                {soldTickets.toLocaleString()}/{totalTickets.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Car Image with Circle */}
        <div className="raffle-visual">
          <div className="car-ellipse-container">
            <div className="car-ellipse">
              {/* Ellipse using SVG for perfect control */}
              <svg width="100%" height="100%" viewBox="0 0 600 160" style={{ position: 'absolute', left: 0, bottom: 0, zIndex: 1 }}>
                <ellipse cx="300" cy="140" rx="290" ry="60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
              </svg>
              <img
                src="/Images/Lambo.png"
                alt="Lamborghini Aventador LP 770-4 SVJ Cabrio"
                className="car-image"
                style={{ position: 'relative', zIndex: 2, width: '90%', height: 'auto', marginTop: '10px', marginBottom: '0' }}
              />
            </div>
            <div className="price-display">
              <span>${ticketPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
