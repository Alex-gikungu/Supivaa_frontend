import  { useEffect, useState } from "react";
import "../../styles/WhoWeAre/Values.css";

type Value = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt_text: string;
};

function Values() {
  const [values, setValues] = useState<Value[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/values")
      .then((res) => res.json())
      .then((data) => setValues(data))
      .catch((err) => console.error("Error fetching values:", err));
  }, []);

  const renderCard = (value: Value) => {
    const imageUrl = value.image.startsWith("/images")
      ? `http://127.0.0.1:8000${value.image}`
      : `http://127.0.0.1:8000/images/${value.image}`;

    return (
      <div className="value-card" key={value.id}>
        <img
          src={imageUrl}
          alt={value.alt_text || value.title}
          className="value-icon"
        />
        <h3 className="value-title">{value.title}</h3>
        <p className="value-text">{value.description}</p>
      </div>
    );
  };

  return (
    <section className="values-section">
      <div className="values-header">
        <h2 className="values-title">What Guides Us</h2>
        <p className="values-subtitle">
          Our values shape how we work and who we work with.
        </p>
      </div>

      <div className="values-grid">
        {values.length > 0 ? (
          values.map(renderCard)
        ) : (
          <p>Loading values...</p>
        )}
      </div>
    </section>
  );
}

export default Values;
