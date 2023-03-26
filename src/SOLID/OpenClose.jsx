import React from "react";

const data = {
  user: {
    name: "",
    email: "",
    type: "ADMIN",
  },
};

// <User user={data.user}/>
export const User = ({ user }) => {
  return (
    <>
      <div> Name: {user.name}</div>
      <div> Email: {user.email}</div>
      {/* WRONG: We are not allowed to alter code in this component after its created i.e always coming back to add type if there's an update */}
      {user.type === "SUPER_ADMIN" && <div> Details about super admin</div>}
      {user.type === "ADMIN" && <div> Details about admin</div>}
    </>
  );
};

export const Admin = ({user}) => {

    return <>
        <User user={user} /> should only display info
        <div> This is admin user details</div>
    </>
}

export default function App = ({ user }) => {
  
  const userByTypes = {
    'admin' : <Admin {...user} /> ,
    'superadmin': <SuperAdmin user={ user} />
  }
  
  return( <>
    {userByTypes[`${user.type}`]}
  </>)
}
