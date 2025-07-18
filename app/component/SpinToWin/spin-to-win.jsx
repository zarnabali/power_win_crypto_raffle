"use client"

import { useState, useRef } from "react"
import { RotateCcw } from "lucide-react"
import "./spin-to-win.css"

export default function SpinToWin() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const confettiRef = useRef(null)

  const handleDemoSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)

    // Reset after 5 seconds and show celebration
    setTimeout(() => {
      setIsSpinning(false)
      setShowCelebration(true)
      triggerConfetti()

      // Hide celebration after 3 seconds
      setTimeout(() => {
        setShowCelebration(false)
      }, 3000)
    }, 5000)
  }

  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      // Dynamic import of canvas-confetti
      import("canvas-confetti").then((confetti) => {
        const canvas = confettiRef.current
        if (!canvas) return

        const myConfetti = confetti.default.create(canvas, {
          resize: true,
          useWorker: true,
        })

        // Get the spinner container position for targeting
        const spinnerContainer = document.querySelector(".spinner-container")
        const leftSection = document.querySelector(".left-combined-section")

        if (spinnerContainer && leftSection) {
          const spinnerRect = spinnerContainer.getBoundingClientRect()
          const leftRect = leftSection.getBoundingClientRect()

          // Calculate relative position within the left section
          const originX = (spinnerRect.left + spinnerRect.width / 2 - leftRect.left) / leftRect.width
          const originY = (spinnerRect.top + spinnerRect.height / 2 - leftRect.top) / leftRect.height

          // Multiple bursts for better effect
          const duration = 3000
          const animationEnd = Date.now() + duration

          const randomInRange = (min, max) => Math.random() * (max - min) + min

          const frame = () => {
            myConfetti({
              particleCount: randomInRange(5, 10),
              angle: randomInRange(55, 125),
              spread: randomInRange(50, 70),
              origin: { x: originX, y: originY },
              colors: ["#ec4899", "#8b5cf6", "#fbbf24", "#3b82f6", "#10b981", "#f97316", "#ef4444", "#06b6d4"],
              gravity: 0.6,
              scalar: 0.8,
              drift: randomInRange(-0.5, 0.5),
            })

            if (Date.now() < animationEnd) {
              requestAnimationFrame(frame)
            }
          }

          frame()
        }
      })
    }
  }

  return (
    <div className="spin-to-win-container">
      {/* Confetti Canvas */}
      <canvas
        ref={confettiRef}
        className="confetti-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Left Combined Section - Spinner and Prizes */}
      <div className="left-combined-section">
        {/* Spinner Section */}
        <div className="spinner-section">
          <h2 className="spinner-title">Spin to Win</h2>

          <div className="spinner-container">
            <div className={`spinner-circle ${isSpinning ? "spinning" : ""}`}>
              <div className="spinner-inner">
                <div className="spinner-percentage">70,00%</div>
                <div className="spinner-label">Winning Chance</div>
              </div>
            </div>
            <div className={`spinner-pointer ${isSpinning ? "spinning" : ""}`}></div>
          </div>

          <button className="spin-demo-btn" onClick={handleDemoSpin} disabled={isSpinning}>
            <span className="spin-btn-content">
              <RotateCcw className="spin-btn-icon" />
              <span className="spin-btn-label">Demo Spin</span>
            </span>
            <span className="spin-btn-count">1</span>
          </button>
        </div>

        {/* Prizes Section */}
        <div className="prizes-section">
          <div className="prize-item">
            <img src="Images/braclet.png" />
          </div>

          <div className="prize-item">
            <img src="Images/watch.png" alt="Luxury Watch" />
          </div>

          <div className="prize-item">
            <img src="\Images\iPhone.png" alt="iPhone" />
            <div className="prize-multiplier">4x</div>
          </div>

          <div className="prize-item">
            <img src="/Images/bag.png" alt="Designer Handbag" />
          </div>
        </div>
      </div>

      {/* Right Combined Section - Prize Info and Instant Win */}
      <div className="combined-section">
        {/* Prize Info Section */}
        <div className="prize-info">
          <h3 className="prize-info-title">Cartier Love Bracelet</h3>
          <p className="prize-info-subtitle">Cash Alternative: $5000</p>
          <img
            src="/Images/braclet.png"
            alt="Cartier Love Bracelet"
            className="prize-info-image"
          />
        </div>

        {/* Instant Win Section */}
        <div className="instant-win">
          <h3 className="instant-win-title">Instant Win</h3>

          <p className="instant-win-description">
            At PowerWin, you don't have to wait for the final draw to win! With our Instant Win system, you have the
            chance to walk away RIGHT NOW with a top-tier prize.
          </p>

          <div className="instant-win-section">
            <h4>How does it work?</h4>
            <ul className="instant-win-list">
              <li>Choose one of the 4 available prizes:</li>
              <li>- Cartier Love Bracelet</li>
              <li>- Hublot Classic Fusion Titanium 38mm</li>
              <li>- iPhone 16 Pro Max 256GB</li>
              <li>- Hermes Birkin Bag</li>
              <li>
                Select the number of tickets (maximum 500) – the more you buy, the higher your win chance (up to 80%).
              </li>
              <li>Pay for your tickets and return to this page.</li>
              <li>You'll get one single Spin for the selected prize. If luck is on your side, you win it instantly!</li>
            </ul>
          </div>

          <div className="instant-win-section">
            <h4>Important Rules:</h4>
            <ul className="instant-win-list">
              <li>You only get one Spin per purchase.</li>
              <li>You can select only one prize from the 4 for each attempt.</li>
              <li>Your win chance is clearly displayed before payment.</li>
            </ul>
          </div>

          <p className="total-prizes">
            Total prizes available in this round: $10,000
            <br />
            (4x iPhone 16 Pro Max, 1x Cartier Love Bracelet, 1x Hublot Classic Fusion Titanium 38mm, 1x Hermes Birkin
            Bag)
          </p>
        </div>
      </div>
    </div>
  )
}
