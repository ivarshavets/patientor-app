import axios from "axios";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get(
    `${apiBaseUrl}/patients`
  );

  return data;
};

export default {getAll};
