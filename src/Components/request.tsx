const body: any = {
  client_id: "9P2OoDAlWk8ggQ9f9GLVocllrQQJRjug",
  client_secret:
    "JNtuKrk31iCI_oRsUEGn9i22IuHjXhCW_stkL2rHKziCk5bi47MCzjdF0eoQ3mMU",
  audience: "https://dev-lnoda07jj1wqfmje.us.auth0.com/api/v2/",
  grant_type: "client_credentials",
};

export const getToken = () => {
  const url = "https://dev-lnoda07jj1wqfmje.us.auth0.com/oauth/token";
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
  const url = "https://dev-lnoda07jj1wqfmje.us.auth0.com/api/v2/users";
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
