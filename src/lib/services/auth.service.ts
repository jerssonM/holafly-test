import { axiosInstance } from "./axios-instance";
import { Credentials, User } from "./models";

export const login = async (credentials: Credentials) => {
  const { data: response } = await axiosInstance.post<User>(
    "login",
    credentials
  );
  if (!response) {
    return null;
  }

  return response;
};
