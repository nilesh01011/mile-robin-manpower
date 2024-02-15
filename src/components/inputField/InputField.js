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

  // defaultValue
  defaultValue,
}) {
  // const [inputText, setInputText] = useState(text ? text : '');
  const theme = useSelector((state) => state.theme);
  const [isClicked, setIsClicked] = useState(false);

  let domNode = useClickOutSide(() => {
    setIsClicked(false);
  });

  // const handleChangedText = (e) => {
  //   setInputText(e.target.value);
  //   handleChange((e) => handleChange(name)(e.target.value))
  // };

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
        maxLength={inputTypes === "tel" ? 10 : null}
        value={text}
        onChange={handleChange}
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
        defaultValue={defaultValue !== "" ? defaultValue : null}
      />
    </div>
  );
}

export default InputField;
