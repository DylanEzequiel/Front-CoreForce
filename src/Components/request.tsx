const apiURL=process.env.AUTH_URL

interface IBodyAuth{
  client_id:string | undefined,
  client_secret:string | undefined,
  audience:string,
  grant_type:string
}

const body: IBodyAuth = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  audience: apiURL+"/api/v2/",
  grant_type: "client_credentials",
};

export const getToken = () => {
  const url = apiURL+"/oauth/token";
  return fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data).catch((error)=> console.log(error))
};

export const getAuth0Users = async () => {
  const url = apiURL+"/api/v2/users";
  const tokenStorage = localStorage.getItem("token");
  let token;
  if (tokenStorage) {
    token = tokenStorage;
  } else {
    token = await getToken();
    localStorage.setItem("token", token.access_token);
  }
  return fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
