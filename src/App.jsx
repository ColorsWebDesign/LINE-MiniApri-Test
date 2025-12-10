import { useEffect, useState } from "react";
import liff from "@line/liff";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';

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
      <p>同窓会ミニアプリテスト版です。</p>

 <BrowserRouter>
      <div class="nav">
        <div class="clm01"><img src="https://colors.cc/line_test/intro001.jpg" alt="お知らせ" /></div>
        <div class="clm03">
          <div><Link to="/page1"><img src="https://colors.cc/line_test/nav001.jpg" alt="お知らせ" /></Link></div>
          <div><Link to="/page2"><img src="https://colors.cc/line_test/nav002.jpg" alt="プロフィール" /></Link></div>
          <div><Link to="/page3"><img src="https://colors.cc/line_test/nav003.jpg" alt="同窓会" /></Link></div>
          <div><img src="https://colors.cc/line_test/nav004.jpg" alt="コミュニティ" /></div>
          <div><img src="https://colors.cc/line_test/nav005.jpg" alt="お問い合わせ" /></div>
          <div><img src="https://colors.cc/line_test/nav006.jpg" alt="設定" /></div>

        <Switch>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
        </Switch>
        </div>
      </div>
</BrowserRouter>
    </div>
  );
}

export default App;
