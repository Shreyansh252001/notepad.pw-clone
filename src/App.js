import "./App.css";
import { useState, components, ReactDOM } from "react";
import { Icon } from '@iconify/react';
// import { ArrowRight } from 'react-bootstrap-icons';
// import * as icons from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";

export function App() 
{
  const [showBasic, setShowBasic] = useState(false);
  
  return (

    <div className="App">

      <head>
        <link href="http://man.hubwiz.com/docset/IonIcons.docset/Contents/Resources/Documents/" />
      </head>

      <header className="App-header"></header>

      <body>

        <nav class="navbar navbar-expand-lg bg-light navbar-dark">

          <div class="container">
            {/* <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" aria-label="Toggle navigation"
        aria-controls="navbarSupportedContent" aria-expanded="false" data-mdb-target="#navbarSupportedContent" >
            <i class="fas fa-bars"></i>
        </button> */}

            <div class="flex-row" id="navbarSupportedContent">

              <div
                class="notepad_logo d-flex fl-left me-1"
                title="Click here for Google Search"
              >

                <img
                  class="main-logo"
                  src="https://notepad.pw/content/images/logo-dark.png"
                  alt="logo"
                  height="100%"
                  width="90px"
                />

              </div>

              <ul class="navbar-nav me-auto mb-2 mb-lg-0 fl-right" >
                {/* <ul class="navbar-nav d-flex flex-row me-1"> */}
                 
                <li class="nav-item me-3 me-lg-0">
                    <Icon icon="ion:plus"/>
                  <a class="nav-link mx-1" href="#">
                    
                  </a>
                </li>
                 
                <li class="nav-item me-3 me-lg-0">
                  <Icon icon="ion:locked" />
                  <a class="nav-link mx-1" href="#">

                  </a>
                </li>

                


                <li class="nav-item me-3 me-lg-0">
                  <Icon icon="ion:edit"/>
                  <a class="nav-link mx-1" href="#">
                    
                  </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                <Icon icon="ion:person"/>
                  <a class="nav-link mx-1" href="#">
                  
                  </a>
                </li>

               

                <li class="nav-item me-3 me-lg-0">
                  <a class="nav-link mx-1" href="#">
                    "SP"
                  </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                  <a class="nav-link mx-1" href="#">
                    "MO"
                  </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                <Icon icon="ion:lightbulb"/>
                  <a class="nav-link mx-1" href="#">
                   
                  </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                <Icon icon="ion:settings"/>
                  <a class="nav-link mx-1" href="#">
                   
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </nav>

      </body>

    </div>
  );
}


export default App;
