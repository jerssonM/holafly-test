import { axiosInstance } from "./axios-instance";
import { Credentials, LoginResponse } from "./models";

export const login = async (credentials: Credentials) => {
  try {
    const { data: response } = await axiosInstance.post<LoginResponse>(
      "login",
      credentials
    );
    if (!response?.token) {
      return null;
    }
    return response;
  } catch {
    return null;
  }
};