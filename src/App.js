import "./App.css";
import Demo from "./components/Demo";
import ErrorBoundry from "./components/ErrorBoundries";
import DemoContext from "./DemoContext";

/**
 why class base component??
 prior to React 16.8, it was not possible to use functional components to manage
 states or side effects.
 
 in React 16.8, React hook were introduced for functional components like useState,useEffect, ect. 

 React hooks cannot be used in class based component.
 
 */

function App() {
  return (
    //using Context Provider to provide context value to all child components
    <DemoContext.Provider value={{ value: "This is demo context value" }}>
      <div className="App">
        <ErrorBoundry>
          <Demo name={"Hello World!"}>
            Setting children props from App component
          </Demo>
        </ErrorBoundry>
      </div>
    </DemoContext.Provider>
  );
}

export default App;
