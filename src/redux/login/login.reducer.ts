import { UnknownAction } from "redux";

interface LoginState {
  userLogged: boolean;
}

const initialState: LoginState = {
  userLogged: false,
};

const loginReducer = (state = initialState, action: UnknownAction): any => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userLogged: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
