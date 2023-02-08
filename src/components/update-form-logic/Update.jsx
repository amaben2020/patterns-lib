import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const Update = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

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

  return (
    <div className="wrapper">
      <h2>Update Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder={user.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border: error ? "2px solid red" : "2px solid green",
          }}
        />

        {isFocus && "Yeah"}

        <input
          type="number"
          name="mobile"
          placeholder={user.mobile}
          onChange={handleChange}
        />

        <select
          onChange={handleChange}
          name="policy"
          style={{ margin: "10px", padding: "10px" }}
          placeholder={String(user.policy)}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>

        <button type="submit"> Submit</button>
      </form>

      {user.email}
    </div>
  );
};

export default Update;
