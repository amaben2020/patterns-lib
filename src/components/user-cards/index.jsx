import axios from "axios";
import isDeepEqual from "fast-deep-equal/react";
import React, { memo, useEffect, useRef, useState } from "react";
import userCards from "./hoc/userCards";

const UserCards = ({ users, ...rest }) => {
  const [favorites, setFavorites] = useState([]);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});

  const favoritesRef = useRef(favorites);

  if (!isDeepEqual(favoritesRef.current, favorites)) {
    favoritesRef.current = favorites;
  }
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3004/favorites");
        setFavorites(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [favoritesRef.current]);

  const fetchUserById = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3004/users/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserById(userId);
  }, [userId]);

  const addToFavorites = async (info) => {
    const user = {
      ...info,
    };
    try {
      const data = await axios.post("http://localhost:3004/favorites", user);
      if (data.status === 201) {
        alert("Added");
        window.location.reload();
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <div
        style={{
          border: "1px solid green",
          maxWidth: 600,
          height: 500,
          margin: 20,
        }}
      >
        <h3>Favorites</h3>

        <div>
          {!favorites ? (
            <p style={{ color: "red" }}>No favorites</p>
          ) : (
            favorites.map((elem) => <div>{elem.name}</div>)
          )}
        </div>

        <div>{user ? user.name : "No user"}</div>

        <div>
          <select onChange={(e) => setUserId(e.target.value)}>
            <option value="7fguyfte5">1</option>
            <option value="4WPKtyo">2</option>
          </select>
        </div>
      </div>

      {users.map((user, i) => (
        <div
          style={{
            padding: 50,
            boxShadow: "1px 2px",
            maxWidth: 300,
            cursor: "pointer",
            margin: "0 auto",
            marginTop: 20,
          }}
        >
          <p>{user.name}</p>
          <p>{user.mobile}</p>

          <button
            onClick={() =>
              addToFavorites({
                ...user,
              })
            }
          >
            Add To Favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default memo(userCards(UserCards, "http://localhost:3004/users"));
