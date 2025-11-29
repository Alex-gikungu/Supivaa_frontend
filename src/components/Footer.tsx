import "../styles/Footer.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Branding */}
        <div className="footer-column">
          <h3 className="footer-logo">Supivaa</h3>
          <p className="footer-tagline">
            Bringing strategy and execution at the nexus of gender and climate across Africa.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn" className="social-link"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter" className="social-link"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="social-link"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="social-link"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Who We Are</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Our Insights</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Column 3: Focus Areas */}
        <div className="footer-column">
          <h4>Focus Areas</h4>
          <ul>
            <li><a href="#">Agriculture</a></li>
            <li><a href="#">Healthcare</a></li>
            <li><a href="#">Climate Solutions</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4>Contact</h4>

          <div className="contact-item">
            <FiMapPin className="contact-icon" aria-hidden="true" />
            <address className="contact-text">
              3rd Floor, Nairobi Garage, Promenade Building,<br />
              Nairobi, Kenya
            </address>
          </div>

          <div className="contact-item">
            <FiMapPin className="contact-icon" aria-hidden="true" />
            <address className="contact-text">
              Unit 300 - 420 W Hastings St,<br />
              Vancouver, BC, V6B 1L1
            </address>
          </div>

          <div className="contact-item">
            <FiMail className="contact-icon" aria-hidden="true" />
            <p className="contact-text">
              <a href="mailto:info@supivaa.com" className="contact-link">info@supivaa.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar: left copyright, right legal */}
      <div className="footer-bottom">
        <p className="footer-copyright">© 2023 Supivaa. All Rights Reserved.</p>
        <div className="footer-legal">
          <a href="#" className="footer-legal-link">Privacy Policy</a>
          <span className="footer-legal-sep">•</span>
          <a href="#" className="footer-legal-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
