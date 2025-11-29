import  { useEffect, useState } from "react";
import "../../styles/WhatWeDo/OurApproach.css";

type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

type WhatWeDoData = {
  approach_intro?: string;      
  approach_steps?: ApproachStep[];
};

const OurApproach = () => {
  const [data, setData] = useState<WhatWeDoData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/what-we-do")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching approach data:", err));
  }, []);

  if (!data) return null;

  const steps = Array.isArray(data.approach_steps) ? data.approach_steps : [];

  return (
    <section className="approach-section">
      <div className="approach-header">
        <h2 className="approach-title">Our Approach</h2>
        {data.approach_intro && (
          <p className="approach-intro">{data.approach_intro}</p>
        )}
      </div>

      <div className="approach-grid">
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <div className="approach-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))
        ) : (
          <p className="approach-empty">No approach steps available.</p>
        )}
      </div>
    </section>
  );
};

export default OurApproach;
