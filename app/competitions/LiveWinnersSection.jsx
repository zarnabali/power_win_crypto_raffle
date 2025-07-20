import React from 'react';

export const LiveWinnersSection = () => {
  // Sample live winners data
  const liveWinners = [
    { id: 1, name: "Winner 1", prize: "$100", time: "2 min ago" },
    { id: 2, name: "Winner 2", prize: "$50", time: "5 min ago" },
    { id: 3, name: "Winner 3", prize: "$25", time: "8 min ago" },
    { id: 4, name: "Winner 4", prize: "$75", time: "12 min ago" },
  ];

  return (
    <div className="px-[88px] mt-10">
      <h2 className="text-white text-[42px] font-medium mb-6 [font-family:'Gilroy-Medium-☞',Helvetica]">
        Live Winners
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {liveWinners.map((winner) => (
          <div
            key={winner.id}
            className="bg-gradient-to-b from-white/10 to-gray-500/10 backdrop-blur-[2.5px] rounded-[15px] p-6 border border-white/20 live-winner interactive-card"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-white text-[28px] font-medium [font-family:'Gilroy-Medium-☞',Helvetica]">
                  {winner.name}
                </h3>
                <p className="text-green-400 text-[24px] font-medium [font-family:'Gilroy-Medium-☞',Helvetica]">
                  {winner.prize}
                </p>
              </div>
              <div className="text-white/70 text-[20px] [font-family:'Gilroy-Regular-☞',Helvetica]">
                {winner.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 