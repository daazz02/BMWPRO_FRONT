import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

const sportsItems: DetailedCardData[] = [
  {
    id: 0,
    name: "Sports 1",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 1,
    name: "Sports 2",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 2,
    name: "Sports 3",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 3,
    name: "Sports 4",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 4,
    name: "Sports 5",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 5,
    name: "Sports 6",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },

  {
    id: 6,
    name: "Sports 7",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 7,
    name: "Sports 8",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 8,
    name: "Sports 9",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 9,
    name: "Sports 10",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 10,
    name: "Sports 11",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 11,
    name: "Sports 12",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 12,
    name: "Sports 13",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 13,
    name: "Sports 14",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 14,
    name: "Sports 15",
    img: "https://via.placeholder.com/150",
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
