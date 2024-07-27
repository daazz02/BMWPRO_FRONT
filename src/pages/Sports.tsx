import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

import sports1 from "../assets/bmw_image/image_sports/BMW M2.webp";
import sports2 from "../assets/bmw_image/image_sports/BMW X3 M.webp";
import sports3 from "../assets/bmw_image/image_sports/BMW X4 M.webp";
import sports4 from "../assets/bmw_image/image_sports/BMW M4.webp";
import sports5 from "../assets/bmw_image/image_sports/BMW X6 M.webp";
import sports6 from "../assets/bmw_image/image_sports/BMW M8 COUPE.webp";
import sports7 from "../assets/bmw_image/image_sports/BMW M8 Gran Cou.webp";


const sportsItems: DetailedCardData[] = [
  {
    id: 0,
    name: "BMW M2 Competition",
    img: sports1,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 1,
    name: "BMW X3 M Competition",
    img: sports2,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 2,
    name: "BMW X4 M Competition",
    img: sports3,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 3,
    name: "BMW M4 Competition",
    img: sports4,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },

  {
    id: 4,
    name: "BMW X6 M.",
    img: sports5,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },

  {
    id: 5,
    name: "BMW M8 COUPE",
    img: sports6,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 6,
    name: "BMW M8 Gran Coupe",
    img: sports7,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
];

function Sports() {
  return (
    <div className="bg-[url(/src/assets/sportsbann.jpg)] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="mt-[63px] pt-3">
        <div className="flex gap-5 flex-wrap justify-around">
          {sportsItems.map((data, index) => (
            <Fragment key={index}>
              <DetailedCard index={index} data={data} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sports;
