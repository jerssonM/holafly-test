import clsx from "clsx";
import { FC } from "react";
import Image from "next/image";
import { DateTime } from "luxon";
import { Lightning } from "phosphor-react";
import { Button, Card, Progress } from "keep-react";

import { Plan, PlanStatus } from "../services/models";

interface PlanCardProps {
  plan: Plan;
}

export const PlanCard: FC<PlanCardProps> = ({ plan }) => {
  function getDiffInDays(startDate: Date, endDate: Date) {
    const date1 = DateTime.fromISO(startDate.toString());
    const date2 = DateTime.fromISO(endDate.toString());
    const diff = date2.diff(date1, "days");

    return Math.round(diff.as("days"));
  }

  return (
    <Card className="h-full p-8">
      <Card.Title>
        <div
          className={clsx(
            "flex gap-4 w-fit py-1 pr-2 rounded-md justify-space-between",
            {
              "bg-blue-200": plan.status === PlanStatus.Active,
              "bg-red-200": plan.status === PlanStatus.Pending,
              "bg-gray-200": plan.status === PlanStatus.Expired,
            }
          )}
        >
          <div className="rounded-full overflow-hidden relative w-6">
            <Image fill alt={plan.country.name} src={plan.country.flagUrl} />
          </div>
          <span
            className={clsx("text-sm font-normal", {
              "text-blue-400": plan.status === PlanStatus.Active,
              "text-red-400": plan.status === PlanStatus.Pending,
              "text-gray-400": plan.status === PlanStatus.Expired,
            })}
          >
            {plan.status}
          </span>
        </div>
      </Card.Title>
      <Card.Container className="grid flex-1">
        <div className="flex flex-col gap-2">
          <p className="flex justify-between font-bold">
            {plan.country.name}
            {plan.status === PlanStatus.Pending && (
              <span className="font-normal">
                {getDiffInDays(plan.dateStart, plan.dateEnd)} (days left)
              </span>
            )}
          </p>
          <p className="text-sm">{plan.plan.name}</p>
          {plan.status === PlanStatus.Active && (
            <Progress
              rounded
              color="info"
              labelProgress
              progress={plan.consumption?.totalConsumption || 0}
            />
          )}
          {plan.status === PlanStatus.Expired && (
            <p className="text-sm">
              {DateTime.fromISO(plan.dateStart.toString()).toFormat(
                "MM/dd/yyyy"
              )}{" "}
              -{" "}
              {DateTime.fromISO(plan.dateEnd.toString()).toFormat("MM/dd/yyyy")}
            </p>
          )}
        </div>
        <div className="mt-8 grid gap-2 self-end">
          {plan.status === PlanStatus.Pending && (
            <Button
              size="sm"
              width="full"
              type="primary"
              className="bg-rose-500 hover:bg-rose-400"
            >
              View details and install
            </Button>
          )}
          {plan.status === PlanStatus.Active && (
            <>
              <Button size="sm" width="full" type="outlineGray">
                View details
              </Button>
              <Button
                size="sm"
                width="full"
                type="primary"
                className="bg-green-500 text-black hover:bg-green-400"
              >
                <span className="pr-2">
                  <Lightning size={24} />
                </span>
                Add more data
              </Button>
            </>
          )}
        </div>
      </Card.Container>
    </Card>
  );
};
