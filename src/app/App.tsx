import { useState } from 'react';
import ReactLogo from '/logo.png';
import './App.css';
import { ExamplesMenu } from '../features/ExamplesMenu/ui/ExamplesMenu';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ReactLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>React hooks + utils</h1>

      <p>Here is some small examples for each of the hook.</p>
      <ExamplesMenu />
    </>
  );
}

export default App;
