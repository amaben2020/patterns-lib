import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:5001/user";
const Authentication = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setData((previousState) => {
      console.log("previousState", previousState);
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const { email, password } = data;

  console.log("email", email);
  console.log("password", password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${URL}/register`,
        {
          email,
          password,
        },
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // },
      );
      // if (data.user) {
      //   localStorage.setItem("token", JSON.stringify(data.token));
      //   setUser(data);
      // }
      console.log("DATA", data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user.token) {
  //     // window?.location.replace("http://localhost:3000/procted-route");
  //   }
  // }, [user.token]);
  // console.log("USER", user);
  return (
    <div>
      Authentication:
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => handleChange(e)} type="email" name="email" />
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
