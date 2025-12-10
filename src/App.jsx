import { useEffect, useState } from "react";
import liff from "@line/liff";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from "./components/page1.jsx"; // pageA.jsxの読み込み
import Page2 from "./components/page2.jsx"; // pageB.jsxの読み込み
import Page3 from "./components/page3.jsx"; // pageB.jsxの読み込み
import "./App.css";

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

 <BrowserRouter>
      <div class="nav">
        <div class="clm01"><img src="https://colors.cc/line_test/intro001.jpg" alt="お知らせ" /></div>
        <div class="clm03">
          <div><Link to="/page1">Page1</Link></div>
          <div><Link to="/page2">Page2</Link></div>
          <div><Link to="/page3">Page3</Link></div>
          <div><img src="https://colors.cc/line_test/nav004.jpg" alt="コミュニティ" /></div>
          <div><img src="https://colors.cc/line_test/nav005.jpg" alt="お問い合わせ" /></div>
          <div><img src="https://colors.cc/line_test/nav006.jpg" alt="設定" /></div>

       <Routes>
           <Route path="/page1" element={<Page1 />} />
           <Route path="/page2" element={<Page2 />} />
           <Route path="/page3" element={<Page3 />} />
       </Routes>

        </div>
      </div>
</BrowserRouter>
    </div>
  );
}

export default App;
