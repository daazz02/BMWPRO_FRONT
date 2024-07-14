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
                <img src="./src/assets/sticker%203.webp"/>
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              <button
                  className="card__add text-white w-[190px] h-[50px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #090f30, #000000, #190631)"
                  }}
                  onClick={() => navigate("average")}
              >
                average
              </button>
            </div>
          </div>
          <div className="card card__dark-blue">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagees">
                <img src="./src/assets/sticker%202.webp" alt=""/>
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              <button
                  className="card__add text-white w-[190px] h-[50px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #090f30, #000000, #190631)"
                  }}
                  onClick={() => navigate("business")}
              >
                average
              </button>
            </div>
          </div>
          <div className="card card__red">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagess">
                <img src="./src/assets/sticker%204.webp" alt=""/>
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              <button
                  className="card__add text-white w-[190px] h-[50px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #090f30, #000000, #190631)"
                  }}
                  onClick={() => navigate("sports")}
              >
                average
              </button>
            </div>
          </div>
          <div className="card card__gray">
            <div className="card__top">
              {/* Изображение-ссылка товара */}
              <a href="#" className="card__imagen">
                <img src="./src/assets/sticker%205.webp" alt=""/>
              </a>
            </div>
            {/* Нижняя часть */}
            <div className="card__bottom">
              <button
                  className="card__add text-white w-[190px] h-[50px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #090f30, #000000, #190631)"
                  }}
                  onClick={() => navigate("motorbike")}
              >
                average
              </button>
            </div>
          </div>
        </div>
        <div className="baanner3">
          <div className="video-container">
            <video controls loop preload="auto">
              <source src="src/assets/gif2.mp4" type="video/mp4"/>
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
//
// import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Success from "./pages/Success";
// import bmwImg from "./assets/4k-bmw-m4-f82-drift-bmw-m.jpg";
//
// const Home = () => {
//   const navigate = useNavigate();
//   return (
//       <div>
//         <img src={bmwImg} alt="bmw" className="banner" />
//         <div className="figure" />
//         <div className="baanner2">
//           <div className="cards">
//             <div className="card card__blue">
//               <div className="card__top">
//                 <a href="#" className="card__imagee">
//                   <img src="./src/assets/sticker%203.webp" alt="sticker 3" />
//                 </a>
//               </div>
//               <div className="card__bottom">
//                 <button className="card__add" onClick={() => navigate("/average")}>average</button>
//               </div>
//             </div>
//             <div className="card card__dark-blue">
//               <div className="card__top">
//                 <a href="#" className="card__imagees">
//                   <img src="./src/assets/sticker%202.webp" alt="sticker 2" />
//                 </a>
//               </div>
//               <div className="card__bottom">
//                 <button className="card__add" onClick={() => navigate("/business")}>business</button>
//               </div>
//             </div>
//             <div className="card card__red">
//               <div className="card__top">
//                 <a href="#" className="card__imagess">
//                   <img src="./src/assets/sticker%204.webp" alt="sticker 4" />
//                 </a>
//               </div>
//               <div className="card__bottom">
//                 <button className="card__add" onClick={() => navigate("/sports")}>sports</button>
//               </div>
//             </div>
//             <div className="card card__gray">
//               <div className="card__top">
//                 <a href="#" className="card__imagen">
//                   <img src="./src/assets/sticker%205.webp" alt="sticker 5" />
//                 </a>
//               </div>
//               <div className="card__bottom">
//                 <button className="card__add" onClick={() => navigate("/motorbike")}>motorbike</button>
//               </div>
//             </div>
//           </div>
//           <div className="baanner3">
//             <div className="video-container">
//               <video controls loop preload="auto">
//                 <source src="src/assets/gif2.mp4" type="video/mp4" />
//               </video>
//             </div>
//           </div>
//           <div className="figure" />
//           <div className="baanner5">
//             <p className="ban5">
//               <a href="mailto:darykrv@example.com" target="_blank">
//                 darykrv@gmail.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//   );
// };
//
// function App() {
//   return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/success" element={<Success />} />
//         </Routes>
//       </Router>
//   );
// }

export default App;
