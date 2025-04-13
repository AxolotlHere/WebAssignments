import React, { useState } from "react";

const jokes = [
  "Joke 1",
  "Joke 2",
  "Joke 3"
];

const Content = () => {
  const [joke, setJoke] = useState("");

  const handleClick = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div>
      <button onClick={handleClick}>Tell me a joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;
