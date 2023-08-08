import React from "react";
// using LSP, build a toggle component that:
// a.receives an array of labels and callback that updates state
// {
//   label: "b",
//   handleSwitch: (value, callback) => callback(value),
// }
// b. set the active state to the first tab by default
// c. nb: all state would be managed externally

// look at Object.entries()

export const switchData = [
  {
    label: "A",
    handleSwitch: (value, callback) => callback(value),
  },
  {
    label: "B",
    handleSwitch: (value, callback) => callback(value),
  },
];

const Switch = ({ data, callback, value }) => {
  return (
    <div>
      Switch:
      <div
        style={{
          display: "flex",
        }}
      >
        {data.map((elem) => {
          return (
            <div key={elem.label}>
              <button
                aria-label="button"
                style={{
                  background: elem.label === value ? "red" : "blue",
                  color: elem.label === value ? "white" : "black",
                  width: 200,
                  padding: 20,
                  cursor: "pointer",
                }}
                // https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
                onClick={() => {
                  elem.handleSwitch(elem.label, callback);
                  setTimeout(() => {
                    alert("OK");
                  }, 1000);
                }}
              >
                {elem.label}
              </button>
            </div>
          );
        })}
      </div>{" "}
      {value}
    </div>
  );
};

export default Switch;

// query MyQuery {
//   allStoryblokEntry(filter: {field_gr_is_current_funded_boolean: {nin: true}}) {
//     nodes {
//      content
//         id
//         full_slug
//     }
//   }
// }
