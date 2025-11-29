import { useEffect, useState } from "react";
import "../../styles/WhatWeDo/WhatWeDo.css";

type WhatWeDoData = {
  whatwedo_title: string;
  whatwedo_description: string;
  whatwedo_button_1: string;
  whatwedo_button_2: string;
  whatwedo_image: string;
};

const WhatWeDo = () => {
  const [data, setData] = useState<WhatWeDoData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/what-we-do")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching WhatWeDo data:", err));
  }, []);

  if (!data) return null;

  return (
    <section className="whatwedo-section">
      <div className="whatwedo-container">
        <div className="whatwedo-text">
          <h2 className="whatwedo-title">{data.whatwedo_title}</h2>
          <p className="whatwedo-description">{data.whatwedo_description}</p>
          <div className="whatwedo-buttons">
            <button className="btn-primary">{data.whatwedo_button_1}</button>
            <button className="btn-secondary">{data.whatwedo_button_2}</button>
          </div>
        </div>
        <div className="whatwedo-image">
          <img src={data.whatwedo_image} alt="Team collaborating on strategy" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
