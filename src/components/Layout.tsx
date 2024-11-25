import { Outlet, useNavigate } from "react-router-dom";
import bmwl from "../assets/like.png";
import bmwm from "../assets/man.png";
import bmws from "../assets/spa.png";
import bmwNav from "../assets/sticker.webp";
import bmwt from "../assets/tele.png";
import bmwu from "../assets/user.png";

const Layout = () => {
  const navigation = useNavigate();

  const handleNavigateToHome = () => {
    navigation("/");
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const handleNavigateToContacts = () => {
    navigation("/");
    requestAnimationFrame(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  return (
    <header>
      <nav className="nav">
        <ul className="navigation">
          <li className="bmwNav">
            <img src={bmwNav} alt="bmw" width={40} onClick={handleNavigateToHome}/>
          </li>
          <li className="bmwt" onClick={handleNavigateToContacts}>
            <img src={bmwt} alt="bmw" width={27}/>
          </li>
          <li className="bmws">
            <img src={bmws} alt="bmw" width={27} onClick={() => navigation("/support")}/>
          </li>
          <li className="bmwm">
            <img src={bmwm} alt="bmw" width={27}/>
          </li>
          <li className="bmwl">
            <img src={bmwl} alt="bmw" width={27}/>
          </li>
          <li className="bmwu" onClick={() => navigation("/login")}>
            <img src={bmwu} alt="bmw" width={25}/>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </header>
  );
};

export default Layout;
