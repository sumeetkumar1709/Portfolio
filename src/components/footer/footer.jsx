import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TiMail } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";



function Footer() {


  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/cool_sumeet_/">
          <BsInstagram className="social" />
        </a>
        <a href="#home">
          {" "}
          <TiMail className="social"/>
        </a>
        <a href="https://www.linkedin.com/in/sumeet--kumar/">
          {" "}
          <TiSocialLinkedin className="social" />
        </a>

        <a href="#">
          <TiSocialYoutube className="social" />
        </a>

        <a href="#">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
