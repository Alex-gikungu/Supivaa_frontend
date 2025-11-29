import  { useEffect, useState } from "react";
import "../../styles/Home/IntentImpact.css";

type HomeData = {
  challenge_heading: string;
  challenge_paragraph: string;
  stat_1_value: string;
  stat_1_text: string;
  stat_2_value: string;
  stat_2_text: string;
};

const IntentImpact = () => {
  const [home, setHome] = useState<HomeData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/home")
      .then((res) => res.json())
      .then((data) => setHome(data))
      .catch((err) => console.error("Error fetching home data:", err));
  }, []);

  if (!home) return null;

  return (
    <section className="intent-impact-section">
      <div className="intent-impact-container">
        <div className="intent-impact-left">
          <div className="intent-impact-challenge">
            <h3 className="intent-impact-heading">{home.challenge_heading}</h3>
            <p className="intent-impact-paragraph">{home.challenge_paragraph}</p>
          </div>
        </div>
        <div className="intent-impact-right">
          <div className="impact-stat teal">
            <span className="impact-value">{home.stat_1_value}</span>
            <p>{home.stat_1_text}</p>
          </div>
          <div className="impact-stat peach">
            <span className="impact-value">{home.stat_2_value}</span>
            <p>{home.stat_2_text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntentImpact;
