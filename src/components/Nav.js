import github from "../img/github.png";
import instagram from "../img/instagram.png";
import linkedin from "../img/linkedin.png";
import whatsap from "../img/whatsap.png";
import { useState } from "react";
import About from "./About";
function Nav() {
  //state inicializado
  const [button, setButton] = useState("");

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid ">
          <div class="container-bloques">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => setButton("about")}
                >
                  Sobre me
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-success">
                  proyectos
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-success">
                  Plantillas
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-success">
                  ...
                </button>
              </li>
            </ul>
          </div>
          <div class="container-redes">
            <img src={github} class="img-fluid" alt="github" />
            <img src={instagram} class="img-fluid" alt="instagram" />
            <img src={linkedin} class="img-fluid" alt="linkedin" />
            <img src={whatsap} class="img-fluid" alt="whatsap" />
          </div>
        </div>
      </nav>
      <div class="container ">
        <div class="row">
          <div class="col border border-primary">
            {button === "about" && <About />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
