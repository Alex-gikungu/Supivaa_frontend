import { useEffect, useState } from "react";
import "../../styles/WhoWeAre/Team.css";
import linkedinIcon from "../../assets/images/linkedin.png";

type Person = {
  id: number;
  image: string;
  name: string;
  location: string;
  role: string;
  focus?: string;
  group: string;
};

function Team() {
  const [teamMembers, setTeamMembers] = useState<Person[]>([]);

  useEffect(() => {
    // Fetch team members directly from Laravel backend
    fetch("http://127.0.0.1:8000/api/team-members")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Error fetching team members:", err));
  }, []);

  const renderCard = (person: Person, index: number) => {
    // Ensure image path is correct
    const imageUrl = person.image.startsWith("/images")
      ? `http://127.0.0.1:8000${person.image}`
      : `http://127.0.0.1:8000/images/${person.image}`;

    return (
      <div className="team-card" key={`${person.name}-${index}`}>
        <div className="team-photo-container">
          <img
            src={imageUrl}
            alt={person.name}
            className="team-photo"
          />
        </div>
        <div className="team-content">
          <h4 className="team-name">{person.name}</h4>
          <p className="team-location">{person.location}</p>
          <p className="team-role">{person.role}</p>
          {person.focus && <p className="team-focus">{person.focus}</p>}
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
        </div>
      </div>
    );
  };

  const management = teamMembers.filter((m) => m.group === "management");
  const consultants = teamMembers.filter((m) => m.group === "consultants");
  const interns = teamMembers.filter((m) => m.group === "interns");
  const advisors = teamMembers.filter((m) => m.group === "advisors");

  return (
    <section className="team-section">
      <div className="team-header">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-subtitle">
          A diverse team of professionals dedicated to advancing gender-lens investing and climate action across Africa.
        </p>
      </div>

      <div className="team-group">
        <h3 className="team-subgroup-title">Management & Administration</h3>
        <div className="team-grid">{management.map(renderCard)}</div>
      </div>

      <div className="team-group">
        <h3 className="team-subgroup-title">Consultants, Analysts & Associates</h3>
        <div className="team-grid">{consultants.map(renderCard)}</div>
      </div>

      <div className="team-group">
        <h3 className="team-subgroup-title">Interns</h3>
        <div className="team-grid">{interns.map(renderCard)}</div>
      </div>

      <div className="team-group">
        <h3 className="team-subgroup-title">Advisors</h3>
        <div className="team-grid">{advisors.map(renderCard)}</div>
      </div>
    </section>
  );
}

export default Team;
