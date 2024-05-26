import { Fragment } from "react/jsx-runtime";
import DetailedCard from "../components/DetailedCard";

function Motorbike() {
  return (
    <div className="bg-[url(/src/assets/motorbike-background.jpeg)] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="mt-[63px]">
        <div className="flex gap-5 flex-wrap justify-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <Fragment key={index}>
              <DetailedCard />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Motorbike;

// background-image: url(/src/assets/motorbike-background.jpeg);
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// background-attachment: fixed;
