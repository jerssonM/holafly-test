import { Plan } from "./models";
import { axiosInstance } from "./axios-instance";

export const fetchMobilePlans = async (userId: number) => {
  const { data: response } = await axiosInstance.get<Plan[]>(
    `mobile-plans/${userId}`
  );
  return response;
};
