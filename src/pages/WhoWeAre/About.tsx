import { useEffect, useState } from "react";
import "../../styles/WhoWeAre/About.css";

type AboutData = {
  title: string;
  subtitle: string;
  description: string; 
  image: string;
  alt_text: string;
};

function About() {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching about section:", err));
  }, []);

  if (!about) {
    return <p>Loading...</p>;
  }

  const imageUrl = about.image.startsWith("/images")
    ? `http://127.0.0.1:8000${about.image}`
    : `http://127.0.0.1:8000/images/${about.image}`;

  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-image-area">
          <img src={imageUrl} alt={about.alt_text} className="about-image" />
        </div>
        <div className="about-text-area">
          <h3 className="about-title">{about.title}</h3>
          <h4 className="about-subtitle">{about.subtitle}</h4>
          {about.description.split("\n").map((para, idx) => (
            <p key={idx} className="about-description">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
