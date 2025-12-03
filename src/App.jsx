import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";
import { page1 } from './components/page1'
import { page2 } from './components/page2'
import { page3 } from './components/page3'

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
<Router>
      <div class="nav">
        <div class="clm01"><img src="https://colors.cc/line_test/intro001.jpg" alt="お知らせ" /></div>
        <div class="clm03">
          <div><Link to="/page1"><img src="https://colors.cc/line_test/nav001.jpg" alt="お知らせ" /></Link></div>
          <div><Link to="/page2"><img src="https://colors.cc/line_test/nav002.jpg" alt="プロフィール" /></Link></div>
          <div><Link to="/page3"><img src="https://colors.cc/line_test/nav003.jpg" alt="同窓会" /></Link></div>
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
</Router>
    </div>
  );
}

export default App;
