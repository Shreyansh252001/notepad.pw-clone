import "./App.css";
import { useState, components, ReactDOM } from "react";

import Navigation from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div className="App">
      <head>
        <link href="http://man.hubwiz.com/docset/IonIcons.docset/Contents/Resources/Documents/" />
      </head>

      <header className="App-header"></header>

      <body>
        <div class="container">
          <Navigation/>
        </div>
      </body>
    </div>
  );
}

export default App;
