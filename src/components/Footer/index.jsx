import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.css";
import ContactForm from "./ContactForm";
import ContactIcon from "../../images/svg-3.svg";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footerContainer" id="contact">
      <div className="footerWrap">
        <div className="footerLinksWrapper">
          <div className="footerLinkItems">
            <div className="footerLinkTitle">Social Links</div>
            <a
              href="https://www.linkedin.com/in/vishal-shah-4882a11b7/"
              target="_blank"
              aria-label="LinkedIn"
              className="footerLink"
            >
              <div className="footerLinkIcons">
                <FaLinkedinIn />
              </div>
              LinkedIn
            </a>
            <a
              href="https://github.com/vishal-63"
              target="_blank"
              aria-label="Github"
              className="footerLink"
            >
              <div className="footerLinkIcons">
                <FaGithub />
              </div>
              Github
            </a>
            <a
              href="/"
              target="_blank"
              aria-label="Instagram"
              className="footerLink"
            >
              <div className="footerLinkIcons">
                <FaInstagram />
              </div>
              Instagram
            </a>
            <a
              href="/"
              target="_blank"
              aria-label="Twitter"
              className="footerLink"
            >
              <div className="footerLinkIcons">
                <FaTwitter />
              </div>
              Twitter
            </a>
            {/* <a
              href="/"
              target="_blank"
              aria-label="Facebook"
              className="footerLink"
            >
              <div className="footerLinkIcons">
                <FaFacebookF />
              </div>
              Facebook
            </a> */}
            <a
              href="/"
              target="_blank"
              aria-label="Email"
              className="footerLink"
            >
              <div className="footerLinkIcons">
                <MdEmail />
              </div>
              shahvishal662@gmail.com
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="socialMedia">
        <div className="socialMediaWrap">
          <div className="websiteRights">
            Vishal &copy; {new Date().getFullYear()}&nbsp; All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
