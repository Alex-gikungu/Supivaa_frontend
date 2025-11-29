import "../../styles/WhoWeAre/WorkWithUs.css"; 

const WorkWithUs = () => {
  return (
    <section className="work-section">
      <div className="work-container">
        <h2 className="work-title">Want to Work With Us?</h2>
        <p className="work-subtext">
          Whether you're a feminist enterprise seeking investment readiness support or a funder looking to strengthen your gender-climate impact, we'd love to hear from you.
        </p>
        <div className="work-buttons">
          <button className="work-btn-primary">Get in Touch</button>
          <button className="work-btn-secondary">Join Our Team</button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
