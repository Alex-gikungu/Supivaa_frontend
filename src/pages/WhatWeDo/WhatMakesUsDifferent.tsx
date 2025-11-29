import  { useEffect, useState } from "react";
import "../../styles/WhatWeDo/WhatMakesUsDifferent.css";

type DifferentPoint = {
  title: string;
  description: string;
};

type WhatWeDoData = {
  different_title: string;
  different_points?: DifferentPoint[]; // optional to prevent crash
  different_image: string;
};

const WhatMakesUsDifferent = () => {
  const [data, setData] = useState<WhatWeDoData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/what-we-do")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching WhatMakesUsDifferent data:", err));
  }, []);

  if (!data) return null;

  const points = Array.isArray(data.different_points) ? data.different_points : [];

  return (
    <section className="different-section">
      <div className="different-container">
        <div className="different-text">
          <h2 className="different-title">{data.different_title}</h2>
          <ul className="different-list">
            {points.length > 0 ? (
              points.map((point, index) => (
                <li key={index} className="different-item">
                  <h4 className="item-title">{point.title}</h4>
                  <p className="item-description">{point.description}</p>
                </li>
              ))
            ) : (
              <li className="different-item">
                <p className="item-description">No points available at the moment.</p>
              </li>
            )}
          </ul>
        </div>
        <div className="different-image">
          <img src={data.different_image} alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;

