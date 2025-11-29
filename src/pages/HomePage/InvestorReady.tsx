import "../../styles/Home/InvestorReady.css"; // ✅ new file with renamed classes

const InvestorReady = () => {
  return (
    <section className="ready-investor-section">
      <div className="ready-investor-container">
        <h2 className="ready-investor-title">Are You Investor-Ready?</h2>
        <p className="ready-investor-subtext">
          Does your gender-climate strategy meet key funder metrics? Take our free diagnostic to get an instant benchmark and actionable next steps.
        </p>
        <div className="ready-investor-buttons">
          <button className="ready-investor-btn-primary">Start Your Free Diagnostic →</button>
          <button className="ready-investor-btn-secondary">Book a Consultation</button>
        </div>
      </div>
    </section>
  );
};

export default InvestorReady;
