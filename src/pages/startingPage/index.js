import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import {
  B_IMG,
  B_LIGHT_THEME,
  I_IMG,
  LIGHT_LOGO_IMG,
  LIGHT_STARTINGPAGE_BG,
  LOGO_IMG,
  N_IMG,
  O_IMG,
  R_IMG,
  STARTINGPAGE_BG,
} from "../../assets";
import { useSelector } from "react-redux";

function Index() {
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showB, setShowB] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowB(true);
    }, 500);
  }, []);

  // redirect page to login page
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 3700);
  }, [navigate]);

  return (
    <div
      className="startingPage_container"
      style={{
        background: `url(${
          theme === "light" ? LIGHT_STARTINGPAGE_BG : STARTINGPAGE_BG
        }) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      {/* logo images */}
      <div className="logoImg">
        <img
          width={220}
          height={40}
          src={theme === "light" ? LIGHT_LOGO_IMG : LOGO_IMG}
          alt="logo-images"
          loading="lazy"
        />
      </div>
      {/* loading animations */}
      <div className="loadingAnimation">
        <div className="loadingName">
          <img
            src={R_IMG}
            width={35}
            height={49}
            alt="logo-images"
            id="R_IMG"
            className={isLoading ? "R_show" : ""}
          />
          <img
            src={O_IMG}
            width={38}
            height={49}
            alt="logo-images"
            id="O_IMG"
            className={isLoading ? "O_show" : ""}
          />
          <img
            src={theme === "light" ? B_LIGHT_THEME : B_IMG}
            width={37}
            height={57}
            alt="logo-images"
            id="B_IMG"
            className={showB ? "B_show" : ""}
          />
          <img
            src={I_IMG}
            width={16}
            height={47}
            alt="logo-images"
            id="I_IMG"
            className={isLoading ? "I_show" : ""}
          />
          <img
            src={N_IMG}
            width={35}
            height={47}
            alt="logo-images"
            id="N_IMG"
            className={isLoading ? "N_show" : ""}
          />
        </div>
        {/* line svg icons */}
        <span className="lineAnimation">
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="319"
              height="3"
              viewBox="0 0 319 3"
              fill="none"
            >
              <line
                opacity="0.5"
                y1="1.5"
                x2="319"
                y2="1.5"
                stroke="url(#paint0_radial_625_2022)"
                strokeWidth="3"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_625_2022"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(153.324 9.352) scale(134.763 2921.3)"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="320"
              height="3"
              viewBox="0 0 320 3"
              fill="none"
            >
              <line
                opacity="0.5"
                x1="0.5"
                y1="1.5"
                x2="319.5"
                y2="1.5"
                stroke="url(#paint0_radial_8368_259537)"
                strokeWidth="3"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_8368_259537"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(153.824 9.352) scale(134.763 2921.3)"
                >
                  <stop stopColor="#E31837" />
                  <stop offset="1" stopColor="#E31837" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          )}
        </span>
      </div>
      {/* bottom logo */}
      <div className="startingPage_footer">
        <span>Copyright © 2023 ROBIN</span>
      </div>
    </div>
  );
}

export default Index;
