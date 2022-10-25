import Chart from "react-apexcharts"
import { useState } from "react"


export const StockChart = ({ chartData, symbol }) => {
  const [dateFormat, setDateFormat] = useState("24h")
  const { day, week, year } = chartData
  
  const options = {
    tittle: {
      text: symbol,
      align: "center",
      style:{
        fontSize:"24px"
      }
    },
    chart: {
      id: "stock data",
      animations: {
        speed:1300
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC:false
      }
    },
    tooltip: {
      x: {
        format: "mmm dd HH"
      }
    }
  }

  const series = [{
    name: symbol,
    data:day
  }]



  return <div className="mt-5 p-4 shadow-sm bg-white">
    <Chart options={options} series={series} type="area" width="100%" />
    <div>
      <button onClick ={()=>setDateFormat("24h")}> 24H

      </button >
      <button onClick ={()=>setDateFormat("7d")}>7D

      </button>
      <button onClick ={()=>setDateFormat("1y")}>1Y

</button>

    </div>
  </div>

}
 