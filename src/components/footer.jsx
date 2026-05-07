import React from "react";

import facebook from "../assets/icons/facebook.png";
import spotify from "../assets/icons/spotify.png";
import youtube from "../assets/icons/youtube.png";

function AppFooter() {
  const socialLinks = [
    {
      icon: facebook,
      link: "https://www.facebook.com/BayaanOfficial/",
      alt: "Facebook",
    },
    {
      icon: spotify,
      link: "https://open.spotify.com/artist/3atMq790wQ7IqjeSO0HFeP?si=jogY_T8dRFy7FXo41ziUaw",
      alt: "Spotify",
    },
    {
      icon: youtube,
      link: "https://www.youtube.com/@BayaanOfficial",
      alt: "YouTube",
    },
  ];

  return (
    <footer
      className="
        bg-yellow-500 text-white
        
        px-4 py-5
        sm:px-6 sm:py-6
        md:px-8 md:py-7
        
        flex flex-row
        items-center
        
        justify-between
        
        gap-5 sm:gap-4 md:gap-6
      "
    >
      {/* LOGO */}
      <div className="w-full sm:w-auto flex sm:justify-start">
        <a
          href="/"
          className="
            font-bold tracking-wide
            text-3xl
            sm:text-4xl
            md:text-5xl
            
            hover:text-black
            transition-colors duration-300
          "
        >
          BAYAAN
        </a>
      </div>

      {/* RIGHT SECTION */}
      <div
        className="
          flex flex-col
          items-end sm:items-end
          gap-2
          w-full sm:w-auto
        "
      >
        {/* SOCIAL ICONS */}
        <div
          className="
            flex items-center
            
            gap-2
            sm:gap-3
            md:gap-4
          "
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative
                
                w-8 h-8
                sm:w-9 sm:h-9
                md:w-10 md:h-10
                lg:w-11 lg:h-11
                
                overflow-hidden
                rounded-lg
              "
            >
              {/* FIRST ICON */}
              <img
                src={social.icon}
                alt={social.alt}
                className="
                  absolute inset-0
                  
                  w-full h-full
                  object-cover
                  
                  transition-transform duration-500
                  group-hover:-translate-y-[140%]
                "
              />

              {/* SECOND ICON */}
              <img
                src={social.icon}
                alt={social.alt}
                className="
                  absolute inset-0
                  
                  w-full h-full
                  object-cover
                  
                  translate-y-[140%]
                  transition-transform duration-500
                  group-hover:translate-y-0
                "
              />
            </a>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <p
          className="
            text-center sm:text-right
            
            text-xs
            sm:text-sm
            md:text-base
            
            leading-relaxed
          "
        >
          Experience the sound of Bayaan.
        </p>
      </div>
    </footer>
  );
}

export default AppFooter;
