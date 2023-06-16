import React, { useEffect, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [active, setIsActive] = useState(null);

  const [play, setPlay] = useState({ player: "Ben" });

  const updateState = (p) => {
    return {
      ...p,
      player: p.player === "Ben" ? "Amaben" : "Ben",
      p2: "Nothing here",
    };
  };

  const URL = "4ecmgxzn";

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

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
  const handleOpen = (idx) => {
    setIsActive(idx);
  };

  const links = [
    { title: "Home", url: "/" },

    { title: "Signin", url: "/signin" },
  ];
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

      <div data-paperform-id={URL} />

      {/* <div
        style={{
          display: "flex",
        }}
      >
        {links.map((l, _) => (
          <>
            <p
              onClick={() => {
                handleOpen(l);
                setIsOpen((i) => !i);
              }}
            >
              {l.title}
            </p>

            {active.title === l.title && isOpen && <>{l.url}</>}
          </>
        ))}
      </div> */}

      <Search value={searchKey} onChange={handleChange} variant={2} />
    </>
  );
};
