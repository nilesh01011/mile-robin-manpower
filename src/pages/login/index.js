import React, { useState } from "react";
import "./styles.scss";
import {
  LIGHT_LOGO_IMG,
  LIGHT_STARTINGPAGE_BG,
  LOGO_IMG,
  ROBIN_DARK_THEME,
  ROBIN_LIGHT_THEME,
  STARTINGPAGE_BG,
} from "../../assets";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import InputFields from "./inputFields/InputField";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../formikSchema/loginSchema";

// formik form initial values
const initialValues = {
  id: "",
  password: "",
};

function Index() {
  const theme = useSelector((state) => state.theme);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // useFormik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      validationSchema: loginSchema,
      initialValues: initialValues,
      onSubmit: async (values, action) => {
        // console.log(values);
        navigate("/home");
        action.resetForm();
      },
    });
  return (
    <div
      className="loginPage"
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

      {/* login form */}
      <div className="loginForm">
        {/* logo */}
        <div className="robinLogoContainer">
          {/* robin logo */}
          <img
            width={245}
            height={50}
            src={theme === "light" ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME}
            alt="robin-images"
          />
          {/* line */}
          <span>
            {theme === "light" ? (
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
            ) : (
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
            )}
          </span>
        </div>
        {/* login form */}
        <div className="formContainer">
          <h2
            className="title"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Dealer Management System
          </h2>

          <form
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            style={{
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              boxShadow:
                theme === "light" && "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* titles */}
            <div className="formTitle">
              <h1 style={{ color: theme === "light" ? "black" : "white" }}>
                Welcome
              </h1>
              <p style={{ color: "#B5B5B6" }}>
                Please enter your credentials to login
              </p>
            </div>

            {/* email fields */}
            <div
              className="fields"
              style={{
                borderColor:
                  !values.id && touched.id
                    ? "#ED302D"
                    : theme === "light"
                    ? ""
                    : "#545454",
                backgroundColor: theme === "light" ? "" : "#0B0B0C",
              }}
            >
              {/* icons */}
              <span className="icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33333C4.62609 10 3.94781 10.281 3.44772 10.781C2.94762 11.2811 2.66667 11.9594 2.66667 12.6667V14"
                    stroke={theme === "light" ? "black" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7.33333C9.47276 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47276 2 8 2C6.52724 2 5.33334 3.19391 5.33334 4.66667C5.33334 6.13943 6.52724 7.33333 8 7.33333Z"
                    stroke={theme === "light" ? "black" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {/* inputfields */}
              <div className="inputs">
                <InputFields
                  value={values.id}
                  onChange={handleChange}
                  placeholder="User ID (MILE ID. Parent ID)*"
                  type="text"
                  onBlur={handleBlur}
                  name="id"
                />
              </div>
            </div>
            {/* id error */}
            {errors.id && touched.id ? (
              <p className="errors">{errors.id}</p>
            ) : null}
            {/* password */}
            <div
              className="fields"
              style={{
                borderColor:
                  !values.password && touched.password
                    ? "#ED302D"
                    : theme === "light"
                    ? ""
                    : "#545454",
                backgroundColor: theme === "light" ? "" : "#0B0B0C",
                marginTop: 20,
              }}
            >
              {/* icons */}
              <span className="icons">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.81818 6.99998C1.48346 6.99998 1.21212 7.27132 1.21212 7.60604V11.8485C1.21212 12.1832 1.48346 12.4545 1.81818 12.4545H10.303C10.6377 12.4545 10.9091 12.1832 10.9091 11.8485V7.60604C10.9091 7.27132 10.6377 6.99998 10.303 6.99998H1.81818ZM0 7.60604C0 6.60188 0.814028 5.78786 1.81818 5.78786H10.303C11.3072 5.78786 12.1212 6.60188 12.1212 7.60604V11.8485C12.1212 12.8526 11.3072 13.6666 10.303 13.6666H1.81818C0.814028 13.6666 0 12.8526 0 11.8485V7.60604Z"
                    // fill={touched.password ? "#ED302D" : "white"}
                    stroke={theme === "light" ? "black" : "white"}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.0606 1.54545C5.41765 1.54545 4.80104 1.80086 4.34641 2.25549C3.89177 2.71013 3.63636 3.32674 3.63636 3.96969V6.39393C3.63636 6.72865 3.36502 6.99999 3.0303 6.99999C2.69558 6.99999 2.42424 6.72865 2.42424 6.39393V3.96969C2.42424 3.00527 2.80736 2.08034 3.48931 1.39839C4.17126 0.716444 5.09618 0.333328 6.0606 0.333328C7.02503 0.333328 7.94995 0.716444 8.6319 1.39839C9.31385 2.08034 9.69697 3.00527 9.69697 3.96969V6.39393C9.69697 6.72865 9.42562 6.99999 9.09091 6.99999C8.75619 6.99999 8.48485 6.72865 8.48485 6.39393V3.96969C8.48485 3.32674 8.22943 2.71013 7.7748 2.25549C7.32017 1.80086 6.70355 1.54545 6.0606 1.54545Z"
                    // fill={touched.password ? "#ED302D" : "white"}
                    stroke={theme === "light" ? "black" : "white"}
                  />
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.81818 8.00021C3.48346 8.00021 3.21212 8.27155 3.21212 8.60627L3.21212 12.8487C3.21212 13.1834 3.48346 13.4548 3.81818 13.4548L12.303 13.4548C12.6377 13.4548 12.9091 13.1834 12.9091 12.8487L12.9091 8.60627C12.9091 8.27155 12.6377 8.00021 12.303 8.00021L3.81818 8.00021ZM2 8.60627C2 7.60211 2.81403 6.78809 3.81818 6.78809L12.303 6.78809C13.3072 6.78809 14.1212 7.60212 14.1212 8.60627L14.1212 12.8487C14.1212 13.8528 13.3072 14.6669 12.303 14.6669L3.81818 14.6669C2.81403 14.6669 2 13.8528 2 12.8487L2 8.60627Z"
                    fill={theme === "light" ? "#0B0B0C" : "white"}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.06068 2.54562C7.41773 2.54562 6.80112 2.80103 6.34648 3.25566C5.89185 3.7103 5.63644 4.32691 5.63644 4.96986L5.63644 7.3941C5.63644 7.72882 5.36509 8.00016 5.03038 8.00016C4.69566 8.00016 4.42432 7.72882 4.42432 7.3941L4.42432 4.96986C4.42432 4.00544 4.80743 3.08051 5.48938 2.39856C6.17133 1.71661 7.09626 1.3335 8.06068 1.3335C9.0251 1.3335 9.95003 1.71661 10.632 2.39856C11.3139 3.08051 11.697 4.00544 11.697 4.96986L11.697 7.3941C11.697 7.72882 11.4257 8.00016 11.091 8.00016C10.7563 8.00016 10.4849 7.72882 10.4849 7.3941L10.4849 4.96986C10.4849 4.32691 10.2295 3.7103 9.77488 3.25566C9.32024 2.80103 8.70363 2.54562 8.06068 2.54562Z"
                    fill={theme === "light" ? "#0B0B0C" : "white"}
                  />
                </svg>
              </span>

              {/* inputfields */}
              <div className="inputs">
                <InputFields
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password*"
                  type="password"
                  onBlur={handleBlur}
                  name="password"
                  showPassword={showPassword}
                />

                {/* password icons */}
                <span className="passwordIcons">
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.25309 8.83806C6.92039 7.45603 9.30578 6 12 6C14.6942 6 17.0796 7.45603 18.7469 8.83806C19.5891 9.53613 20.2691 10.2328 20.7388 10.755C20.974 11.0164 21.1574 11.2352 21.283 11.3898C21.3458 11.4671 21.3941 11.5285 21.4274 11.5713C21.444 11.5927 21.4568 11.6094 21.4658 11.6212L21.4763 11.635L21.4793 11.6391L21.4806 11.6408C21.4806 11.6408 21.4809 11.6412 21 12C21.4809 12.3588 21.4806 12.3592 21.4806 12.3592L21.4803 12.3596L21.4793 12.3609L21.4763 12.365L21.4658 12.3788C21.4568 12.3906 21.444 12.4074 21.4274 12.4287C21.3941 12.4715 21.3458 12.5329 21.283 12.6102C21.1574 12.7648 20.974 12.9836 20.7388 13.245C20.2691 13.7672 19.5891 14.4639 18.7469 15.1619C17.0796 16.544 14.6942 18 12 18C9.30578 18 6.92039 16.544 5.25309 15.1619C4.41093 14.4639 3.7309 13.7672 3.26118 13.245C3.02597 12.9836 2.84258 12.7648 2.71704 12.6102C2.65425 12.5329 2.60587 12.4715 2.57264 12.4287C2.55603 12.4074 2.5432 12.3906 2.53425 12.3788L2.52374 12.365L2.52069 12.3609L2.51972 12.3596L2.51937 12.3592C2.51937 12.3592 2.51912 12.3588 3 12C2.51912 11.6412 2.51937 11.6408 2.51937 11.6408L2.52069 11.6391L2.52374 11.635L2.53425 11.6212C2.5432 11.6094 2.55603 11.5927 2.57264 11.5713C2.60587 11.5285 2.65425 11.4671 2.71704 11.3898C2.84258 11.2352 3.02597 11.0164 3.26118 10.755C3.7309 10.2328 4.41093 9.53613 5.25309 8.83806ZM3 12L2.51912 11.6412C2.3603 11.854 2.3603 12.146 2.51912 12.3588L3 12ZM3.76911 12C3.87178 12.1228 4.00052 12.2726 4.15332 12.4425C4.59443 12.9328 5.23239 13.5861 6.01889 14.2381C7.60891 15.556 9.72353 16.8 12 16.8C14.2765 16.8 16.3911 15.556 17.9811 14.2381C18.7676 13.5861 19.4056 12.9328 19.8467 12.4425C19.9995 12.2726 20.1282 12.1228 20.2309 12C20.1282 11.8772 19.9995 11.7274 19.8467 11.5575C19.4056 11.0672 18.7676 10.4139 17.9811 9.76194C16.3911 8.44397 14.2765 7.2 12 7.2C9.72353 7.2 7.60891 8.44397 6.01889 9.76194C5.23239 10.4139 4.59443 11.0672 4.15332 11.5575C4.00052 11.7274 3.87178 11.8772 3.76911 12ZM21 12L21.4809 12.3588C21.6397 12.146 21.6397 11.854 21.4809 11.6412L21 12ZM9.98475 9.98475C10.5192 9.45027 11.2441 9.15 12 9.15C12.7559 9.15 13.4808 9.45027 14.0153 9.98475C14.5497 10.5192 14.85 11.2441 14.85 12C14.85 12.7559 14.5497 13.4808 14.0153 14.0153C13.4808 14.5497 12.7559 14.85 12 14.85C11.2441 14.85 10.5192 14.5497 9.98475 14.0153C9.45027 13.4808 9.15 12.7559 9.15 12C9.15 11.2441 9.45027 10.5192 9.98475 9.98475ZM12 10.35C11.5624 10.35 11.1427 10.5238 10.8333 10.8333C10.5238 11.1427 10.35 11.5624 10.35 12C10.35 12.4376 10.5238 12.8573 10.8333 13.1667C11.1427 13.4762 11.5624 13.65 12 13.65C12.4376 13.65 12.8573 13.4762 13.1667 13.1667C13.4762 12.8573 13.65 12.4376 13.65 12C13.65 11.5624 13.4762 11.1427 13.1667 10.8333C12.8573 10.5238 12.4376 10.35 12 10.35Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.71971 3.77722C3.95321 3.54209 4.33311 3.54077 4.56824 3.77427L7.9106 7.09342C9.12901 6.47668 10.5163 6.03751 12 6.03751C14.6928 6.03751 17.0777 7.48278 18.7453 8.85551C19.5875 9.54877 20.2676 10.2407 20.7374 10.7593C20.9727 11.019 21.1561 11.2362 21.2817 11.3898C21.3445 11.4666 21.3929 11.5276 21.4261 11.5701C21.4427 11.5913 21.4556 11.608 21.4645 11.6197L21.4751 11.6335L21.4781 11.6375L21.4794 11.6392C21.4796 11.6394 21.4797 11.6396 21 12C21.4797 12.3604 21.4796 12.3605 21.4795 12.3606L21.4788 12.3617L21.4772 12.3638L21.4718 12.3708C21.4674 12.3766 21.4611 12.3848 21.453 12.3953C21.4368 12.4163 21.4134 12.4463 21.3831 12.4845C21.3223 12.5609 21.2337 12.6702 21.119 12.8056C20.8897 13.0762 20.5557 13.4521 20.1324 13.8784C19.3978 14.6184 18.3835 15.5216 17.1714 16.2899L20.2773 19.3743C20.5125 19.6078 20.5138 19.9877 20.2803 20.2228C20.0468 20.4579 19.6669 20.4592 19.4318 20.2257L3.72267 4.62575C3.48754 4.39225 3.48622 4.01235 3.71971 3.77722ZM16.2959 15.4205C17.5088 14.6884 18.5372 13.7821 19.2808 13.033C19.6785 12.6325 19.9911 12.2804 20.2034 12.0299C20.2119 12.0198 20.2204 12.0098 20.2286 12C20.1266 11.8789 19.9991 11.7316 19.8481 11.5649C19.407 11.0781 18.7692 10.4294 17.9827 9.782C16.393 8.47348 14.2779 7.23751 12 7.23751C10.8884 7.23751 9.81315 7.53151 8.81342 7.98997L10.4538 9.61899C10.9114 9.32514 11.4476 9.16563 12 9.16563C12.7545 9.16563 13.479 9.46324 14.0138 9.99433C14.5487 10.5255 14.85 11.2469 14.85 12C14.85 12.5487 14.6901 13.0805 14.3964 13.5342L16.2959 15.4205ZM13.5115 12.6554C13.6021 12.4506 13.65 12.2276 13.65 12C13.65 11.5679 13.4772 11.1526 13.1682 10.8458C12.8591 10.5388 12.439 10.3656 12 10.3656C11.7713 10.3656 11.5476 10.4127 11.3422 10.5012L13.5115 12.6554ZM21 12L21.4795 12.3606C21.6399 12.1471 21.6401 11.8531 21.4797 11.6396L21 12ZM6.58608 8.57962C6.7871 8.84306 6.7365 9.21958 6.47306 9.42059C5.55538 10.1208 4.80352 10.8596 4.28066 11.4244C4.07238 11.6493 3.90128 11.8458 3.77137 12C3.87342 12.1211 4.00092 12.2684 4.15193 12.4351C4.59296 12.9219 5.23086 13.5706 6.01731 14.218C7.60697 15.5265 9.72213 16.7625 12 16.7625C12.6156 16.7625 13.22 16.6724 13.8072 16.5139C14.1271 16.4275 14.4565 16.6168 14.5429 16.9367C14.6293 17.2566 14.4399 17.586 14.12 17.6724C13.4431 17.8551 12.7333 17.9625 12 17.9625C9.30719 17.9625 6.92234 16.5172 5.25468 15.1445C4.41246 14.4512 3.73237 13.7593 3.26258 13.2407C3.02733 12.981 2.84391 12.7638 2.71834 12.6102C2.65553 12.5334 2.60713 12.4724 2.57389 12.4299C2.55727 12.4087 2.54443 12.392 2.53548 12.3803L2.52496 12.3666L2.5219 12.3625L2.52093 12.3612L2.52058 12.3608C2.52045 12.3606 2.52033 12.3604 3.00001 12C2.52033 11.6396 2.52039 11.6395 2.52045 11.6394L2.52213 11.6372L2.52569 11.6325L2.53809 11.6163C2.54868 11.6025 2.5639 11.5828 2.58362 11.5577C2.62306 11.5075 2.68055 11.4354 2.75511 11.345C2.90416 11.1643 3.12178 10.9098 3.40008 10.6091C3.95565 10.009 4.75833 9.21957 5.74511 8.4666C6.00855 8.26559 6.38506 8.31619 6.58608 8.57962ZM3.00001 12L2.52045 11.6394C2.36003 11.8529 2.3599 12.1469 2.52033 12.3604L3.00001 12ZM9.67716 11.8229C10.0028 11.7613 10.3166 11.9753 10.3782 12.3009C10.4388 12.6214 10.5955 12.9195 10.8318 13.1542C11.0633 13.3841 11.3571 13.539 11.6746 13.6023C11.9995 13.6671 12.2105 13.983 12.1457 14.308C12.0809 14.633 11.765 14.8439 11.44 14.7791C10.8938 14.6703 10.3868 14.4035 9.98623 14.0057C9.5771 13.5994 9.30462 13.0819 9.1991 12.5239C9.13753 12.1983 9.35156 11.8844 9.67716 11.8229Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            {/* password error */}
            {errors.password && touched.password ? (
              <p className="errors">{errors.password}</p>
            ) : null}
            {/* forget password */}
            <button type="button" className="forgetPassword">
              Forget Password?
            </button>

            {/* button */}
            <button
              type="submit"
              role="button"
              aria-label="submit"
              className="btn"
              style={{ fontWeight: 700 }}
            >
              Login
            </button>

            {/* m&m login */}
            <button type="button" className="m_login">
              M&M User login
            </button>
          </form>
        </div>
      </div>

      {/* bottom logo */}
      <div className="loginPage_footer">
        <span>Copyright © 2023 ROBIN</span>
      </div>
    </div>
  );
}

export default Index;
