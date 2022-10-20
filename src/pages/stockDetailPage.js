import { useParams } from "react-router-dom"

export const StockDetailPage = () => {

  const {symbol}=useParams()
  
  return <div>
      {symbol}
  </div>
}