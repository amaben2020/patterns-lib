import React from "react";
import "./style.css";

const Form = ({
  handleSubmit,
  handleFocus,
  handleBlur,
  handleChange,
  user,
  isError,
  isFocus,
  blurHandler,
  isValid,
}) => {
  return (
    <div className="wrapper">
      <h2> Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={user.name}
          onBlur={blurHandler}
          onChange={handleChange}
          style={{
            border: !isValid ? "2px solid red" : "2px solid green",
          }}
        />

        <input
          type="text"
          name="email"
          placeholder={user.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border: isError ? "2px solid red" : "2px solid green",
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

export default Form;
