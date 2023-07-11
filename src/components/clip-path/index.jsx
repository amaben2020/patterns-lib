import React, { useState, useEffect } from "react";
import img from "./../../asset/background.png";
import "./style.css";
import axios from "axios";

const ClipPath = () => {
  const [selected, setSelected] = useState([]);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [backend, setBackend] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const LIMIT = 5;

  // useEffect(() => {
  //   const handleBackendFetch = async () => {
  //     setLoading(true);
  //     try {
  //       const { data } = await axios.get(
  //         `http://localhost:5001/blog?page=${page}&limit=${LIMIT}`,
  //       );

  //       setLoading(false);
  //       setBackend(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   handleBackendFetch();
  // }, [page]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await axios.get(`http://localhost:5001/blog`);

  //       setTotalPages(data.length);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const pageCount = Math.ceil(totalPages / LIMIT);

  //TODO: move this to currying
  // const handleChange = (setter) => (event) => setter(event.target.value)

  // <input type="text"  onChange={handleChange(setEmail)}/>
  return (
    <>
      {/* <div>
        ClipPath
        <form>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" onChange={(e) => setPwd(e.target.value)} />
          <select
            name=""
            id=""
            onChange={(e) => {
              setSelected([...selected, e.target.value]);
            }}
          >
            {["sex", "drinks"].map((elem) => (
              <>
                <option value={elem}>{elem}</option>
              </>
            ))}
          </select>
          <input
            type="checkbox"
            onClick={(e) => setIsAdmin(true)}
            checked={isAdmin}
          />
          {isAdmin}
        </form>
      </div> */}

      {/* <div>
        <img src={img} className="clipper" alt="" srcset="" />
      </div> */}

      {/* <div class="app-container">
        <div class="content wrap">
          <div class="image">
            <svg xmlns="http://www.w3.org/2000/svg" style="position:absolute">
              <defs>
                <filter
                  id="prefix__b"
                  width="104.6%"
                  height="107.5%"
                  x="-2.8%"
                  y="-2.9%"
                  filterUnits="objectBoundingBox"
                >
                  <feOffset
                    dx="-4"
                    dy="4"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  />
                  <feGaussianBlur
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                    stdDeviation="5.5"
                  />
                  <feColorMatrix
                    in="shadowBlurOuter1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                </filter>

                <clipPath id="mask">
                  <path
                    d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
          c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
          c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
          c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"
                  />
                  <path
                    d="M373.8,89.9c2.7-4.9,14.3-24.5,37.4-30.2c5.6-1.4,18.5-4.6,30.9,2.2c18.8,10.2,20,33.9,20.2,38.1c0.1,3.2,0.6,21.6-8.6,25.9
          c-6.9,3.3-13-4.5-24.5-1.4c-7.4,1.9-7.1,5.7-13.7,7.9c-12.5,4.2-32-3.2-39.6-18.7C371.2,103.7,372.8,94,373.8,89.9z"
                  />
                  <path
                    d="M432.1,133.8c-4.2,1.6-9.3,6-8.6,10.8c0.7,5.5,8.7,9.2,15.1,7.9c6.7-1.4,12.4-8.5,10.8-13.7
          C447.7,133.4,438.5,131.3,432.1,133.8z"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 506">
              <use
                fill="#000"
                filter="url(#prefix__b)"
                // xlink:href="#prefix__a"
              />
              <image
                id="image"
                class="image__svg-image"
                width="100%"
                height="100%"
                clip-path="url(#mask)"
                x="-100px"
                // xlink:href="https://res.cloudinary.com/alvarosaburido/image/upload/v1589435086/blog/The%20Magic%20of%20SVG%20Clip-path/pic_yo5eyq.png"
              />
            </svg>
          </div>
        </div>
      </div> */}

      {backend.length && backend.blogPosts && !loading ? (
        backend.blogPosts.map((elem) => (
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              maxWidth: 500,
              margin: "0 auto",
              padding: 30,
            }}
          >
            {elem.title}
          </div>
        ))
      ) : (
        <p> Loading......</p>
      )}

      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* {Array.from(Array(pageCount).keys()).map((elem) => (
          <div
            style={{
              margin: 10,
            }}
          >
            {
              <button
                style={{
                  padding: 20,
                  cursor: "pointer",
                }}
                onClick={() => setPage(elem + 1)}
              >
                {elem + 1}
              </button>
            }
          </div>
        ))} */}
      </div>
    </>
  );
};

export default ClipPath;
