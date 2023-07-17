"use client";
import React, { useEffect, useState } from "react";

import "./styles.css";

const url =
  "https://cors-anywhere.herokuapp.com/https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=21324812";

const page = () => {
  const [News, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const text = await fetch(url).then((r) => r.text());
    const xmlDoc = new DOMParser().parseFromString(text, "text/xml");
    const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => ({
      title: item.querySelector("title").textContent,
      description: item.querySelector("description").childNodes[0].data,
      date: item.querySelector("pubDate").textContent,
    }));
    setNews(items);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">News</h1>
      </header>
      <div className="App-feeds" />
      <div className="panel-list">
        {News.length === 0 && <p>Loading...</p>}
        {News.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
            <p>{item.date}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
