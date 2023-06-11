import React, { useState, useEffect } from "react";

const Search = ({ value, onChange, variant }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <input
        name="name1"
        type="search"
        required
        value={variant ? value.name1 : value}
        onChange={onChange}
      />
      {variant > 1 && (
        <input
          name="name2"
          type="search"
          required
          value={variant ? value.name2 : value}
          onChange={onChange}
        />
      )}
    </div>
  );
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

export const LSP2 = () => {
  const INITIAL_STATE = {
    name1: "",
    name2: "",
  };
  const [searchKey, setSearchKey] = useState(INITIAL_STATE);

  const [play, setPlay] = useState({ player: "Ben" });

  const updateState = (p) => {
    console.log("prev", p);
    return {
      ...p,
      player: p.player === "Ben" ? "Amaben" : "Ben",
      p2: "Nothing here",
    };
  };

  useEffect(() => {
    setPlay(updateState);
  }, []);

  console.log("play", play);

  const handleChange = (e) => {
    const values = e.target.name;

    setSearchKey((prev) => ({
      ...prev,
      [values]: e.target.value,
    }));
  };

  return (
    <>
      {["Ben", "Amaben"].map((elem) => (
        <>
          <button
            onClick={() =>
              setPlay({
                player: elem,
              })
            }
          >
            Change Name {play.player}
          </button>
        </>
      ))}

      <Search value={searchKey} onChange={handleChange} variant={2} />
    </>
  );
};
