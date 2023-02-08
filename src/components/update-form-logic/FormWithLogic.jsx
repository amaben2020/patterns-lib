import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";

const FormWithLogic = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [isBlur, setIsBlur] = useState(false);

  const [input, setInput] = useState({
    email: "",
    name: "",
    mobile: 0,
    policy: true,
  });
  const fetchUser = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3004/users/${id}`);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  function isEmail(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) {
      return true;
    } else return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      email: input.email,
      name: input.name,
      mobile: input.mobile,
      policy: Boolean(input.policy),
    };

    try {
      const data = await axios.put(
        `http://localhost:3004/users/x36n6kr`,
        values,
      );

      if (data.status === 200) {
        alert("Success");
      }
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  const hasEmailErrors = !isEmail(input.email.trim());

  useEffect(() => {
    if (hasEmailErrors) {
      setError(true);
    } else {
      setError(false);
    }
  }, [hasEmailErrors]);

  const handleChange = (e) => {
    setInput((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  const handleFocus = (e) => {
    setIsFocus(true);
  };
  const handleBlur = (e) => {
    setIsFocus(false);
  };

  useEffect(() => {
    fetchUser("x36n6kr");
  }, []);

  // Handling input onBlur event
  const blurHandler = (event) => {
    setIsFocus(false);
    setIsBlur(true);

    // Validate entered name
    if (input.name.match(/^[a-z][a-z\s]*$/i)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      Form With Logic
      <Form
        handleSubmit={handleSubmit}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleChange={handleChange}
        user={user}
        isError={error}
        isFocus={isFocus}
        blurHandler={blurHandler}
        isBlur={isBlur}
        isValid={isValid}
      />
    </div>
  );
};

export default FormWithLogic;
