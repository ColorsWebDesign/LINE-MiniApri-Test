// src/Routes.jsx
import { Routes, Route } from "react-router-dom";
import Page1 from "./components/page1.jsx"; // pageA.jsxの読み込み
import Page2 from "./components/page2.jsx"; // pageB.jsxの読み込み
import Page3 from "./components/page3.jsx"; // pageB.jsxの読み込み

export const AppRoutes = () => {
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/group" element={<Group />} />
    </Routes>
   )
}