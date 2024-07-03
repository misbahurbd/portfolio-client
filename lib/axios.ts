import axios from "axios"

const instance = axios.create({
  baseURL: "https://misbahurbd-portfolio-server.vercel.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
})

export const axiosIstance = instance
