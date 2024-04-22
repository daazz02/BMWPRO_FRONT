import "./App.css";

import bmwImg from "./assets/4k-bmw-m4-f82-drift-bmw-m.jpg";
import bmwNav from "./assets/sticker.webp";
import bmwu from "./assets/user.png";
import bmwl from "./assets/like.png";
import bmwm from "./assets/man.png";
import bmws from "./assets/spa.png";
import bmwt from "./assets/tele.png";




function App() {
  return (
    <div>
      <div className="navigationWrapper">
        <nav className="nav">
          <ul className="navigation">
            <li className="bmwNav">
              <img src={bmwNav} alt="bmw" width={40}/>
            </li>
            <li className="bmwt">
              <img src={bmwt} alt="bmw" width={27}/>
            </li>
            <li className="bmws">
              <img src={bmws} alt="bmw" width={27}/>
            </li>
            <li className="bmwm">
              <img src={bmwm} alt="bmw" width={27}/>
            </li>
            <li className="bmwl">
              <img src={bmwl} alt="bmw" width={27}/>
            </li>
            <li className="bmwu">
              <img src={bmwu} alt="bmw" width={25}/>
            </li>

          </ul>
        </nav>
        <img src={bmwImg} alt="bmw" className="banner"/>
      </div>
    </div>
  );
}

export default App;
