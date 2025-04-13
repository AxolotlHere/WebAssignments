import React, { useEffect, useState } from "react";

const JokeFetcher = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch joke.");
    }
  };

  useEffect(() => {
    fetchJoke(); 
  }, []);

  return (
    <div>
      <h3>Random Joke</h3>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default JokeFetcher;
