import { useState, useEffect } from "react";
import "./QuotesApp.css";
import Button from "./components/Button";

function QuotesApp() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const URL =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  async function getQuote() {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const quotesArr = data.quotes;
        const randomIdx = Math.floor(Math.random() * quotesArr.length);
        const newQuote = quotesArr[randomIdx].quote;
        const newAuthor = quotesArr[randomIdx].author;
        setQuote(newQuote);
        setAuthor(newAuthor);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getQuote();
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);
  return (
    <>
      <div
        className="container-fluid vh-100 d-flex justify-content-center align-items-center"
        style={{ outline: "1px solid red" }}
      >
        <section className="card" style={{ width: "500px" }}>
          <div className="card-body">
            <p className="card-text text-center">{quote}</p>
            <p className="text-right" style={{ textAlign: "right" }}>
              {author}
            </p>
          </div>

          <div className="card-body card-btns d-flex justify-content-between align-items-center">
            <div
              className="social-links d-flex justify-content-between"
              style={{ minWidth: "160px" }}
            >
              <Button text="Twitter" linkTo={"https://www.google.com"} />
              <Button text="Tumblr" linkTo={"https://www.google.com"} />
            </div>
            <button className="btn btn-primary" onClick={getQuote}>
              New Quote
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default QuotesApp;
