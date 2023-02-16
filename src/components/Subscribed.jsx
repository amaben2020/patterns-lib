const Subscribed = ({ user }) => {
  console.log(user);
  return (
    <div>
      {user?.map((user) => (
        <div>
          <h1>{user?.name}</h1>

          <h3>{user?.subscription.name}</h3>
          <h5>${user?.subscription.price}</h5>
        </div>
      ))}
    </div>
  );
};

export default Subscribed;
