import axios from "axios"

const instance = axios.create({
  baseURL: "https://portfolio-server-sepia-seven.vercel.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
})

export const axiosIstance = instance
