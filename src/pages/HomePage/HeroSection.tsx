import  { useEffect, useState } from "react";
import "../../styles/Home/HeroSection.css";

type HomeData = {
  hero_title: string;
  hero_subtext: string;
  hero_button_1: string;
  hero_button_2: string;
};

const HeroSection = () => {
  const [home, setHome] = useState<HomeData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/home")
      .then((res) => res.json())
      .then((data) => setHome(data))
      .catch((err) => console.error("Error fetching home data:", err));
  }, []);

  if (!home) return null;

  return (
    <section className="hero-section">
      <div className="hero-section-overlay">
        <div className="hero-section-content">
          <h1 className="hero-section-title">{home.hero_title}</h1>
          <p className="hero-section-subtext">{home.hero_subtext}</p>
          <div className="hero-section-buttons">
            <button className="hero-section-btn hero-section-btn-primary">
              {home.hero_button_1}
            </button>
            <button className="hero-section-btn hero-section-btn-secondary">
              {home.hero_button_2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
