"use client"
// API PAGE
import { useState } from "react";

export default function Page() {
  const DATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
  const[data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch(DATA_URL);
    console.log(response)
    const data = await response.json();
    console.log(data)
    setData(data);
  }

  const DisplayMedia = () => {
    if (data){
      let mediaList = [];
      data.forEach((medium, index) => {
        let formattedMedia = medium.media_type === 'image' ? <img src={medium.url} /> : (
        <video controls width="250">
          <source src={medium.url} type="vide/webm"/>
        </video>
        )
        mediaList.push(
          <li key={index}>
            {formattedMedia}
            <h3>{medium.title} </h3>
            {medium.explanation}
          </li>
        );
      });

      return (
        <div className="border-4 border-black p-4 mb-4">
        <ul>
          {mediaList}
        </ul>
      </div>
      )
    } else {
      return (
        <div className="border-4 border-black p-4 mb-4">
          🪐💫🌙🌎
      </div>
      )
    }
  }

  return (
    <div className="p-4 bg-pink-300">
      <header className="border-4 border-black p-4 mb-4">
        <h1>Welcome to NASA' Media page</h1>
        <button 
        className="bg-black px-6"
        onClick={fetchData}
        >
          Fetch Media!
        </button>
      </header>
      <DisplayMedia/>
    </div>
  );
}
