import axios from "axios";
import { USER_TOKEN_KEY, ADMIN_TOKEN_KEY } from "../constants";

const url = `${process.env.REACT_APP_API_URL}`;

export const loginAdmin = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/loginadmin`, data);
      const output = response.data;
      if (output.status === "success") {
        localStorage.setItem(ADMIN_TOKEN_KEY, output.token);
        dispatch({
          type: "LOGIN_ADMIN_SUCCESS",
          payload: output.token,
        });
      }
    } catch (error) {
      const output = error.response.data;
      dispatch({
        type: "LOGIN_ADMIN_FAILED",
        payload: output.error,
      });
    }
  };
};

export const userLoginFacebook = (data) => {
  var facebookName = data.name;
  let removedSpacesFacebookName = facebookName.split(" ").join("");
  let fixLowercasedFacebookName = removedSpacesFacebookName.toLowerCase();
  var uniqueNumberOfId = data.id.substr(data.id.length - 4);
  let autoRegisterWithFacebook = {
    username: fixLowercasedFacebookName,
    email: `fb+${data.email}`,
    phoneNumber: `00001111${uniqueNumberOfId}`,
    password: "00001111",
  };
  return async (dispatch) => {
    try {
      const responseRegister = await axios.post(
        `${url}/users/register`,
        autoRegisterWithFacebook
      );
      if (responseRegister.data.status === "success") {
        let autoLoginWithFacebook = {
          email: `fb+${data.email}`,
          password: "00001111",
        };
        try {
          const response = await axios.post(
            `${url}/users/login`,
            autoLoginWithFacebook
          );
          const output = response.data;
          if (output.status === "success") {
            dispatch({
              type: "LOGIN_USER_SUCCESS",
              payload: output.token,
            });
          }
        } catch (error) {
          const output = error.response.data;
          console.log(output);
        }
      } else {
        return false;
      }
    } catch (error) {
      const output = error.response.data;
      if (output.status === "error") {
        let autoLoginWithFacebook = {
          email: `fb+${data.email}`,
          password: "00001111",
        };
        try {
          const response = await axios.post(
            `${url}/users/login`,
            autoLoginWithFacebook
          );
          const output = response.data;
          if (output.status === "success") {
            dispatch({
              type: "LOGIN_USER_SUCCESS",
              payload: output.token,
            });
          }
        } catch (error) {
          const output = error.response.data;
          console.log(output);
        }
      } else {
        return false;
      }
    }
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/login`, data);
      const output = response.data;
      if (output.status === "success") {
        localStorage.setItem(USER_TOKEN_KEY, output.token);
        dispatch({
          type: "LOGIN_USER_SUCCESS",
          payload: output.token,
        });
      }
    } catch (error) {
      const output = error.response.data;
      dispatch({
        type: "LOGIN_USER_FAILED",
        payload: output.error,
      });
    }
  };
};

export const registerUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/register`, data);
      const output = response.data;
      if (output.status === "success") {
        dispatch({
          type: "REGISTER_USER_SUCCESS",
          payload: output.message,
        });
      }
    } catch (error) {
      const output = error.response.data;
      if (output.message) {
        dispatch({
          type: "REGISTER_USER_FAIL",
          payload: output.message,
        });
      } else {
        dispatch({
          type: "REGISTER_USER_INVALID",
          payload: output.error,
        });
      }
    }
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };
};
