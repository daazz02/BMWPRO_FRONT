import React from "react";
import { DetailedCardData } from "../types/common";
import { getColorCard } from "../utils/getColorCard";

interface Props {
  index: number;
  data: DetailedCardData;
}

const DetailedCard: React.FC<Props> = ({ index, data }) => {
  const backgroundColor = getColorCard(index);

  const getTextColor = (index: number) => {
    return index % 4 !== 3 ? "#ffffff" : "#000";
  };

  return (
    <div
      className={`border border-black shadow-md rounded-[67px] w-[298px] h-[374px]`}
      style={{ backgroundColor }}
    >
      <h2 className="text-center mt-[14px] text-xl" style={{ color: getTextColor(index) }}>
        {data.name}
      </h2>
      <img src={data.img} alt={data.name} className="w-[150px] h-[150px] mx-auto mt-[14px]" />
      <div
        className={[
          "mt-[14px] text-left ml-5 [&>p]:text-shadow",
          index % 4 !== 3 && "shadow-black",
        ].join(" ")}
        style={{ color: getTextColor(index) }}
      >
        <p className="text-lg text-shadow">{data.rentDaily}$ in daily</p>
        <p className="text-lg text-shadow-[0_4px_8px_#6366f1]">{data.rentWeekly}$ in weekly</p>
        <p className="text-lg">{data.rentMonthly}$ in monthly</p>
        <p className="text-lg">{data.rentYearly}$ in yearly</p>
      </div>
    </div>
  );
};

export default DetailedCard;
