import {
  Plan as PrismaPlan,
  Country,
  UserPlan,
  Consumption,
} from "prisma/prisma-client";

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface Plan extends UserPlan {
  country: Country;
  plan: PrismaPlan;
  consumption?: Consumption;
}

export enum PlanStatus {
  Active = "Active",
  Expired = "Expired",
  Pending = "Pending",
}
