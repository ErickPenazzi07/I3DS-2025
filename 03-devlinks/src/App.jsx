import "./App.css";
import foto from "./img/download.jpg";

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import fotoLight from "./img/download.jpg";
import fotoDark from "./img/perfillight.jpg";
import { useState } from "react";


const App = () => {
  const[isLight, setIsLight] = useState(true);
  
  const troca = () => {
    setIsLight(!isLight);
  }


  return (
    <div id="App" className={isLight && "light"}>
      <Perfil fotoPerfil={isLight ? fotoLight : fotoDark}>@DevErick</Perfil>
      <Switch troca={troca} islight={isLight}/>
      
      <div id="container">
      <ul>
        <Links link={"https://www.google.com/"}>Google</Links>
        <Links link={"https://www.instagram.com/"}>Instagram</Links>
        <Links link={"https://www.github.com/"}>Portifólio</Links>
        <Links link={"https://br.linkedin.com/"}>Projetos</Links>
      </ul>
      </div>

      <div id="socialLinks">
        <SocialLinks link={"https://www.google.com/"} icon={"logo-github"} />
        <SocialLinks link={"https://www.instagram.com/"} icon={"logo-instagram"} />
        <SocialLinks link={"https://www.youtube.com/"} icon={"logo-youtube"} />
        <SocialLinks link={"https://br.linkedin.com/"} icon={"logo-linkedin"} />
      </div>
      <Rodape>DevErick</Rodape>
    </div>
  );
};

export default App;
