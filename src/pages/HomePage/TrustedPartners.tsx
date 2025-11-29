import  { useEffect, useState } from "react";
import "../../styles/Home/TrustedPartners.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Partner = {
  id: number;
  name: string;
  image: string;
  alt_text: string;
  link: string | null;
};

const TrustedPartners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [startIndex, setStartIndex] = useState(0); 

  useEffect(() => {
    
    fetch("http://127.0.0.1:8000/api/trusted-partners")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error("Error fetching trusted partners:", err));
  }, []);

  const renderLogo = (partner: Partner) => {
    const imageUrl = partner.image.startsWith("/images")
      ? `http://127.0.0.1:8000${partner.image}`
      : `http://127.0.0.1:8000/images/${partner.image}`;

    return (
      <a
        key={partner.id}
        href={partner.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} alt={partner.alt_text || partner.name} />
      </a>
    );
  };


  const visiblePartners = partners.slice(startIndex, startIndex + 4);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, partners.length - 4)
    );
  };

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <h2 className="trusted-title">
          TRUSTED BY INDUSTRY LEADERS AND ECOSYSTEM BUILDERS
        </h2>
        <div className="trusted-carousel">
          <button
            className="trusted-arrow left"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <div className="trusted-logos">
            {partners.length > 0 ? (
              visiblePartners.map(renderLogo)
            ) : (
              <p>Loading partner logos...</p>
            )}
          </div>
          <button
            className="trusted-arrow right"
            onClick={handleNext}
            disabled={startIndex >= partners.length - 4}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
