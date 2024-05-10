import axios from "axios";

const apiURL = import.meta.env.VITE_AUTH_URL;

interface IBodyAuth {
  client_id: string | undefined;
  client_secret: string | undefined;
  audience: string;
  grant_type: string;
}

const body: IBodyAuth = {
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  audience: apiURL + "/api/v2/",
  grant_type: "client_credentials",
};

export const getToken = async () => {
  const url = apiURL + "/oauth/token";
  const { data } = await axios.post(url, body, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};

export const getAuth0Users = async () => {
  const url = apiURL + "/api/v2/users";
  const tokenStorage = localStorage.getItem("token");
  let token;
  if (tokenStorage) {
    token = tokenStorage;
  } else {
    token = await getToken();
    localStorage.setItem("token", token.access_token);
  }

  const { data } = await axios(url, {
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  return data;
};
