import { useState, useEffect ,useContext} from "react"
import finnHub from "../api/finnHub"
import { WatchListContext } from "../context/context";


export const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { addStock } = useContext(WatchListContext)
  const renderDropdown = () => {
    const dropDownClass = search ? "show" : null
    return (
      <ul
        style={{
          height: "500px",
          overflowY: "scroll",
          overflowX: "hidden",
          cursor: "pointer"
        }}
        className={`dropdown-menu ${dropDownClass}`}>
        {results.map((result) => {
          return (
            <li onClick={() => {
              addStock(result.symbol)
              // clear search after adding stock
              setSearch("")
            }
            }
                
              key={result.symbol} className="dropdown-item">{result.description} ({result.symbol}) </li>
          
        )
      })}
      </ul>
    )
    
  }
  

  useEffect(() => {
    let isMounted=true
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        })

        if(isMounted)
        setResults(response.data.result)
        
        console.log(response);
        
      }
      catch (error) {
        console.log(error);
      }
    }
    // only fetch data if there is a search term otherwise it returns unecessarily large result
    if(search.length>0) 
      fetchData()

      // set result when there is no search term
    else setResults([])
    // dependecy array- only run when search changes...
  },[search])


  return <div className="w-50 p-5 rounded mx-auto">
    <div className="form-floating dropdown">
      <input style={{ backgroundColor: "rgba(45,158,171,0.1)" }} id="search" type="text" className="form-control" placeholder="Search" autoComplete="off" value={search} onChange={(e)=> setSearch(e.target.value)}></input>
      <label htmlFor="search">Search</label>
      {renderDropdown()}
      <ul className="dropdown-menu">
        <li>Stock 1</li>
        <li>Stock 2</li>
        <li>Stock 3</li>
      </ul>

    </div>
  </div>
}