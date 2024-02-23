import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    if (!domNode.current) {
      return;
    }
    const handlerEvent = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);

    return () => {
      document.removeEventListener("mousedown", handlerEvent);
    };
  }, [handler]);

  return domNode;
};

function InputField({
  types,
  placeholder,
  inputTypes,
  text,
  name,
  errors,
  touched,
  handleChange,
  // pincode type only icons and function
  icons,
  handlePinCodeFetch,
  maxLength,
}) {
  const [inputText, setInputText] = useState("");
  // const [inputText, setInputText] = useState(text ? text : "");

  useEffect(()=>{
    if(text !== undefined){
      setInputText(text);
    } else {
      setInputText(inputText);
    }
  },[text])

  const theme = useSelector((state) => state.theme);
  const [isClicked, setIsClicked] = useState(false);

  let domNode = useClickOutSide(() => {
    setIsClicked(false);
  });

  const handleChangedText = (e) => {
    setInputText(e.target.value);
    if (handleChange) {
      handleChange(e.target.value);
    }
  };

  return (
    <div
      ref={domNode}
      className="inputText"
      style={{
        backgroundColor:
          types === "disabled"
            ? theme === "light"
              ? "#E6E6E6"
              : "#232324"
            : theme === "light"
            ? "#FFFFFF"
            : "#0B0B0C",
        borderColor: isClicked
          ? theme === "light"
            ? "#0B0B0C"
            : "#ffffff"
          : touched && errors
          ? "#ED302D"
          : theme === "light"
          ? "#B5B5B6"
          : "#545454",
      }}
      onClick={() => setIsClicked(true)}
    >
      <input
        type={inputTypes}
        maxLength={maxLength&&maxLength}
        value={inputText}
        onChange={handleChangedText}
        placeholder={placeholder}
        style={{
          color:
            types === "disabled"
              ? theme === "light"
                ? "#858585"
                : "#545454"
              : theme === "light"
              ? "#0B0B0C"
              : "#ffffff",
          paddingLeft: types === "phoneNumber" && 79,
          fontSize: 14,
        }}
        disabled={types === "disabled" && true}
        name={name}
      />

      {/* search icons for pincode only */}
      {icons && (
        <span
          className="searchIcons"
          onClick={() => handlePinCodeFetch(inputText)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43469 0.400024C3.9972 0.400024 0.399902 3.99732 0.399902 8.43481C0.399902 12.8723 3.9972 16.4696 8.43469 16.4696C10.4375 16.4696 12.2691 15.7368 13.6761 14.5248L18.5756 19.4243C18.8099 19.6586 19.1898 19.6586 19.4242 19.4243C19.6585 19.19 19.6585 18.8101 19.4242 18.5758L14.5246 13.6762C15.7367 12.2692 16.4695 10.4376 16.4695 8.43481C16.4695 3.99732 12.8722 0.400024 8.43469 0.400024ZM1.5999 8.43481C1.5999 4.66006 4.65994 1.60002 8.43469 1.60002C12.2094 1.60002 15.2695 4.66006 15.2695 8.43481C15.2695 12.2096 12.2094 15.2696 8.43469 15.2696C4.65994 15.2696 1.5999 12.2096 1.5999 8.43481Z"
              fill="#FF3E5B"
            ></path>
          </svg>
        </span>
      )}
    </div>
  );
}

export default InputField;
