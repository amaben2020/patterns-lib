import React, { useCallback, useEffect, useRef, useState } from "react";
import Buttons from "../mutable-ref/Button";
import "./styles.css";
const ClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleIsOpen = () => setIsOpen((p) => !p);

  const handleCloseDropdown = useCallback((e) => {
    console.log(e.target);
    console.log("DOM Node", dropdownRef?.current);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleCloseDropdown);

    return () => {
      window.removeEventListener("click", handleCloseDropdown);
    };
  }, [handleCloseDropdown]);

  console.log("isOpen", isOpen);

  const storer = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("amaben", "Is  a great man");
    }
  };

  // const idxDbStorer = () => {
  //   if (!("indexedDB" in window)) {
  //     console.log("This browser doesn't support IndexedDB");
  //     return;
  //   }

  //   const dbPromise = idb.open("test-db2", 1, function (upgradeDb) {
  //     console.log("Creating a new object store.");
  //     if (!upgradeDb.objectStoreNames.contains("firstOS")) {
  //       upgradeDb.createObjectStore("firstOS");
  //     }
  //   });
  // };

  return (
    <>
      <div style={{ border: "1px solid black", display: "flex" }}>
        <button style={{ padding: 20 }} onClick={handleIsOpen}>
          isOpen
        </button>

        <button style={{ padding: 20 }} onClick={storer}>
          storer --- {localStorage.getItem("amaben") ?? "Click me"}
        </button>
      </div>
      <div>
        ClickOutside
        {/* overriding another class without using important */}
        <div className="wrapper">
          <Buttons />
        </div>
        {isOpen && (
          <div ref={dropdownRef}>
            <ul className="dropdown">
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ClickOutside;
