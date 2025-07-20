import React from 'react';

export const CompetitionsSection = () => {
  // Navigation items data
  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "competitions", label: "Competitions" },
    { id: "winners", label: "Winners" },
    { id: "referral", label: "Refferal Win" },
  ];

  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-full max-w-[1174px]">
        <div className="w-full h-[132px] bg-transparent gap-[32px] p-0 flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`w-[269px] h-[132px] rounded-[100px] border-[1.5px] border-solid border-white backdrop-blur-[5px] 
                ${
                  item.id === "competitions"
                    ? "bg-[#ffffff66] text-[#000000d9]"
                    : "bg-[#ffffff1a] text-white"
                } 
                [font-family:'Gilroy-Regular-☞',Helvetica] text-[34px] font-normal px-4 flex items-center justify-center`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 