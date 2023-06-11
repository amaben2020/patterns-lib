import React, { useState } from "react";

const Search = ({ value, onChange }) => {
  return <input type="search" required value={value} onChange={onChange} />;
};

const LSP = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return <Search value={value} onChange={handleChange} />;
};

export default LSP;

// Switch:
/**
 * Create an array with callbacks that grab labels
 * create a state that handles this update
 * pass down the props to the Switch component
 */

const alphabets = [
  {
    label: "a",
    handleSwitch: (value, callback) => callback(value),
  },
  {
    label: "b",
    handleSwitch: (value, callback) => callback(value),
  },
];

const Switch = () => {
  // state should come externally from Parent

  const [activeAlphabet, setActiveAlphabet] = useState(alphabets[1].label);
  return (
    <div>
      {alphabets.map((alphabet) => (
        <button
          key={alphabet.label}
          style={{
            background: activeAlphabet === alphabet.label ? "red" : "black",
          }}
          onClick={() =>
            alphabet.handleSwitch(alphabet.label, setActiveAlphabet)
          }
        >
          {alphabet.label}
        </button>
      ))}
    </div>
  );
};

const LSP2 = () => {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (e) => setSearchKey(e.target.value);

  return <Search value={searchKey} onChange={handleSearch} />;
};
