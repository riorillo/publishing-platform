import axios from "axios";

type Headers = {
  headers: {token: string}
}

type UrlArray = [string, Headers?]

export const fetchDataFromServer = async (param: string, token?: string) => {
  try {
    const url: UrlArray = token
      ? [
          `http://localhost:3001/api/${param}`,
          {
            headers: {
              token: `Bearer ${token}`,
            },
          },
        ]
      : [`http://localhost:3001/api/${param}`];

    const res = await axios.get(...url);
    return res;
  } catch (err) {}
};
