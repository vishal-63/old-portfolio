import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Icon1 from "../../images/img-1.jpg";
import Icon2 from "../../images/img-2.jpg";
import Icon3 from "../../images/img-3.jpg";
import Icon4 from "../../images/img-4.jpg";
import Icon5 from "../../images/img-5.jpg";
import Icon6 from "../../images/img-6.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projectsContainer" id="projects">
      <h1 className="projectsH1">My Projects</h1>
      <div className="projectsWrapper">
        <div className="projectsCard">
          <a
            href="https://www.apartmenttherapy.com/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <img src={Icon1} alt="" className="projectsImg" />
            <h2 className="projectsH2">Apartment Therapy</h2>
            <FiExternalLink className="redirect" />
          </a>
        </div>
        <div className="projectsCard">
          <a
            href="https://www.baunfire.com/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <img src={Icon2} alt="" className="projectsImg" />
            <h2 className="projectsH2">Baunfire</h2>
            <FiExternalLink className="redirect" />
          </a>
        </div>
        <div className="projectsCard">
          <a
            href="https://altar.io/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <img src={Icon3} alt="" className="projectsImg" />
            <h2 className="projectsH2">Altar.io</h2>
            <FiExternalLink className="redirect" />
          </a>
        </div>
        <div className="projectsCard">
          <a
            href="http://www.emmemobili.it/web/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <img src={Icon4} alt="" className="projectsImg" />
            <h2 className="projectsH2">Emmemobili</h2>
            <FiExternalLink className="redirect" />
          </a>
        </div>
        <div className="projectsCard">
          <a
            href="https://sayyes.com/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <img src={Icon5} alt="" className="projectsImg" />
            <h2 className="projectsH2">Say Yes</h2>
            <FiExternalLink className="redirect" />
          </a>
        </div>
        <div className="projectsCard">
          <a
            href="https://www.platinumseed.com/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            <img src={Icon6} alt="" className="projectsImg" />
            <h2 className="projectsH2">Platinum Seed</h2>
            <FiExternalLink className="redirect" />
          </a>
        </div>
      </div>
      <div className="moreProjectsContainer">
        <div className="projectsWrapper displayNone" id="moreProjectsWrapper">
          <div className="projectsCard">
            <a
              href="https://www.apartmenttherapy.com/"
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img src={Icon1} alt="" className="projectsImg" />
              <h2 className="projectsH2">Apartment Therapy</h2>
              <FiExternalLink className="redirect" />
            </a>
          </div>
          <div className="projectsCard">
            <a
              href="https://www.baunfire.com/"
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img src={Icon2} alt="" className="projectsImg" />
              <h2 className="projectsH2">Baunfire</h2>
              <FiExternalLink className="redirect" />
            </a>
          </div>
          <div className="projectsCard">
            <a
              href="https://altar.io/"
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img src={Icon3} alt="" className="projectsImg" />
              <h2 className="projectsH2">Altar.io</h2>
              <FiExternalLink className="redirect" />
            </a>
          </div>
          <div className="projectsCard">
            <a
              href="http://www.emmemobili.it/web/"
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img src={Icon4} alt="" className="projectsImg" />
              <h2 className="projectsH2">Emmemobili</h2>
              <FiExternalLink className="redirect" />
            </a>
          </div>
          <div className="projectsCard">
            <a
              href="https://sayyes.com/"
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img src={Icon5} alt="" className="projectsImg" />
              <h2 className="projectsH2">Say Yes</h2>
              <FiExternalLink className="redirect" />
            </a>
          </div>
          <div className="projectsCard">
            <a
              href="https://www.platinumseed.com/"
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img src={Icon6} alt="" className="projectsImg" />
              <h2 className="projectsH2">Platinum Seed</h2>
              <FiExternalLink className="redirect" />
            </a>
          </div>
        </div>
        <div className="showMoreBtn">Show More</div>
        <div className="showMoreBtn displayNone">Show Less</div>
      </div>
    </div>
  );
};

export default Projects;
