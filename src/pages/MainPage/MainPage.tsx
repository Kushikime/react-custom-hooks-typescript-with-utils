import { ExamplesMenu } from '../../features/ExamplesMenu/ui/ExamplesMenu';
import ReactLogo from '/logo.png';

export const MainPage = () => {
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
};
