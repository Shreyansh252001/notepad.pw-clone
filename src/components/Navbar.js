import {components, ReactDOM } from "react"
// import { useState } from "react"
import { Icon } from "@iconify/react";

function Navigation () {
  //  const [showBasic, setShowBasic] = useState(false);

    return ( 
        <nav class="navbar navbar-expand-lg bg-light navbar-dark">


            <div class="flex">

              <div
                class="notepad_logo d-flex fl-left me-1"
                title="Click here for Google Search">

                <img
                  class="main-logo"
                  src="https://notepad.pw/content/images/logo-dark.png"
                  alt="logo"
                  height="100%"
                  width="90px"
                />

              </div>

              <ul class="d-flex navbar-nav me-auto mb-2 justify-content-end">

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

        </nav>
 );
}

export default Navigation ;