import Avatar from "@mui/material/Avatar"
import PersonIcon from "@mui/icons-material/Person"
import "./winner-participant.css"

const winnersData = [
  { name: "Hidden", time: "4-11 22:17", prize: "$5000 - Cartier Love Bracelet" },
  { name: "Love83", time: "4-11 22:17", prize: "$8000 - Hermes Birkin" },
  { name: "Hidden", time: "4-11 22:17", prize: "$1000 - iPhone 16 Pro Max" },
  { name: "Love83", time: "4-11 22:17", prize: "$8000 - Hermes Birkin" },
  { name: "Love83", time: "4-11 22:17", prize: "$8000 - Hermes Birkin" },
  { name: "Love83", time: "4-11 22:17", prize: "$8000 - Hermes Birkin" },
  { name: "Hidden", time: "4-11 22:17", prize: "$2000 - MacBook Pro" },
  { name: "Love83", time: "4-11 22:17", prize: "$3000 - Rolex Watch" },
  { name: "Hidden", time: "4-11 22:17", prize: "$1500 - iPad Pro" },
  { name: "Love83", time: "4-11 22:17", prize: "$4000 - Gaming Setup" },
]

const participantsData = [
  { name: "Hidden", time: "4-11 22:17", tickets: "9292929292" },
  { name: "Love83", time: "4-11 22:17", tickets: "9222929292" },
  { name: "Hidden", time: "4-11 22:17", tickets: "2929292929" },
  { name: "Love83", time: "4-11 22:17", tickets: "2020292828" },
  { name: "Hidden", time: "4-11 22:17", tickets: "1818181818" },
  { name: "Love83", time: "4-11 22:17", tickets: "1717171717" },
  { name: "Hidden", time: "4-11 22:17", tickets: "1616161616" },
  { name: "Love83", time: "4-11 22:17", tickets: "1515151515" },
  { name: "Hidden", time: "4-11 22:17", tickets: "1414141414" },
  { name: "Love83", time: "4-11 22:17", tickets: "1313131313" },
]

export default function WinnersParticipants() {
  return (
    <div className="winners-participants-container">
      {/* Spin to Win Winners Section */}
      <div className="section-card">
        <h2 className="section-title" style={{ marginBottom: '15px', marginTop: '0' }}>Spin to Win Winners</h2>
        <div style={{ display: 'flex', gap: '0px', marginBottom: '20px',marginRight: '20px',justifyContent: 'space-around' }}>
          <button className="winner-section-btn">Participant Name</button>
          <button className="winner-section-btn">Provably Fair</button>
        </div>

        <div className="data-table">
          <div className="table-header">
            <div className="table-header-cell">Participants</div>
            <div className="table-header-cell">Time</div>
            <div className="table-header-cell">Prize</div>
          </div>

          {winnersData.map((winner, index) => (
            <div key={index} className="table-row">
              <div className="participant-cell bold-avatar-cell">
                <Avatar sx={{ bgcolor: "#fff", width: 48, height: 48 }}>
                  <PersonIcon sx={{ color: "#000", fontSize: 32 }} />
                </Avatar>
                <span className="participant-name">{winner.name}</span>
              </div>
              <div className="time-cell">{winner.time}</div>
              <div className="prize-cell">{winner.prize}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PowerWin Participants Section */}
      <div className="section-card">
        <h2 className="section-title" style={{ marginBottom: '15px', marginTop: '0' }}>PowerWin Participants</h2>

        <div className="search-container">
          <input type="text" placeholder="Participant Name" className="search-input" />
        </div>

        <div className="data-table">
          <div className="table-header participants-table-header">
            <div className="table-header-cell">Participants</div>
            <div className="table-header-cell">Time</div>
            <div className="table-header-cell">No. of Tickets</div>
          </div>

          {participantsData.map((participant, index) => (
            <div key={index} className="table-row participants-table-row">
              <div className="participant-cell bold-avatar-cell">
                <Avatar sx={{ bgcolor: "#fff", width: 48, height: 48 }}>
                  <PersonIcon sx={{ color: "#000", fontSize: 32 }} />
                </Avatar>
                <span className="participant-name">{participant.name}</span>
              </div>
              <div className="time-cell">{participant.time}</div>
              <div className="tickets-cell">{participant.tickets}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
