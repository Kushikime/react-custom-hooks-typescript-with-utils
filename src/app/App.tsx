import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import { MainPage, UseTogglePage } from '../pages';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Get url by examples to human readable util */}
        <Route path="/use-toggle" element={<UseTogglePage />} />
      </Routes>
    </>
  );
}

export default App;
