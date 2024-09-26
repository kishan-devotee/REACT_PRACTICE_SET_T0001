import React, { useEffect, useState } from "react";
import { quotes } from "../JsonData/Data";

interface User {
  quote: string;
  author: string;
}

const DynamicQuote = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [randomQuoteIndex, setRandomQuoteIndex] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(quotes);
      const index = Math.floor(Math.random() * quotes.length);
      setRandomQuoteIndex(index);
    }, 200);
  }, []);

  if (!data || randomQuoteIndex === null) {
    return <div>Loading...</div>;
  }

  const randomQuote = data[randomQuoteIndex];

  return (
    <div>
      <h1>{randomQuote.quote}</h1>
      <p>Author: {randomQuote.author}</p>
    </div>
  );
};

export default DynamicQuote;
