import axios from "axios";

const url: string = import.meta.env.VITE_API_URL || '';

interface ILogin {
  email: string,
  password: string
}


export const loginAction = ({ email, password }: ILogin) => {
  return async (dispatch: any) => {
    try {
      const body = { email, password };
      const data  = await axios.post(`${url}auth/login`, body);
      console.log(data)
      if (data.status === 201) {
        localStorage.setItem("userData", JSON.stringify({ status: "logged" }));
        dispatch({
          type: "LOGIN",
          payload: true,
        });
        console.log("conectado");
      } 
    } catch (error: any) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
      console.log(error.message);
    }
  };
};

export const logout = () => {
  return (dispatch: any) => {
    localStorage.removeItem("userData");
    dispatch({
      type: "LOGOUT",
      payload: false,
    });
    console.log("deslogeado");
  };
};