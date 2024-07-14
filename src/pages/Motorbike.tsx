import { Fragment } from "react/jsx-runtime";
import motorbikeImg1 from "../assets/motorbike/image_motorbike/motorbike-1.webp";
import motorbikeImg2 from "../assets/motorbike/image_motorbike/motorbike-2.webp";
import motorbikeImg3 from "../assets/motorbike/image_motorbike/motorbike-3.webp";
import motorbikeImg4 from "../assets/motorbike/image_motorbike/motorbike-4.webp";
import motorbikeImg5 from "../assets/motorbike/image_motorbike/motorbike-5.webp";
import motorbikeImg6 from "../assets/motorbike/image_motorbike/motorbike-6.webp";
import motorbikeImg7 from "../assets/motorbike/image_motorbike/motorbike-7.webp";
import motorbikeImg8 from "../assets/motorbike/image_motorbike/motorbike-8.webp";
import motorbikeImg9 from "../assets/motorbike/image_motorbike/motorbike-9.webp";
import motorbikeImg10 from "../assets/motorbike/image_motorbike/motorbike-10.webp";


import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

const MotorbikeItems: DetailedCardData[] = [
  {
    id: 0,
    name: "BMW S 1000 RR",
    img: motorbikeImg1,
    rentDaily: 150,
    rentWeekly: 200,
    rentMonthly: 350,
    rentYearly: 1700,
  },
  {
    id: 1,
    name: "BMW R 1250 RS",
    img: motorbikeImg2,
    rentDaily: 50,
    rentWeekly: 300,
    rentMonthly: 350,
    rentYearly: 1780,
  },
  {
    id: 2,
    name: "BMW S 1000 XR",
    img: motorbikeImg3,
    rentDaily: 100,
    rentWeekly: 250,
    rentMonthly: 300,
    rentYearly: 2000,
  },
  {
    id: 3,
    name: "BMW F 900 XR",
    img: motorbikeImg4,
    rentDaily: 170,
    rentWeekly: 190,
    rentMonthly: 360,
    rentYearly: 1800,
  },
  {
    id: 4,
    name: "BMW M 1000 RR",
    img: motorbikeImg5,
    rentDaily: 200,
    rentWeekly: 240,
    rentMonthly: 400,
    rentYearly: 2000,
  },
  {
    id: 5,
    name: "BMW M 1000 R",
    img: motorbikeImg6,
    rentDaily: 190,
    rentWeekly: 240,
    rentMonthly: 390,
    rentYearly: 1900,
  },
  {
    id: 6,
    name: "BMW R 1300 GS",
    img: motorbikeImg7,
    rentDaily: 190,
    rentWeekly: 240,
    rentMonthly: 390,
    rentYearly: 1900,
  },
  {
    id: 7,
    name: "BMW R 1250 GS",
    img: motorbikeImg8,
    rentDaily: 170,
    rentWeekly: 190,
    rentMonthly: 360,
    rentYearly: 1800,
  },
  {
    id: 8,
    name: "BMW CE 04",
    img: motorbikeImg9,
    rentDaily: 190,
    rentWeekly: 240,
    rentMonthly: 390,
    rentYearly: 1900,
  },
  {
    id: 9,
    name: "BMW S 1000 R",
    img: motorbikeImg10,
    rentDaily: 190,
    rentWeekly: 240,
    rentMonthly: 390,
    rentYearly: 1900,
  },
];

function Motorbike() {
  return (
    <div className="bg-[url(/src/assets/motorbike-background.jpeg)] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="mt-[63px] pt-3">
        <div className="flex gap-5 flex-wrap justify-around mt-10">
          {MotorbikeItems.map((motorbikeItem, index) => (
            <Fragment key={index}>
              <DetailedCard index={index} data={motorbikeItem} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Motorbike;
