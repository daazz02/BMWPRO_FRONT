import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";

function Motorbike() {
  return (
    <div className="mt-20">
      <div className="flex gap-5 flex-wrap">
        {Array.from({ length: 10 }).map((_, index) => (
          <Fragment key={index}>
            <DetailedCard />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Motorbike;
