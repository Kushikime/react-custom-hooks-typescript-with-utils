import { Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import './App.css';
import { MainPage, UseTogglePage } from '../pages';
import { ExamplePageLayout } from '../components/shared/ExamplePageLayout/ui/ExamplePageLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Get url by examples to human readable util */}
        <Route path="/use-toggle" element={withExampleLayout(UseTogglePage)} />
      </Routes>
    </>
  );
}

const withExampleLayout = (Page: FC) => (
  <ExamplePageLayout>
    <Page />
  </ExamplePageLayout>
);

export default App;
