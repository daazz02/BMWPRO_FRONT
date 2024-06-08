import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";
import { DetailedCardData } from "../types/common";

const businessItems: DetailedCardData[] = [
  {
    id: 0,
    name: "Business 1",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 1,
    name: "Business 2",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 2,
    name: "Business 3",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 3,
    name: "Business 4",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 4,
    name: "Business 5",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 5,
    name: "Business 6",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },

  {
    id: 6,
    name: "Business 7",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 7,
    name: "Business 8",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 8,
    name: "Business 9",
    img: "https://via.placeholder.com/150",
    rentDaily: 100,
    rentWeekly: 500,
    rentMonthly: 2000,
    rentYearly: 24000,
  },
  {
    id: 9,
    name: "Business 10",
    img: "https://via.placeholder.com/150",
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
