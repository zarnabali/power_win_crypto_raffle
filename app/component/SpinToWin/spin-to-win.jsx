"use client"

import { useState, useRef, useEffect } from "react"
import { RotateCcw, X } from "lucide-react"
import "./spin-to-win.css"

export default function SpinToWin() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [debugInfo, setDebugInfo] = useState(null)
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  const confettiRef = useRef(null)

  // Initialize spinner position on mount
  useEffect(() => {
    const spinnerPointer = document.querySelector('.spinner-pointer')
    if (spinnerPointer) {
      const spinnerContainer = document.querySelector('.spinner-container')
      const containerWidth = spinnerContainer.offsetWidth
      const translateX = containerWidth === 150 ? 82.5 : 110
      
      // Set initial position at bottom (270° equivalent)
      spinnerPointer.style.animation = 'none'
      spinnerPointer.style.transition = 'none'
      spinnerPointer.style.transform = `translate(-50%, -50%) translateX(${translateX}px) rotate(0deg)`
    }
  }, [])

  const handleDemoSpin = () => {
    if (isSpinning) return
  
    setIsSpinning(true)
  
    // Get the spinner pointer element
    const spinnerPointer = document.querySelector('.spinner-pointer')
    
    // Calculate the winning and losing sections
    // Red section: 0-252 degrees (70% of 360°)
    // Grey section: 252-360 degrees (30% of 360°)
    const redSectionStart = 0
    const redSectionEnd = 252
    const greySectionStart = 252
    const greySectionEnd = 360
    
    // Generate a random final position
    // 70% chance to land on red, 30% chance to land on grey
    const isWinning = Math.random() < 0.7
    
    let finalAngle
    if (isWinning) {
      // Land on red section (0-252 degrees)
      finalAngle = Math.random() * redSectionEnd
    } else {
      // Land on grey section (252-360 degrees)
      finalAngle = greySectionStart + Math.random() * (greySectionEnd - greySectionStart)
    }
    
    // The pointer starts pointing to the right (0° position)
    // But the spinner's 0° is at the top-right, so we need a 90° offset
    // Calculate how much to rotate clockwise to reach final angle
    let pointerRotation
    if (finalAngle >= 0) {
      // Add 90° offset to align pointer with spinner coordinate system
      pointerRotation = finalAngle + 90
    } else {
      // This shouldn't happen with our angle range, but just in case
      pointerRotation = finalAngle + 450
    }
    
    // Calculate total rotation (multiple full rotations + final position)
    const baseRotations = 3 + Math.random() * 2 // 3-5 full rotations (slower)
    const totalRotation = (baseRotations * 360) + pointerRotation
    
    // Create slow, natural easing animation
    const animationDuration = 6000 // 6 seconds (slower)
    
    // Get the current spinner container size to determine the correct translateX value
    const spinnerContainer = document.querySelector('.spinner-container')
    const containerWidth = spinnerContainer.offsetWidth
    const translateX = containerWidth === 150 ? 82.5 : 110 // Mobile vs desktop
    
    // Clear any existing animations and set initial position
    spinnerPointer.style.animation = 'none'
    spinnerPointer.style.transition = 'none'
    spinnerPointer.style.transform = `translate(-50%, -50%) translateX(${translateX}px) rotate(0deg)`
    
    // Force a reflow to ensure the initial position is set
    spinnerPointer.offsetHeight
    
    // Apply the animation with very slow, natural easing
    // Using a custom cubic-bezier for very gradual deceleration
    spinnerPointer.style.transition = `transform ${animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
    spinnerPointer.style.transform = `translate(-50%, -50%) translateX(${translateX}px) rotate(${totalRotation}deg)`
  
    // Reset after animation and show result
    setTimeout(() => {
      setIsSpinning(false)
      
      // SIMPLIFIED WIN DETECTION LOGIC
      // The finalAngle is the actual position on the circle where we want the pointer to land
      // This is what we calculated the rotation for, so we should use it directly
      const isWin = finalAngle >= redSectionStart && finalAngle < redSectionEnd
      
      // Set debug information for on-screen display
      setDebugInfo({
        finalAngle: finalAngle.toFixed(2),
        pointerRotation: pointerRotation.toFixed(2),
        totalRotation: totalRotation.toFixed(2),
        redSection: `${redSectionStart}-${redSectionEnd}`,
        greySection: `${greySectionStart}-${greySectionEnd}`,
        isWin: isWin,
        landedOn: isWin ? 'RED (WIN)' : 'GREY (LOSE)',
        intendedWin: isWinning
      })
      
      // Debug logging
      console.log('Spin Result:', {
        finalAngle: finalAngle.toFixed(2),
        pointerRotation: pointerRotation.toFixed(2),
        totalRotation: totalRotation.toFixed(2),
        redSection: `${redSectionStart}-${redSectionEnd}`,
        greySection: `${greySectionStart}-${greySectionEnd}`,
        isWin: isWin,
        landedOn: isWin ? 'RED (WIN)' : 'GREY (LOSE)',
        intendedWin: isWinning
      })
      
      if (isWin) {
        setShowCelebration(true)
        triggerConfetti()
        
        // Hide celebration after 3 seconds
        setTimeout(() => {
          setShowCelebration(false)
        }, 3000)
      }
      
      // KEEP THE SPINNER IN FINAL POSITION - NO RESET
      // Only remove the transition so it stays put
      spinnerPointer.style.transition = ''
      
    }, animationDuration)
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
          let originX = (spinnerRect.left + spinnerRect.width / 2 - leftRect.left) / leftRect.width
          originX = Math.max(0, Math.min(1, originX - 0.15)); // Shift left, clamp between 0 and 1
          const originY = (spinnerRect.top + spinnerRect.height / 2 - leftRect.top) / leftRect.height

          // Modern, subtle confetti effect
          const duration = 2000 // Shorter duration
          const animationEnd = Date.now() + duration

          const randomInRange = (min, max) => Math.random() * (max - min) + min

          const frame = () => {
            myConfetti({
              particleCount: randomInRange(2, 4), // Fewer particles
              angle: randomInRange(60, 120), // Narrower spread
              spread: randomInRange(30, 50), // Less spread
              origin: { x: originX, y: originY },
              // Modern, subtle colors
              colors: [
                "#10b981", // Green
                "#3b82f6", // Blue
                "#f59e0b", // Amber
                "#ef4444", // Red
                "#8b5cf6", // Purple
                "#06b6d4"  // Cyan
              ],
              gravity: 0.8, // Faster fall
              scalar: 0.6, // Smaller particles
              drift: randomInRange(-0.3, 0.3), // Less drift
              ticks: 200, // Shorter lifetime
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
        <div className="spinner-section relative w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="spinner-title">Spin to Win</h2>
            {/* Mobile-only How it works button */}
            <button
              className="md:hidden bg-[#18181b] text-white border border-gray-600 rounded-lg px-3 py-1 text-xs font-medium shadow hover:bg-[#232326] transition"
              onClick={() => setShowHowItWorks(true)}
            >
              How it works
            </button>
          </div>

          {/* How it works Modal (Mobile only) */}
          {showHowItWorks && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 md:hidden">
              <div className="bg-[#18181b] rounded-xl shadow-lg max-w-[95vw] w-full mx-2 p-5 relative border border-gray-700 overflow-y-auto max-h-[90vh]">
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  onClick={() => setShowHowItWorks(false)}
                  aria-label="Close"
                >
                  <X size={22} />
                </button>
                <h2 className="text-lg font-semibold mb-2 text-white">PowerWin Crypto – Raffle Rules</h2>
                <div className="text-xs text-gray-300 space-y-3 leading-relaxed text-left">
                  <p><b>1. Organizer</b><br/>This raffle is organized by PowerWin Crypto. For any inquiries, please contact <a href="mailto:support@powerwincrypto.com" className="underline">support@powerwincrypto.com</a>.</p>
                  <p><b>2. Eligibility</b><br/>Participants must be at least 18 years old or of legal age in their jurisdiction.<br/>The raffle is open worldwide, except in jurisdictions where participation is prohibited by law.<br/>Only one account per person is permitted. Any attempt to create multiple accounts will result in disqualification.</p>
                  <p><b>3. How to Participate</b><br/>Users must create an account and connect a crypto wallet for deposit.<br/>Entry is obtained by purchasing one or more tickets to an active raffle using accepted cryptocurrencies (e.g., USDT, ETH).<br/>Each ticket provides:<br/>• One chance to win prizes in the selected raffle.<br/>• One additional spin in the Instant Spin Win system for bonus rewards.<br/>• One spin in the Spin to Win game, where your odds improve based on the number of tickets purchased.</p>
                  <p><b>4. Ticket Limits</b><br/>Users are generally allowed to purchase multiple tickets per raffle.<br/>However, certain raffles may include specific purchase limits, which will be clearly displayed on the raffle page.</p>
                  <p><b>5. Prize Description</b><br/>All prizes for each raffle are clearly listed on their respective pages.<br/>Prizes may include physical items, digital assets, or cryptocurrency.<br/>Prizes are non-exchangeable and non-transferable unless explicitly stated.</p>
                  <p><b>5.1 Spin Systems</b><br/>PowerWin Crypto raffles include access to two separate spin-based reward systems:<br/><b>a) Instant Spin Win</b><br/>This system activates immediately after purchasing a ticket.<br/>The spin result is revealed instantly on screen.<br/>Prizes in this system include smaller bonus rewards, such as:<br/>• Platform credits that can be used to purchase additional raffle tickets, or<br/>• Cash prizes sent directly to the winner's crypto wallet.<br/>Multiple instant prizes can be won during the same raffle period, depending on ticket volume.<br/><b>b) Spin to Win</b><br/>This game is linked to each raffle and features prizes that are displayed on the raffle page.<br/>Each user receives one spin in this game, which is unlocked after purchasing at least one ticket.<br/>The probability of winning during the spin increases based on the total number of tickets purchased by that user.<br/>Spin to Win entries are only valid until the raffle closes or all associated prizes have been claimed.<br/>Results are revealed instantly; winning spins are determined through the same Chainlink VRF process for transparency and fairness.<br/>Prizes are larger in scale and may include crypto rewards, high-value items, or promotional bonuses.</p>
                  <p><b>6. Winner Selection</b><br/>Winners are selected using Chainlink VRF, a decentralized, tamper-proof random number generator.<br/>All results are verifiable on-chain. PowerWin has no manual influence over the draw outcome.</p>
                  <p><b>7. Notifications & Prize Claims</b><br/>Winners will be notified via email within 24 hours of the draw.<br/>Certain rewards, such as physical items or vehicles, may be eligible for delivery depending on availability and location. In such cases, our team will contact the winner directly to coordinate prize fulfillment.<br/>Crypto prizes will be sent directly to the user's registered wallet.<br/>If a winner fails to respond within 14 days, the prize may be forfeited or reassigned.</p>
                  <p><b>8. Taxes and Legal Compliance</b><br/>Participants are solely responsible for reporting and paying any applicable taxes on winnings in their jurisdiction.<br/>PowerWin Crypto is not liable for any tax obligations arising from rewards.</p>
                  <p><b>9. Fraud and Abuse</b><br/>Any form of cheating, manipulation, or abuse (including bot usage, wallet farming, or exploiting system bugs) will result in immediate account termination.<br/>PowerWin reserves the right to disqualify any participant at its sole discretion.</p>
                  <p><b>10. Modifications and Termination</b><br/>Each raffle has a predefined duration. However, if at least 80% of the available tickets are not sold by the original end date, PowerWin may extend the raffle period to allow more users to participate and ensure fair prize allocation.<br/>Any such changes, including extensions, will be clearly communicated on the platform.</p>
                  <p><b>11. Acceptance of Rules</b><br/>By participating in any raffle hosted on PowerWin Crypto, you agree to these rules in full and acknowledge that you understand and accept the risks and mechanics of crypto-based raffles.</p>
                </div>
              </div>
            </div>
          )}

          <div className="spinner-container">
            <div className={`spinner-circle ${isSpinning ? "spinning" : ""}`}>
              <div className="spinner-inner">
                <div className="spinner-percentage">70,00%</div>
                <div className="spinner-label">Winning Chance</div>
              </div>
            </div>
            <div className={`spinner-pointer ${isSpinning ? "spinning" : ""}`}></div>
            
            {/* Visual Debug Markers */}
            <div className="debug-marker red-start" title="Red section start (0°)"></div>
            <div className="debug-marker red-end" title="Red section end (252°)"></div>
            <div className="debug-marker grey-start" title="Grey section start (252°)"></div>
            <div className="debug-marker grey-end" title="Grey section end (360°)"></div>
            
            {/* Landing position marker */}
            {debugInfo && (
              <div 
                className="debug-marker landing-position" 
                title={`Landing at ${debugInfo.finalAngle}°`}
                style={{
                  transform: `translate(-50%, -50%) translateX(110px) rotate(${debugInfo.pointerRotation}deg)`
                }}
              ></div>
            )}
            
            {/* Pointer target marker - where the pointer should be pointing */}
            {debugInfo && (
              <div 
                className="debug-marker pointer-target" 
                title={`Pointer should point at ${debugInfo.finalAngle}°`}
                style={{
                  transform: `translate(-50%, -50%) translateX(110px) rotate(${debugInfo.pointerRotation}deg)`
                }}
              ></div>
            )}
          </div>

          <button className="spin-demo-btn" onClick={handleDemoSpin} disabled={isSpinning}>
            <span className="spin-btn-content">
              <RotateCcw className="spin-btn-icon" />
              <span className="spin-btn-label">Demo Spin</span>
            </span>
            <span className="spin-btn-count">1</span>
          </button>

          {/* Debug Display */}
          {debugInfo && (
            <div className="debug-display">
              <div className="debug-row">
                <span className="debug-label">Landing Angle:</span>
                <span className="debug-value">{debugInfo.finalAngle}°</span>
              </div>
              <div className="debug-row">
                <span className="debug-label">Pointer Rotation:</span>
                <span className="debug-value">{debugInfo.pointerRotation}°</span>
              </div>
              <div className="debug-row">
                <span className="debug-label">Total Rotation:</span>
                <span className="debug-value">{debugInfo.totalRotation}°</span>
              </div>
              <div className="debug-row">
                <span className="debug-label">Red Section:</span>
                <span className="debug-value">{debugInfo.redSection}°</span>
              </div>
              <div className="debug-row">
                <span className="debug-label">Grey Section:</span>
                <span className="debug-value">{debugInfo.greySection}°</span>
              </div>
              <div className="debug-row">
                <span className="debug-label">Result:</span>
                <span className={`debug-value ${debugInfo.isWin ? 'win' : 'lose'}`}>
                  {debugInfo.landedOn}
                </span>
              </div>
              <div className="debug-row">
                <span className="debug-label">Intended:</span>
                <span className="debug-value">{debugInfo.intendedWin ? 'WIN' : 'LOSE'}</span>
              </div>
            </div>
          )}
        </div>

        {/* Prizes Section */}
        <div className="prizes-section mobile-prizes-grid">
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

          {/* Mobile-only: Main prize info box in grid */}
          <div className="mobile-prize-info md:hidden flex items-center justify-center">
            <img
              src="/Images/braclet.png"
              alt="Cartier Love Bracelet"
              className="prize-info-image"
              style={{ display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
      </div>

      {/* Right Combined Section - Prize Info and Instant Win */}
      <div className="combined-section hide-on-mobile" style={{ marginLeft: '20px' }}>
        {/* Prize Info Section */}
        <div className="prize-info">
          <h3 className="prize-info-title">Cartier Love Bracelet</h3>
          <p className="prize-info-subtitle">Cash Alternative: $5000</p>
          <img
            src="/Images/braclet.png"
            alt="Cartier Love Bracelet"
            className="prize-info-image"
            style={{ display: 'block', height: '180px', width: 'auto', margin: '0 auto' }}
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
              <li>1. Choose one of the 4 available prizes:</li>
              <li><strong>- Cartier Love Bracelet</strong></li>
              <li><strong>- Hublot Classic Fusion Titanium 38mm</strong></li>
              <li><strong>- iPhone 16 Pro Max 256GB</strong></li>
              <li><strong>- Hermes Birkin Bag</strong></li>
              <li>
                2. Select the number of tickets (maximum 500) – the more you buy, the higher your win chance (up to 80%).
              </li>
              <li>3. Pay for your tickets and return to this page.</li>
              <li>4. You'll get one single Spin for the selected prize. If luck is on your side, you win it instantly!</li>
            </ul>
          </div>

          <div className="instant-win-section">
            <h4>Important Rules:</h4>
            <ul className="instant-win-list another">
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
