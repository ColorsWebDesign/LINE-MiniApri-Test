// src/Routes.jsx
import { Routes, Route } from "react-router-dom";
import Page1 from "./components/page1.jsx"; // pageA.jsxの読み込み
import Page2 from "./components/page2.jsx"; // pageB.jsxの読み込み
import Page3 from "./components/page3.jsx"; // pageB.jsxの読み込み

export const AppRoutes = () => {
   return (
       <Routes>
           <Route path="/page1" element={<Page1 />} />
           <Route path="/page2" element={<Page2 />} />
           <Route path="/page3" element={<Page3 />} />
       </Routes>
   )
}