
import axios, { Method } from "axios";

// Create Axios instance
export const axiosInstance = axios.create({});

// Define interface for function parameters
interface ApiConnectorProps {
  method: Method;
  url: string;
  bodyData?: object;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
}

// Simplified apiConnector function
export const apiConnector = ({
  method,
  url,
  bodyData,
  headers,
  params,
}: ApiConnectorProps) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData || undefined,
    headers: headers || undefined,
    params: params || undefined,
  });
};
