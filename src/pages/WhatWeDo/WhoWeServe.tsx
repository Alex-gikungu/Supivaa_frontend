import  { useEffect, useState } from "react";
import "../../styles/WhatWeDo/WhoWeServe.css";

type ServeCard = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

type WhatWeDoData = {
  whatwedo_intro: string;
  serve_title: string;
  serve_cards?: ServeCard[];
};

const WhoWeServe = () => {
  const [data, setData] = useState<WhatWeDoData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/what-we-do")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching WhoWeServe data:", err));
  }, []);

  if (!data) return null;

  return (
    <section className="serve-section">
      <div className="serve-header">
        <h2 className="serve-title">{data.serve_title}</h2>
        {data.whatwedo_intro && (
          <p className="serve-intro">{data.whatwedo_intro}</p>
        )}
      </div>

      <div className="serve-grid">
        {Array.isArray(data.serve_cards) && data.serve_cards.length > 0 ? (
          data.serve_cards.map((card, index) => (
            <div className="serve-card" key={index}>
              <div className="serve-icon">
                <img src={card.icon} alt={`${card.title} icon`} />
              </div>
              <h3 className="serve-card-title">{card.title}</h3>
              <p className="serve-card-description">{card.description}</p>
              <a href={card.link} className="serve-link">
                Learn More →
              </a>
            </div>
          ))
        ) : (
          <p className="serve-empty">No serve cards available.</p>
        )}
      </div>
    </section>
  );
};

export default WhoWeServe;
