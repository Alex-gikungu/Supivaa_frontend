import  { useEffect, useState } from "react";
import "../../styles/WhoWeAre/OurStory.css";

type AboutData = {
  story?: string;
  story_image?: string;
  story_alt?: string;
};

function OurStory() {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching story:", err));
  }, []);

  if (!about) {
    return <p>Loading...</p>;
  }

  
  let storyUrl = "";
  if (about.story_image) {
    storyUrl = about.story_image.startsWith("/images")
      ? `http://127.0.0.1:8000${about.story_image}`
      : `http://127.0.0.1:8000/images/${about.story_image}`;
  }

  return (
    <section className="our-story-section">
      <div className="our-story-wrapper">
        <div className="our-story-text">
          <h2 className="our-story-title">Our Story</h2>
          {about.story
            ? about.story.split("\n").map((para, idx) => (
                <p key={idx} className="our-story-paragraph">
                  {para}
                </p>
              ))
            : <p className="our-story-paragraph">Story content not available.</p>}
        </div>

        {storyUrl && (
          <div className="our-story-image-area">
            <img
              src={storyUrl}
              alt={about.story_alt || "Our Story image"}
              className="our-story-image"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default OurStory;
