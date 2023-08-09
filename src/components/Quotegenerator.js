import React, { useEffect, useState } from "react";
import "./QuoteGenerator.css"

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.kanye.rest/");
      try {
        const json = await response.json();
        setQuote(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const refreshPage = async () => {
    try {
      const response = await fetch("https://api.kanye.rest/");
      const json = await response.json();
      setQuote(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="quote">{quote.quote}</h1>
        <button className="refresh-button" onClick={refreshPage}>
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
