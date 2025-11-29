import { useEffect, useState } from "react";
import "../../styles/WhatWeDo/ReadyToGetStarted.css";

type WhatWeDoData = {
  ready_title: string;
  ready_subtext: string;
  ready_button_1: string;
  ready_button_2: string;
};

const ReadyToGetStarted = () => {
  const [data, setData] = useState<WhatWeDoData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/what-we-do")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching ReadyToGetStarted data:", err));
  }, []);

  if (!data) return null;

  return (
    <section className="ready-section">
      <div className="ready-container">
        <h2 className="ready-title">{data.ready_title}</h2>
        <p className="ready-subtext">{data.ready_subtext}</p>
        <div className="ready-buttons">
          <button className="ready-btn-primary">{data.ready_button_1}</button>
          <button className="ready-btn-secondary">{data.ready_button_2}</button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
