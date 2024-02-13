import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';

function InputField({
  types,
  placeholder,
  inputTypes,
  text,
  name,
  errors,
  touched,
  handleChange,
}) {
  // const [inputText, setInputText] = useState(text ? text : '');
  const theme = useSelector((state) => state.theme);

  // const handleChangedText = (e) => {
  //   setInputText(e.target.value);
  //   handleChange((e) => handleChange(name)(e.target.value))
  // };

  return (
    <div
      className="inputText"
      style={{
        backgroundColor:
          types === 'disabled'
            ? theme === 'light'
              ? '#E6E6E6'
              : '#232324'
            : theme === 'light'
            ? '#FFFFFF'
            : '#0B0B0C',
        borderColor:
          touched && errors
            ? '#ED302D'
            : theme === 'light'
            ? '#B5B5B6'
            : '#545454',
      }}
    >
      <input
        type={inputTypes}
        maxLength={inputTypes === 'tel' ? 10 : null}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          color:
            types === 'disabled'
              ? theme === 'light'
                ? '#858585'
                : '#545454'
              : theme === 'light'
              ? '#0B0B0C'
              : '#ffffff',
          paddingLeft: types === 'phoneNumber' && 79,
          fontSize: 14,
        }}
        disabled={types === 'disabled' && true}
        name={name}
      />
    </div>
  );
}

export default InputField;
