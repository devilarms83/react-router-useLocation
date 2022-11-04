import React from "react";
import "./style.css";
import Home from './components/Home'
import News from './components/News'
import Weather from './components/Weather'
import Sports from './components/Sports'
import Sport from './components/Sport'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to=''>Home</Link>
          <Link to='news'>News</Link>
          <Link to='weather'>Weather</Link>
          <Link to='sports'>Sports</Link>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path='news' element={<News />} />
          <Route path='weather' element={<Weather />} />
          <Route path='sports' element={<Sports />} >
            <Route path=':id' element={<Sport />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}


/*
BrowswerRouter - parent that allows us to navigate to different urls

Routes - (sibling to NavLink, NavLink)
    Route - component that mounts the component you want to render

Link - changes the url, "to" prop tells the app what the url should be
*/