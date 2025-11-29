import  { useEffect, useState } from "react";
import "../../styles/Home/PartnershipStories.css";

type Story = {
  id: number;
  name: string;        // Partner name (Darley, MEDA, CheckUps COVA)
  sector: string;      // Agriculture, Healthcare, Financial Institutions
  description: string; // Story text
  image: string;       // Path from backend (e.g. /images/darley.jpeg)
  alt_text: string;    // Accessibility alt text
};

const PartnershipStories = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/partnership-stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching partnership stories:", err));
  }, []);

  const renderCard = (story: Story) => {
    // Build full image URL
    const imageUrl = story.image.startsWith("/images")
      ? `http://127.0.0.1:8000${story.image}`
      : `http://127.0.0.1:8000/images/${story.image}`;

    return (
      <div className="story-card" key={story.id}>
        <img
          src={imageUrl}
          alt={story.alt_text || `${story.name} ${story.sector} initiative`}
          className="story-image"
        />
        <div className="story-content">
          <div className="story-sector-badge">{story.sector}</div>
          <h3>{story.name}</h3>
          <p>{story.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="stories-section">
      <div className="stories-container">
        <p className="stories-subtitle">FROM INSIGHT TO IMPACT</p>
        <h2 className="stories-title">Our Partnership Stories</h2>

        <div className="stories-cards">
          {stories.length > 0 ? (
            stories.map(renderCard)
          ) : (
            <p>Loading partnership stories...</p>
          )}
        </div>

        <button className="stories-button">See All Case Studies →</button>
      </div>
    </section>
  );
};

export default PartnershipStories;
