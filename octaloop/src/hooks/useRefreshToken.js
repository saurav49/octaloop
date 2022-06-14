import axios from "axios";
import { REFRESH_TOKEN } from "../urls";

const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.post(
      REFRESH_TOKEN,
      {},
      { withCredentials: true }
    );
    console.log({ response }, response.headers);
    return response;
  };
  return refresh;
};

export { useRefreshToken };
