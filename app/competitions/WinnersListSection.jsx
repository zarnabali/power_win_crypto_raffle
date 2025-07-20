import React from 'react';

export const WinnersListSection = () => {
  // Navigation links data
  const navigationColumns = [
    {
      links: [
        { text: "Home", href: "#" },
        { text: "Winners", href: "#" },
        { text: "FAQ", href: "#" },
        { text: "My Account", href: "#" },
      ],
    },
    {
      links: [
        { text: "Mobile App", href: "#" },
        { text: "Refferal Win", href: "#" },
        { text: "Fairness", href: "#" },
        { text: "About Us", href: "#" },
      ],
    },
  ];

  // Footer policy links
  const policyLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms & Conditions", href: "#" },
    { text: "Acceptable Use Policy", href: "#" },
    { text: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="w-full py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="mb-6">
              <img src="" alt="PowerWin Logo" className="h-[102px] w-auto" />
            </div>

            <div className="text-[#ffffffb2] text-lg mb-8">
              PowerWin Crypto is the next-generation blockchain raffle platform.
              <br />
              Experience provably fair giveaways with real-time transparency
              powered by Chainlink VRF.
              <br />
              Win luxury prizes through secure, decentralized draws. Built on
              Web3.0 technology.
            </div>

            <div className="text-white text-2xl">18+</div>
          </div>

          {/* Navigation Links - First Column */}
          <div className="col-span-1">
            <nav>
              <ul className="space-y-6 text-3xl">
                {navigationColumns[0].links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-[#2176bb]"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Navigation Links - Second Column */}
          <div className="col-span-1">
            <nav>
              <ul className="space-y-6 text-3xl">
                {navigationColumns[1].links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-[#2176bb]"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Support and Telegram Button */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl mb-4">Support</h3>
              <a
                href="mailto:powerwin@crypto.com"
                className="text-2xl text-[#2176bb] underline"
              >
                powerwin@crypto.com
              </a>
            </div>

            <button className="flex items-center gap-4 bg-[#2176bb] text-white rounded-[20px] h-auto py-4 px-6 text-[40px] w-full">
              <svg className="w-16 h-[53px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="font-normal">Join Telegram</span>
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 bg-white/20 h-px" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <img src="" alt="Copyright" className="h-[37px] w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 my-4 md:my-0">
            {policyLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#ffffff99] text-lg md:text-[26px] hover:text-white"
              >
                {link.text}
              </a>
            ))}
          </div>

          <div>
            <div className="flex gap-4">
              {/* Social Media Icons */}
              <a href="#" className="text-white hover:text-[#2176bb]">
                <img src="" alt="Social Icon" className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#2176bb]">
                <img src="" alt="Social Icon" className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#2176bb]">
                <img src="" alt="Social Icon" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 