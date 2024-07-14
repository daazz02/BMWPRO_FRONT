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
          className={`border border-black shadow-md rounded-[67px] w-[298px] h-[392px] flex flex-col justify-between`}
          style={{backgroundColor}}
      >
        <h2 className="text-center mt-[14px] text-xl" style={{color: getTextColor(index)}}>
          {data.name}
        </h2>
        <div className="flex justify-center">
          <img
              src={data.img}
              alt={data.name}
              className="w-[150px] h-[150px] object-contain shadow-lg"
          />
        </div>
        <div
            className="text-left ml-5"
            style={{color: getTextColor(index)}}
        >
          <p className="text-lg text-shadow-[0_4px_8px_#2f3030]">{data.rentDaily}$ in daily</p>
          <p className="text-lg text-shadow-[0_4px_8px_#2f3030]">{data.rentWeekly}$ in weekly</p>
          <p className="text-lg text-shadow-[0_4px_8px_#2f3030]">{data.rentMonthly}$ in monthly</p>
          <p className="text-lg text-shadow-[0_4px_8px_#2f3030]">{data.rentYearly}$ in yearly</p>
        </div>
        <div className="flex justify-center mb-4">
          <button
              className="text-white w-[190px] h-[50px] rounded-full"
              style={{
                background: "linear-gradient(90deg, #090f30,#000000,#190631)"
              }}
          >
            basket
          </button>
        </div>
      </div>
  );
};

export default DetailedCard;
