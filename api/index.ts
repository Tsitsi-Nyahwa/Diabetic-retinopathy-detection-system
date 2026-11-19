import { useAuth } from "@/contexts/AuthProvider";
import axios from "axios";

export const BASE_URL = process.env.EXPO_PUBLIC_IP_ADDRESS;

export const useApis = () => {
  const { getClient } = useAuth();

  const api = () => {
    const client = getClient();
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        Authorization: client ? `Bearer ${client.token}` : "",
      },
    });
  };

  const fileApi = () => {
    const client = getClient();
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: client ? `Bearer ${client.token}` : "",
      },
    });
  };

  return { api, fileApi };
};

