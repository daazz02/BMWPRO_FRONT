import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

import BMW1 from "../assets/bmw_image/image_average/BMW_M1.webp";
import BMW2 from "../assets/bmw_image/image_average/BMW_850i.webp";
import BMW3 from "../assets/bmw_image/image_average/BMW_GINA.webp";
import BMW4 from "../assets/bmw_image/image_average/BMW_507.webp";
import BMW5 from "../assets/bmw_image/image_average/BMW_328_HOMMAGE.webp";
import BMW6 from "../assets/bmw_image/image_average/BMW_7.webp";
import BMW7 from "../assets/bmw_image/image_average/BMW_VISION_NEXT_100.webp";
import BMW8 from "../assets/bmw_image/image_average/BMW_5.webp";
import BMW9 from "../assets/bmw_image/image_average/BMW_328.webp";





const averageItems: DetailedCardData[] = [
  {
    id: 0,
    name: "BMW M1",
    img: BMW1,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 1,
    name: "BMW 850i",
    img: BMW2,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 2,
    name: "BMW GINA",
    img: BMW3,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 3,
    name: "BMW 507",
    img: BMW4,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 4,
    name: "BMW 328 HOMMAGE",
    img: BMW5,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 5,
    name: "BMW 7",
    img: BMW6,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },

  {
    id: 6,
    name: "BMW VISION NEXT 100",
    img: BMW7,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 7,
    name: "BMW 5",
    img: BMW8,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 8,
    name: "BMW 328",
    img: BMW9,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
];

function Average() {
  return (
    <div className="bg-[url(/src/assets/averagebanne.jpg)] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="mt-[63px] pt-3">
        <div className="flex gap-5 flex-wrap justify-around">
          {averageItems.map((data, index) => (
            <Fragment key={index}>
              <DetailedCard index={index} data={data} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Average;
