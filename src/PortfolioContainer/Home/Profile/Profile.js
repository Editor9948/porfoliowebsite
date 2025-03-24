import React from "react";
import {TypeAnimation} from "react-type-animation";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="http://www.facbook.com/olotu.oladapo">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="http://github.com/Editor9948">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="http://www.instagram.com/oladapoeditor">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="http://x.com/EditorOladapo?t=6mZxjMb9ziNh1YPoHUkolg&s=08">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="http://youtube.com/@oladapoayomideolotu3676">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Oladapo Ayomide</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <TypeAnimation
                  loop
                  speed={50}
                  sequence={[
                    "Ethusiastic Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Programmer",
                    1000,
                    "Problem Solver",
                    1000,
                  ]}
                  cursor={true}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
              <p>Full-stack developer,building scalable |</p>
              <p>front and backend applications...</p>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="oladapo.pdf" download="Oladapo oladapo.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"> </div>
        </div>
      </div>
    </div>
  );
}
