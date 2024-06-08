import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

const averageItems: DetailedCardData[] = [
  {
    id: 0,
    name: "Honda",
    img: "https://via.placeholder.com/150",
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
    name: "Audi",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 7,
    name: "Mercedes-Benz",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 8,
    name: "Toyota",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 9,
    name: "Ford",
    img: "https://via.placeholder.com/150",
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
