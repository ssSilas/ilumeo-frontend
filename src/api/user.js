import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;

export const signIn = async (user) => {
  try {
    const req = await axios({
      url: "/user/login",
      method: "POST",
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      data: {
        user
      },
    }).then((user) => {
      return user;
    });
    return req.data;
  } catch (error) {
    console.log(error)
    throw { error: error.message };
  }
};