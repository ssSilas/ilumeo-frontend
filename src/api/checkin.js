import axios from "axios"
import { useEffect, useState } from "react";

const url = process.env.REACT_APP_BASE_URL

export default function useFetchCheckin() {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const checkins = []

  async function getCheckin() {
    try {
      await axios({
        url: `check-in/?user=${"a27keNO"}`,
        method: "GET",
        baseURL: url,
        headers: {
          "Content-Type": "application/json",
          'Accept': "*/*",
        },
        data: {
          user: "a27keNO"
        }
      }).then((response) => {
        console.log(response)
        checkins.push(...response.data)
      }).finally(() => {
        setData(checkins)
        setIsFetching(false)
      })
    } catch (error) {
      console.log(error)
      throw { message: "Algo deu errado" };
    }
  }

  useEffect(() => {
    getCheckin()
  }, [])
  return { data, isFetching }
}

export const createCheckin = async (user) => {
  try {
    const req = await axios({
      url: "/check-in/create",
      method: "POST",
      baseURL: url,
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      data: { user },
    }).then((data) => {
      return data;
    });
    return req.data;
  } catch (error) {
    console.log(error)
    throw { message: error.response.data.message };
  }
};