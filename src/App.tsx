import "./App.css";

import bmwImg from "./assets/4k-bmw-m4-f82-drift-bmw-m.jpg";
import bmwNav from "./assets/sticker.webp";

function App() {
  return (
    <div>
      <div className="navigationWrapper">
        <nav className="nav">
          <ul className="navigation">
            <li className="bmwNav">
              <img src={bmwNav} alt="bmw" width={70} />
            </li>
            <li>user account</li>
            <li>motorbike</li>
            <li>rental conditions</li>
            <li>contacts</li>
          </ul>
        </nav>
        <img src={bmwImg} alt="bmw" className="banner" />
      </div>
    </div>
  );
}

export default App;
