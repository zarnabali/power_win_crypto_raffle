"use client"

import React from "react"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import "./buy-tickets-section.css"

export default function BuyTicketsSection() {
  const [ticketCount, setTicketCount] = useState(125)
  const [sliderValue, setSliderValue] = useState(25) // 25% of max (500)

  const minTickets = 1
  const maxTickets = 500
  const ticketPrice = 2.5 // $2.5 per ticket

  const totalPrice = ticketCount * ticketPrice

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value)
    setSliderValue(value)
    const tickets = Math.round((value / 100) * maxTickets)
    setTicketCount(Math.max(minTickets, tickets))
  }

  const handlePresetClick = (preset) => {
    let newValue = 0
    let newTickets = 0

    switch (preset) {
      case "Min":
        newValue = 0.2 // 0.2% for minimum
        newTickets = minTickets
        break
      case "10%":
        newValue = 10
        newTickets = Math.round(maxTickets * 0.1)
        break
      case "25%":
        newValue = 25
        newTickets = Math.round(maxTickets * 0.25)
        break
      case "50%":
        newValue = 50
        newTickets = Math.round(maxTickets * 0.5)
        break
      case "Max":
        newValue = 100
        newTickets = maxTickets
        break
    }

    setSliderValue(newValue)
    setTicketCount(newTickets)
  }

  const handleMinusClick = () => {
    const newTickets = Math.max(minTickets, ticketCount - 1)
    setTicketCount(newTickets)
    setSliderValue((newTickets / maxTickets) * 100)
  }

  const handlePlusClick = () => {
    const newTickets = Math.min(maxTickets, ticketCount + 1)
    setTicketCount(newTickets)
    setSliderValue((newTickets / maxTickets) * 100)
  }

  return (
    <div className="buy-tickets-container">
      {/* Left Column - Buy Tickets */}
      <div className="buy-tickets-column">
        <h2 className="column-title">Buy Tickets</h2>

        {/* Preset Buttons */}
        <div className="preset-buttons">
          {["Min", "10%", "25%", "50%", "Max"].map((preset) => (
            <button
              key={preset}
              className={`preset-button ${preset === "25%" ? "active" : ""}`}
              onClick={() => handlePresetClick(preset)}
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Ticket Display - moved to slider-container */}
        {/* <div className="ticket-display">
          <div className="ticket-count">{ticketCount} tickets</div>
        </div> */}

        {/* Slider Section */}
        <div className="slider-section">
          <button className="slider-control" onClick={handleMinusClick}>
            <Minus size={16} />
          </button>

          <div className="slider-container" style={{ position: 'relative' }}>
            {/* Ticket count cloud above slider thumb */}
            <div
              className="ticket-count-slider"
              style={{
                position: 'absolute',
                left: `calc(${sliderValue}% - 40px)`, // 40px is half the width of the cloud for centering
                top: '-60px', // increased space between cloud and slider
                zIndex: 2,
                pointerEvents: 'none',
                // transition: 'left 0.2s cubic-bezier(.4,0,.2,1)', // removed for instant movement
              }}
            >
              <div className="ticket-count">{ticketCount} tickets</div>
            </div>
            <input
              type="range"
              min="0.2"
              max="100"
              step="0.1"
              value={sliderValue}
              onChange={handleSliderChange}
              className="ticket-slider"
            />
          </div>

          <button className="slider-control" onClick={handlePlusClick}>
            <Plus size={16} />
          </button>
        </div>

        {/* Participate Button */}
        <button className="participate-button">Participate Now - ${totalPrice.toFixed(1)}</button>
      </div>

      {/* Right Column - Description */}
      <div className="description-column" style={{ position: 'relative' }}>
        {/* Ellipse shadow under car image */}
        <div className="ellipse-shadow"></div>
        <h2 className="column-title">Description</h2>
        <div className="description-content">
          <h3 className="model-title">Model: Lamborghini Aventador LP 770-4 SVJ Cabrio</h3>
          <p className="description-text">
            Lamborghini Aventador SVJ Roadster is a limited-edition open-top supercar that blends extreme performance
            with unmistakable Italian design. Powered by a naturally aspirated 6.5L V12 engine delivering 770
            horsepower, it accelerates from 0 to 100 km/h in just 2.9 seconds. With advanced aerodynamics (ALA 2.0
            system), carbon fiber construction, and all-wheel drive, the SVJ Roadster offers an exhilarating driving
            experience both on the road and track—while letting you enjoy the raw sound of the V12 with the roof down.
          </p>
        </div>
      </div>
    </div>
  )
}
