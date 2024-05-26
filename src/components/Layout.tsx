import { Outlet, useNavigate } from "react-router-dom";
import bmwl from "../assets/like.png";
import bmwm from "../assets/man.png";
import bmws from "../assets/spa.png";
import bmwNav from "../assets/sticker.webp";
import bmwt from "../assets/tele.png";
import bmwu from "../assets/user.png";

const Layout = () => {
  const navigation = useNavigate();
  return (
    <header>
      <nav className="nav">
        <ul className="navigation">
          <li className="bmwNav">
            <img src={bmwNav} alt="bmw" width={40} onClick={() => navigation("/")} />
          </li>
          <li className="bmwt">
            <img src={bmwt} alt="bmw" width={27} />
          </li>
          <li className="bmws">
            <img src={bmws} alt="bmw" width={27} />
          </li>
          <li className="bmwm">
            <img src={bmwm} alt="bmw" width={27} />
          </li>
          <li className="bmwl">
            <img src={bmwl} alt="bmw" width={27} />
          </li>
          <li className="bmwu">
            <img src={bmwu} alt="bmw" width={25} />
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Layout;
