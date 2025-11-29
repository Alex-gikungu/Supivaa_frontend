import { useEffect, useState } from "react";
import "../../styles/WhoWeAre/MissionVision.css";

type AboutData = {
  mission: string;
  mission_image: string;
  mission_alt: string;
  vision: string;
  vision_image: string;
  vision_alt: string;
};

function MissionVision() {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching mission/vision:", err));
  }, []);

  if (!about) {
    return <p>Loading...</p>;
  }

  const missionUrl = about.mission_image.startsWith("/images")
    ? `http://127.0.0.1:8000${about.mission_image}`
    : `http://127.0.0.1:8000/images/${about.mission_image}`;

  const visionUrl = about.vision_image.startsWith("/images")
    ? `http://127.0.0.1:8000${about.vision_image}`
    : `http://127.0.0.1:8000/images/${about.vision_image}`;

  return (
    <section className="mission-vision-section">
      <div className="mission-vision-wrapper">
        <div className="card">
          <img src={missionUrl} alt={about.mission_alt} className="card-icon" />
          <h3 className="card-title">Our Mission</h3>
          <p className="card-text">{about.mission}</p>
        </div>

        <div className="card">
          <img src={visionUrl} alt={about.vision_alt} className="card-icon" />
          <h3 className="card-title">Our Vision</h3>
          <p className="card-text">{about.vision}</p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;