import  { useEffect, useState } from "react";
import "../../styles/Home/IntegratedApproach.css";

type ApproachStep = {
  id: number;
  title: string;
  description: string;
  image: string | null;       // backend may return null
  badge_color: string;
};

const IntegratedApproach = () => {
  const [steps, setSteps] = useState<ApproachStep[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/approach-steps")
      .then((res) => res.json())
      .then((data) => setSteps(data))
      .catch((err) => console.error("Error fetching approach steps:", err));
  }, []);

  const renderCard = (step: ApproachStep) => {
    // Defensive check + fallback
    let imageUrl = "http://127.0.0.1:8000/images/default.png"; // fallback image
    if (step.image) {
      imageUrl = step.image.startsWith("/images")
        ? `http://127.0.0.1:8000${step.image}`
        : `http://127.0.0.1:8000/images/${step.image}`;
    }

    return (
      <div
        className={`approach-card card-${step.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        key={step.id}
      >
        <div className={`approach-icon-badge badge-${step.badge_color}`}>
          <img
            src={imageUrl}
            alt={`${step.title} Icon`}
            className="approach-icon"
          />
        </div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    );
  };

  return (
    <section className="approach-section">
      <div className="approach-container">
        <h2 className="approach-title">Our Integrated Approach to Impact</h2>
        <p className="approach-intro">
          We partner with leaders across Africa’s investment ecosystem to refine
          their value proposition, articulate their gender-smart strategies, and
          build stronger, more connected markets for impact.
        </p>

        <div className="approach-cards">
          {steps.length > 0 ? (
            steps.map(renderCard)
          ) : (
            <p>Loading approach steps...</p>
          )}
        </div>

        <button className="approach-button">Explore Our Services →</button>
      </div>
    </section>
  );
};

export default IntegratedApproach;



