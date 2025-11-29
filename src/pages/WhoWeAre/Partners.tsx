import { useEffect, useState } from "react";
import "../../styles/WhoWeAre/Partners.css";

type Partner = {
  id: number;
  name: string;
  image: string;
  alt_text: string;
  link: string | null;
};

function Partners() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    
    fetch("http://127.0.0.1:8000/api/trusted-partners")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error("Error fetching partners:", err));
  }, []);

  const renderLogo = (partner: Partner) => {
    const imageUrl = partner.image.startsWith("/images")
      ? `http://127.0.0.1:8000${partner.image}`
      : `http://127.0.0.1:8000/images/${partner.image}`;

    return (
      <a
        href={partner.link || "#"}
        key={partner.id}
        className="partner-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imageUrl}
          alt={partner.alt_text || partner.name}
          className="partner-logo"
        />
      </a>
    );
  };

  return (
    <section className="partners-section">
      <div className="partners-header">
        <h2 className="partners-title">Our Network & Partners</h2>
        <p className="partners-subtitle">
          We collaborate with development partners, financial institutions, and feminist enterprises across Africa and globally.
        </p>
      </div>

      <div className="partners-grid">
        {partners.length > 0 ? (
          partners.map(renderLogo)
        ) : (
          <p>Loading partner logos...</p>
        )}
      </div>

      <p className="partners-note">
        Click on any logo to learn more about our partnership.
      </p>
    </section>
  );
}

export default Partners;
