import './App.css';
import { useState, components } from 'react';


// import { ArrowRight } from 'react-bootstrap-icons';
// import * as icons from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div className="App">

      <head>
        <link href="http://man.hubwiz.com/docset/IonIcons.docset/Contents/Resources/Documents/" />
      </head>

      <header className="App-header">
      </header>

      <body>

      <nav class="navbar navbar-expand-lg bg-light navbar-dark">
        
      <div class="container">
      
        {/* <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" aria-label="Toggle navigation"
        aria-controls="navbarSupportedContent" aria-expanded="false" data-mdb-target="#navbarSupportedContent" >
            <i class="fas fa-bars"></i>
        </button> */}

     
        <div class="flex-row" id="navbarSupportedContent">
           

            <div class="notepad_logo d-flex flex-row fl-left me-1" title="Click here for Google Search">
                <img class="main-logo" src="https://notepad.pw/content/images/logo-dark.png" alt="logo" height="100%" width="90px"/>
                
            </div>

            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fl-right">

            {/* <ul class="navbar-nav d-flex flex-row me-1"> */}

                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <iconify-icon icon="ion:lock-closed"></iconify-icon>
                    </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                      <a class="nav-link mx-1 text-white" href="#">

                      <i class="fab fa-imdb fa-5x">

                      </i>

                      </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <i class="fas fa-image">

                      </i>
                    </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <i class="fab fa-google-plus-g">

                      </i>
                    </a>
                </li>

                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <i class="fas fa-image">

                      </i>
                    </a>
                </li>

                 <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <i class="fas fa-image">

                      </i>
                    </a>
                </li>

               <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <i class="fas fa-image">

                      </i>
                    </a>
                </li>


                 <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link mx-1" href="#">
                      <i class="fas fa-image">

                      </i>
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

/*
export default App;*/
