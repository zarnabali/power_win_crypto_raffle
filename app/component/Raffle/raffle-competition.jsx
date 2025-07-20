"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Trophy, Ticket, X } from "lucide-react"
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

  const [showPrizeModal, setShowPrizeModal] = useState(false)

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
        <img src="/hero.svg" alt="Blockchain Raffles. Real Rewards." style={{ paddingTop: '10px',width: '100%', maxWidth: '370px', height: 'auto', display: 'block'}} />
      </div>

      {/* Main Content */}
      <div className="raffle-content">
        {/* Left Column - Information */}
        <div className="raffle-info">
          <div className="raffle-title-section">
            <h2 className="raffle-title">Lamborghini Aventador LP 770-4 SVJ Cabrio</h2>
            <div className="status-badge">
              <img src="/Vector.svg" alt="status icon" width="15" height="12" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '8px' }} />
              Ongoing
            </div>
          </div>

          {/* Mobile-only badges - centered */}
          <div className="md:hidden mobile-badges-container flex justify-center gap-4 mt-4">
            <div className="status-badge w-32 h-10 flex items-center justify-center text-center">
              <img src="/Vector.svg" alt="status icon" width="15" height="12" className="mr-2" />
              Ongoing
            </div>
            <div className="chainlink-badge w-32 h-10 flex items-center justify-center text-center">Chainlink VRF</div>
          </div>

          <p className="cash-alternative">Cash Alternative - $500,000</p>

          {/* Mobile-only car display - shows below cash alternative */}
          <div className="md:hidden mobile-car-container">
            <div className="car-ellipse-container">
              <div className="car-ellipse">
                {/* Car image positioned to sit on ellipse */}
                <img
                  src="/Images/Lambo.png"
                  alt="Lamborghini Aventador LP 770-4 SVJ Cabrio"
                  className="car-image"
                />
                {/* Ellipse positioned behind/under the car */}
                <svg className="ellipse-svg" viewBox="0 0 600 160">
                  <ellipse cx="300" cy="80" rx="290" ry="60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                </svg>
              </div>
              <div className="price-display">
                <span>${ticketPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Mobile-only Prize Description Button (moved below car, above timer) */}
          <div className="w-full flex justify-center md:hidden mt-4 mb-2">
            <button
              className="bg-[#18181b] text-white border border-gray-600 rounded-lg px-4 py-2 text-sm font-medium shadow hover:bg-[#232326] transition"
              onClick={() => setShowPrizeModal(true)}
            >
              Prize Description
            </button>
          </div>

          {/* Prize Description Modal (Mobile only) */}
          {showPrizeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 md:hidden">
              <div className="bg-[#18181b] rounded-xl shadow-lg max-w-[90vw] w-full mx-4 p-5 relative border border-gray-700">
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPrizeModal(false)}
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
                <h2 className="text-lg font-semibold mb-2 text-white">Description</h2>
                <h3 className="text-base font-medium mb-2 text-white">Model: Lamborghini Aventador LP 770-4 SVJ Cabrio</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Lamborghini Aventador SVJ Roadster is a limited-edition open-top supercar that blends extreme performance with unmistakable Italian design. Powered by a naturally aspirated 6.5L V12 engine delivering 770 horsepower, it accelerates from 0 to 100 km/h in just 2.9 seconds. With advanced aerodynamics (ALA 2.0 system), carbon fiber construction, and all-wheel drive, the SVJ Roadster offers an exhilarating driving experience both on the road and track—while letting you enjoy the raw sound of the V12 with the roof down.
                </p>
              </div>
            </div>
          )}

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
              <div className="chainlink-badge md:block hidden">Chainlink VRF</div>
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
              {/* Car image positioned to sit on ellipse */}
              <img
                src="/Images/Lambo.png"
                alt="Lamborghini Aventador LP 770-4 SVJ Cabrio"
                className="car-image"
              />
              {/* Ellipse positioned behind/under the car */}
              <svg className="ellipse-svg" viewBox="0 0 600 160">
                <ellipse cx="300" cy="80" rx="290" ry="60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
              </svg>
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