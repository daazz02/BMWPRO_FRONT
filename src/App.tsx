import { useNavigate } from "react-router-dom";
import bmwImg from "./assets/4k-bmw-m4-f82-drift-bmw-m.jpg";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <header className="navigationWrapper"> */}
      <img src={bmwImg} alt="bmw" className="banner" />
      {/* </header> */}
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
                <button className="card__add" onClick={() => navigate("average")}>average</button>
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
              <button className="card__add" onClick={() => navigate("business")}>business</button>
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
              <button className="card__add" onClick={() => navigate("sports")}>sports</button>
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
              <button className="card__add" onClick={() => navigate("motorbike")}>
                motorbike
              </button>
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
        {/*<div className="baanner4">*/}
        {/*  <div className="dop">*/}
        {/*    <p>THE HOUR OF DREAMS WILL COME</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
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
