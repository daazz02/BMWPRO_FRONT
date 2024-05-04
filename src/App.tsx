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
              <img src={bmwNav} alt="bmw" width={40} />
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
        <img src={bmwImg} alt="bmw" className="banner" />
      </div>
      <div className="figure" />
      <div className="baanner2">
        {/* Сетка карточек товаров */}
        <div className="cards">
          {/* Карточка товара */}
          <div className="card card__blue">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagee">
                <img src="./src/assets/sticker%203.webp" />
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              {/* Кнопка добавить в корзину */}
              <a href="average.html">
                <button className="card__add">average</button>
              </a>
            </div>
          </div>
          <div className="card card__dark-blue">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagees">
                <img src="./src/assets/sticker%202.webp" alt="" />
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              {/* Кнопка добавить в корзину */}
              <button className="card__add">business</button>
            </div>
          </div>
          <div className="card card__red">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagess">
                <img src="./src/assets/sticker%204.webp" alt="" />
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              {/* Кнопка добавить в корзину */}
              <button className="card__add">sports</button>
            </div>
          </div>
          <div className="card card__gray">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagen">
                <img src="./src/assets/sticker%205.webp" alt="" />
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              {/* Кнопка добавить в корзину */}
              <button className="card__add">motorbike</button>
            </div>
          </div>
        </div>
        <div className="baanner3">
          <div className="video-container">
            <video controls loop preload="auto">
              <source src="src/assets/gif2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="baanner4">
          <div className="dop">
            <p>THE HOUR OF DREAMS WILL COME</p>
          </div>
        </div>
        <div className="figure" />
        <div className="baanner5">
          <p className="ban5">
            <a href="mailto:darykrv@example.com" target="_blank">
              darykrv@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
