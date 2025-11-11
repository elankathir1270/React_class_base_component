import "./App.css";
import Demo from "./components/Demo";

/**
 why class base component??
 prior to React 16.8, it was not possible to use functional components to manage
 states or side effects.
 
 in React 16.8, React hook were introduced for functional components like useState,useEffect, ect. 

 React hooks cannot be used in class based component.
 
 */

function App() {
  return (
    <div className="App">
      <Demo name={"Hello World!"}>
        Setting children props from App component
      </Demo>
    </div>
  );
}

export default App;
