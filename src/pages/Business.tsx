import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

import Business1 from "../assets/bmw_image/image_bisn/BMW_7.webp";
import Business2 from "../assets/bmw_image/image_bisn/BMW_i7.webp";
import Business3 from "../assets/bmw_image/image_bisn/BMW_i8.webp";
import Business4 from "../assets/bmw_image/image_bisn/BMW_m5.webp";
import Business5 from "../assets/bmw_image/image_bisn/BMW_i5.webp";
import Business6 from "../assets/bmw_image/image_bisn/BMW_m3.webp";
import Business7 from "../assets/bmw_image/image_bisn/BMW_3.webp";

const businessItems: DetailedCardData[] = [
  {
    id: 0,
    name: "BMW 7",
    img: Business1,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 1,
    name: "BMW i7",
    img: Business2,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 2,
    name: "BMW i8",
    img: Business3,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 3,
    name: "BMW m5",
    img: Business4,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 4,
    name: "BMW i5",
    img: Business5,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 5,
    name: "BMW m3",
    img: Business6,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },

  {
    id: 6,
    name: "BMW 3",
    img: Business7,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
];

function Business() {
  return (
    <div className="bg-[url(/src/assets/busineesbann.jpg)] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="mt-[63px] pt-3">
        <div className="flex gap-5 flex-wrap justify-around">
          {businessItems.map((data, index) => (
            <Fragment key={index}>
              <DetailedCard index={index} data={data} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Business;
