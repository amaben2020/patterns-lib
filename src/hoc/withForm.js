import axios from "axios";
import React from "react";

const withForm = (Component, url) => {
  return () => {
    const sendForm = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(url, {
          id: "7fguyfte51ddsddes",
          email: "demo@acme.ioo",
          password:
            "$2a$10$Pmk32D/fgkig8pU.r1rGrOpYYJSrnqqpLO6dRdo88iYxxIsl1sst",
          name: "Ben",
          mobile: "+34782364823",
          policy: true,
        });
        console.log("data", data);

        if (data) {
          alert("sent");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return <Component handleSubmit={sendForm} />;
  };
};

export default withForm;
