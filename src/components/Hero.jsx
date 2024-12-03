import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import content from "../mocks/content";

const Hero = () => {
  const { language } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [heroContent, setHeroContent] = useState({});

  useEffect(() => {
    setHeroContent(content.hero);
  }, []);

  return (
    <section className="relative text-white text-center py-32 transition-all ease-in-out">
      {/* Hero Arka Planı */}
      <div className="absolute top-0 left-0 w-full h-full z-0 flex">
        {/* Sol Kısım (60%) */}
        <div
          className={`w-3/5 h-full ${
            isDarkMode ? "bg-[#171043]" : "bg-[#4731d3]"
          }`}
        ></div>

        {/* Sağ Kısım (40%) */}
        <div
          className={`w-2/5 h-full ${
            isDarkMode ? "bg-[#1a210b]" : "bg-[#cbf281]"
          }`}
        >
          {/* Dark Mode Switch */}
          <div className="relative top-4 left-4">
            <label
              htmlFor="dark-toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="dark-toggle"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className="checkbox hidden"
                />
                <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${
                    isDarkMode
                      ? "transform translate-x-6 bg-white"
                      : "bg-gray-800"
                  }`}
                ></div>
              </div>
              <div className="ml-3 dark:text-white text-gray-900 font-medium">
                {isDarkMode
                  ? content.buttons.lightMode[language]
                  : content.buttons.darkMode[language]}
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-9 left-0 w-full bg-transparent z-10">
        <div className="container mx-auto px-6 flex justify-between items-center text-2xl font-bold text-[#cbf281] dark:text-[#cbf281]">
          almila
        </div>
      </header>

      {/* Hero Content */}
      <div className="pt-32 container mx-auto flex flex-col md:flex-row items-center justify-between gap-9 px-6 relative z-10">
        {/* Hero Left */}
        <div className="hero-left flex-1 text-center md:text-left">
          <h1 className="text-4xl text-[#cbf281] font-bold leading-tight dark:text-white">
            {content.hero.title[language]}
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            {content.hero.description[language]}
          </p>
          {/* GitHub ve LinkedIn Butonları */}
          <div className="mt-6 flex gap-2 justify-center md:justify-start">
            <a
              href="https://github.com/"
              className="flex items-center justify-center px-6 py-3 bg-white text-[#4731d3] rounded-md dark:bg-[#252128] dark:text-[#FFFFFF]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i>{" "}
              {content.buttons.github[language]}
            </a>
            <a
              href="https://www.linkedin.com/in/"
              className="flex items-center justify-center px-6 py-3 bg-white text-[#4731d3] rounded-md dark:bg-[#252128] dark:text-[#FFFFFF] "
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin mr-2"></i>{" "}
              {content.buttons.linkedin[language]}
            </a>
          </div>
        </div>

        {/* Hero Right */}
        <div className="hero-right flex-1 mt-8 md:mt-0 relative">
          <img
            src="/my-image.png"
            alt="Portfolio Illustration"
            className="w-[350px] h-[375px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
