import axios from "axios";
import React from "react";
// import ConnectedForm from "../components/form";

// const Form = ({ onSubmit, mode }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const renderTextBasedOnMode = () =>
//     mode === "login" ? <p>Login</p> : <p>Logout</p>;

//   const submitHandler = (e) => {
//     e.preventDefault();
//     onSubmit(email, password);
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       {renderTextBasedOnMode()}
//       <input type="email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" onChange={(e) => setPassword(e.target.value)} />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

const DIP = () => {
  const handleSubmit = async (email, password) => {
    try {
      const data = await axios.post("http://localhost:3004/users", {
        email,
        password,
      });

      if (data.status === 201) {
        setTimeout(() => {
          alert("Okay");
        }, 3000);
      }
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <>
      {/* <Form onSubmit={handleSubmit} mode="login" /> */}
      {/* <ConnectedForm onSubmit={handleSubmit} /> */}
    </>
  );
};

export default DIP;
