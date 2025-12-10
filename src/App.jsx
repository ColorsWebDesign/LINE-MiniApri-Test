import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from "./components/page1.jsx";
import Page2 from "./components/page2.jsx";
import Page3 from "./components/page3.jsx";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID
      })
      .then(() => {
        liff.getProfile()
          .then((profile) => {
            setName(profile.displayName);
          })
      })
  }, []);
  
  return (
    <div className="App">
      <div class="top">
      <div class="right">未認証</div>
      <div class="left">登録年月日 2025/10/10</div>
      </div>
      {name && <p class="name">こんにちは、<br /><span>{name}</span>さん</p>}
      <p>同窓会ミニアプリテスト版です</p>


    </div>
  );
}

export default App;
