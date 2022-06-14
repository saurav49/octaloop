import axios from "axios";
import { REFRESH_TOKEN } from "../urls";

const useRefreshToken = () => {
  const refresh = async () => {
    try {
      const response = await axios.post(
        REFRESH_TOKEN,
        {},
        { withCredentials: true }
      );
      return response;
    } catch (err) {
      console.log({ err });
      localStorage.removeItem("octaloop__role");
    }
  };
  return refresh;
};

export { useRefreshToken };
