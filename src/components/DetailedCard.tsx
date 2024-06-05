import React from 'react';

interface Props {
  // Определите пропсы вашего компонента здесь
  someValue: number; // Пример пропса, который может определять цвет
}

const determineColor = (value: number): string => {
  // Пример логики для определения цвета
  if (value > 50) return '#1D63A2'; // Синий
  return '#1D63A2';
};


const DetailedCard: React.FC<Props> = (props: Props) => {
  // Реализуйте логику вашего компонента здесь
  const color = determineColor(props.someValue);

  return (
      <div
          className={`border border-black shadow-md rounded-[67px] w-[298px] h-[374px]`}
          style={{ backgroundColor: color }}
      >
        {/* Ваше содержание здесь */}
      </div>
  );
};

export default DetailedCard;
