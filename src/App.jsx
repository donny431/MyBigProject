import React from "react";
import { Route, Routes } from "react-router-dom";
import LayOut from "./pages/LayOut";
import Home from "./pages/Home";
import { TabsDefault } from "./pages/About";
import Otzv from "./pages/Otzv";
import Prt from "./pages/Prt";
import Rus from "./pages/Rus";
import Uzs from "./pages/Uzs";
import Support from "./pages/support";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="otzv" element={<Otzv />} />
          <Route path="about" element={<TabsDefault />} />
          <Route path="prt" element={<Prt/>}/>
          <Route path="rus" element={<Rus/>}/>
          <Route path="uzs" element={<Uzs/>}/>
          <Route path='support' element={<Support/>}/>

        </Route>
      </Routes>
    </div>
  );
}
