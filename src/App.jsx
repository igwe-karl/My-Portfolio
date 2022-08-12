import React from "react";
import { About } from "./components/about";
import { Project } from "./components/project";
import { Skills } from "./components/skills";

const App = () => {
  return (
    <div className="ui container">
      <div>
        <About />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default App;
