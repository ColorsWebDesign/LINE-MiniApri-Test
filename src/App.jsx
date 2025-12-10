import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import liff from "@line/liff";
import "./App.css";

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
        </div>

<Router>
<div className="p-4 space-y-4">
<h1 className="text-2xl font-bold">LINE ミニアプリ ページ遷移デモ</h1>
<nav className="flex space-x-4">
<Link className="underline" to="/">Home</Link>
<Link className="underline" to="/profile">プロフィール</Link>
<Link className="underline" to="/next">openWindow 遷移</Link>
</nav>

<Routes>
<Route path="/" element={<Home />} />
<Route path="/profile" element={<Profile />} />
<Route path="/next" element={<OpenWindowDemo />} />
</Routes>
</div>
</Router>

        
      </div>
    </div>
  );
}

function Home() {
const navigate = useNavigate();
return (
<div className="p-4 border rounded-xl shadow">
<h2 className="text-xl font-semibold mb-2">Home 画面</h2>
<p className="mb-4">React Router を使った通常の画面遷移。</p>
<button
className="px-4 py-2 bg-blue-500 text-white rounded-xl"
onClick={() => navigate("/profile")}
>
プロフィールへ
</button>
</div>
);
}


function Profile() {
return (
<div className="p-4 border rounded-xl shadow">
<h2 className="text-xl font-semibold mb-2">プロフィール画面</h2>
<p className="mb-2">これは通常のルーティング遷移で開いた画面です。</p>
<p>必要ならユーザー情報表示や編集フォームを作成可能。</p>
</div>
);
}


function OpenWindowDemo() {
const open = () => {
liff.openWindow({
url: "https://example.com/another-page",
external: false,
});
};


return (
<div className="p-4 border rounded-xl shadow">
<h2 className="text-xl font-semibold mb-2">openWindow 遷移デモ</h2>
<p className="mb-4">別 URL の LIFF ページを開く遷移方法。</p>
<button
className="px-4 py-2 bg-green-600 text-white rounded-xl"
onClick={open}
>
別ページを openWindow で開く
</button>
</div>
);
}


export default App;
