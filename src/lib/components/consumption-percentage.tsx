import { FC } from "react";

interface ConsumptionPercentageProps {
  size?: number;
  percentage: number;
  strokeWidth?: number;
}

export const ConsumptionPercentage: FC<ConsumptionPercentageProps> = ({
  size = 50,
  percentage = 10,
  strokeWidth = 6,
}) => {
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${
    (percentage / 100) * circumference
  } ${circumference}`;

  return (
    <svg width={size} height={size} className="m-4">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        className="stroke-gray-200"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="stroke-blue-500"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={size * 0.2}
        fill="black"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};
