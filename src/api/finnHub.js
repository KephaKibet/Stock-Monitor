import axios from "axios";

const TOKEN ="cd3e3c2ad3ic0uj47jpgcd3e3c2ad3ic0uj47jq0"
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token:TOKEN
  }
})