// import "../../styles/WhoWeAre.css"; // optional: global styles for Who We Are page

import About from "./About";
import OurStory from "./OurStory";
import MissionVision from "./MissionVision";
import Values from "./Values";
import Team from "./Team";
import Partners from "./Partners";
import WorkWithUs from "./WorkWithUs"; // ✅ newly added final section

const WhoWeArePage = () => {
  return (
    <main className="who-we-are">
      <About />
      <OurStory />
      <MissionVision />
      <Values />
      <Team />
      <Partners />
      <WorkWithUs /> {/* ✅ renders final call-to-action section */}
    </main>
  );
};

export default WhoWeArePage;
