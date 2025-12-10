import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

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

      <button onClick={() => navigate("/profile")}>プロフィールへ</button>
      <button onClick={() => navigate("/group")}>グループへ</button>
      <div class="nav">
        <div class="clm01"><img src="https://colors.cc/line_test/intro001.jpg" alt="お知らせ" /></div>
        <div class="clm03">
          <div><img src="https://colors.cc/line_test/nav001.jpg" alt="コミュニティ" /></div>
          <div><img src="https://colors.cc/line_test/nav002.jpg" alt="コミュニティ" /></div>
          <div><img src="https://colors.cc/line_test/nav003.jpg" alt="コミュニティ" /></div>
          <div><img src="https://colors.cc/line_test/nav004.jpg" alt="コミュニティ" /></div>
          <div><img src="https://colors.cc/line_test/nav005.jpg" alt="お問い合わせ" /></div>
          <div><img src="https://colors.cc/line_test/nav006.jpg" alt="設定" /></div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/group" element={<Group />} />
    </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
