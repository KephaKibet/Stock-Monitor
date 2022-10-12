import { useState, useEffect } from "react"
import finnHub from "../api/finnHub"
export const StockList = () => {

  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/quote", {
          params: {
          symbol:"MSFT"
        }})
        console.log(response);
      }

      catch (err) {
        console.log(err);
      }
    }
    fetchData()

  },[])
  
  return <div>
      StockList
  </div>
}