import { useState } from "react";

const Title = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const fruits = ["Apple", "Banana", "Blackberries"];
  const matched = fruits.filter((v) => v.includes(query));
  const onType = (e) => {
    setText(e.target.value);
  };
  const onSearch = () => {
    setQuery(text);
  };
  console.log("updated", text);
  return (
    <>
      <input value={text} onChange={onType} />
      <button onClick={onSearch}>Search</button>
      {matched.join(",")}
    </>
  );
};
