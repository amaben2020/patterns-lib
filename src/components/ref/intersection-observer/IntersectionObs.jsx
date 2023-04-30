// reveal-on-scroll effect

import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
const IntersectionObs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isArticleIntersecting, setIsArticleIntersecting] = useState(false);
  const [isExpandedIntersecting, setIsExpandedIntersecting] = useState(false);

  const ref = useRef(null);
  const articleRef = useRef(null);

  useEffect(() => {
    const showStuff = setTimeout(() => {
      alert("Show after duration");
    }, 3000);

    return () => {
      clearTimeout(showStuff);
    };
  }, []);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          console.log("isIntersecting", entry);
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px", threshold: [0, 0.25, 0.5, 0.75, 1] },
      );

      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsArticleIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-200px",
      },
    );
    observer.observe(articleRef?.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isArticleIntersecting) {
      articleRef.current.classList.add("title-in");
    } else {
      articleRef.current.classList.remove("title-in");
    }
  }, [isArticleIntersecting]);

  const expandRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsExpandedIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-300px",
      },
    );

    observer.observe(expandRef?.current);
  }, []);

  useEffect(() => {
    if (isExpandedIntersecting) {
      expandRef?.current.classList.add("expand-in");
    } else {
      expandRef?.current.classList.remove("expand-in");
    }
  }, [isExpandedIntersecting]);

  return (
    <div style={{ border: "1px solid green" }}>
      <main>
        <header>This is the Header</header>
        <main className="main" ref={ref}>
          <div className="child-one">Child One</div>
          <div className="child-two">Child Two</div>
        </main>

        <h2 ref={articleRef} className="title">
          AMABEN
        </h2>

        <div
          className="expand"
          ref={expandRef}
          style={{
            width: 400,
          }}
        >
          <div>One</div>
          <div>Two</div>
        </div>

        <div>Page Yoffset --- {window.pageYOffset}</div>

        <footer>This is the Footer</footer>
      </main>
    </div>
  );
};

export default IntersectionObs;
