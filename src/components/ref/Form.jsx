import React, { useEffect, useRef, useState } from "react";

export default function Form() {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    lastNameInput.current?.focus();
  }, []);

  const [firstName, setFirstName] = useState("");
  const lastNameInput = useRef();

  const formHandler = () => {
    const data = {
      firstName,
      lastName: lastNameInput.current?.value,
    };
    console.log(data);
  };

  return (
    <div>
      <h3>Handling Form Inputs</h3>

      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Your Last Name"
          ref={lastNameInput}
        />

        <button type="button" onClick={formHandler}>
          Submit
        </button>
      </form>
      <br />
      <p>The Number of Re-Renders: {renderCount.current}</p>
    </div>
  );
}
