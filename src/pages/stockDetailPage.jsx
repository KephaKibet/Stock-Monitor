import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import finnHub from "../api/finnHub"

const formatData = data => {
  return data.t.map((e, index) => {
    return {
      x: e*1000,
      y: data.c[index]
    }
    
  })
}

export const StockDetailPage = () => {
  const [chartData, setChartData] = useState()

  const { symbol } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const date = new Date()
      // convert to seconds and truncate.
      const currentTime = Math.floor(date.getTime() / 1000)

      // get data for past one day, week,year
      let oneDay 
      if (date.getDay() === 6) {
        oneDay = currentTime - 2 * 24 * 60 * 60;
      }
      else if (date.getDay() === 0) {
        oneDay = currentTime - 3 * 24 * 60 * 60;
      }
      else {
        oneDay = currentTime - 24 * 60 * 60;
      }
       
      const oneWeek = currentTime - 7 * 24 * 60 * 60
      const oneYear = currentTime - 365*24*60*60
      
      try {
      
        const responses = await Promise.all([
          finnHub.get("/stock/candle", {
            params: {
              symbol,
              from:oneDay,
              to:currentTime,
              resolution:30
            }
          }),finnHub.get("/stock/candle", {
            params: {
              symbol,
              from:oneWeek,
              to:currentTime,
              resolution:60
            }
          }),finnHub.get("/stock/candle", {
            params: {
              symbol,
              from:oneYear,
              to:currentTime,
              resolution:"D"
            }
          })
        ])
        setChartData({
          day: formatData(responses[0].data),
          week: formatData(responses[1].data),
          year:formatData(responses[2].data)
        })
        console.log(responses);
      }
      catch (error) {
      console.log(error);
      }
    }
    fetchData()
  }, [symbol])
  
  
  return <div>
      {symbol}
  </div>
}