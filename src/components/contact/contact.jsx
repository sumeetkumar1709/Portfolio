import "./contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/sumeet--kumar/"
          className="contact linkedin"
          target={"blank"}
        >
          <AiFillLinkedin className="icon" />
          <h2>
          linkedin <span>Sumeet Kumar</span>
          </h2>
        </a>

        <a
          href="https://chatwith.io/s/6294c330d6f3e"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+91 7992287051</span>
          </h2>
        </a>

        <a href="https://www.instagram.com/cool_sumeet_/?hl=en" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>cool_sumeet_</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
