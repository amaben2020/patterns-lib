import React from "react";
import { messages, users } from "../../data";

const Map = () => {
  // with map
  const userAndMessage = messages.map((message) => {
    const userWithId = users.find((user) => user.id === message.userId);
    return {
      ...message,
      name: userWithId.name,
    };
  });

  // with reduce: still it iterates through the whole array
  const usersAndMessage = users.reduce((acc, cv) => {
    return { ...acc, [cv.id]: cv.name };
  }, {});

  console.log(
    messages.map((message) => {
      return {
        ...message,
        name: usersAndMessage[message.userId],
      };
    }),
  );

  function ChatUsingMap() {
    const namesById = new Map(users.map(({ id, name }) => [id, name]));

    return messages.map(({ id, text, userId }) => (
      <div key={id}>
        <div>{text}</div>
        <div>{namesById.get(userId)}</div>
      </div>
    ));
  }

  return (
    <div style={{ margin: "0 auto" }}>
      Mapped Users
      {userAndMessage.map((elem) => (
        <div
          style={{
            border: "1px solid black",
            padding: 30,
            maxWidth: 400,
            textAlign: "center",
            margin: 20,
          }}
        >
          <p> {elem.id} </p>
          <p>{elem.name}</p>
          <p>{elem.text}</p>
        </div>
      ))}
      {/* <div style={{ padding: 20, border: "1px solid black" }}>
        {ChatUsingMap()}
      </div> */}
    </div>
  );
};

export default Map;
