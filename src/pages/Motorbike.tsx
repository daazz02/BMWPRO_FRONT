import { Fragment } from "react/jsx-runtime";
import motorbikeImg1 from "../assets/motorbike/motorbike-1.webp";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

const MotorbikeItems: DetailedCardData[] = [
  {
    id: 0,
    name: "Honda",
    img: motorbikeImg1,
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 1,
    name: "Yamaha",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 2,
    name: "Suzuki",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 3,
    name: "Kawasaki",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 4,
    name: "Ducati",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 5,
    name: "BMW",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 6,
    name: "Harley Davidson",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 7,
    name: "KTM",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 8,
    name: "Royal Enfield",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
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
