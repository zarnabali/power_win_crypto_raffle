import React from 'react';

export const PrizeDisplaySection = () => {
  // Data for the prize display options
  const prizeOptions = [
    {
      id: "live-winners",
      title: "Live Winners",
      icon: null,
      variant: "glass",
    },
    {
      id: "provably-fair",
      title: "Provably Fair",
      icon: (
        <svg className="w-[61px] h-[52px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      variant: "glass",
    },
    {
      id: "leaderboard",
      title: "Leaderboard",
      icon: null,
      variant: "dark",
    },
  ];

  return (
    <div className="flex items-center gap-4 justify-center px-[88px] mt-10">
      {prizeOptions.map((option) => (
        <div
          key={option.id}
          className={`flex h-32 items-center justify-center gap-3.5 px-6 py-[38px] rounded-[15px] border-[none] ${
            option.variant === "dark"
              ? "bg-[linear-gradient(360deg,rgba(22,22,22,1)_0%,rgba(0,0,0,0)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(243,243,243,0.6)_0%,rgba(107,107,107,0)_100%)]"
          } before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[15px] before:[background:linear-gradient(180deg,rgba(132,132,132,0.2)_0%,rgba(255,255,255,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative`}
          style={{ width: option.id === "provably-fair" ? "400px" : "360px" }}
        >
          <div className="flex items-center gap-6">
            {option.icon && option.icon}
            <div className="[font-family:'Gilroy-Medium-☞',Helvetica] font-normal text-white text-[42px] tracking-[0] leading-[normal]">
              {option.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 