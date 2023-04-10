// reveal-on-scroll effect

import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
const IntersectionObs = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isArticleIntersecting, setIsArticleIntersecting] = useState(false);
  const ref = useRef(null);
  const articleRef = useRef(null);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-300px" },
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

        <footer>This is the Footer</footer>
      </main>
    </div>
  );
};

export default IntersectionObs;
