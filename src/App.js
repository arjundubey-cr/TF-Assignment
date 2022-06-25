import { useEffect, useState } from "react"
import "./App.css"
import AppBar from "./components/AppBar"
import MatchesData from "./components/MatchesData"
import NavBar from "./components/NavBar"
const dataURL =
  "https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("MATCHES")
  useEffect(() => {
    fetch(dataURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
      })
      .catch((err) => {
        console.error(`Error occurred while fetching the data from ${dataURL}`, err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading....</div>
  }
  return (
    <div className="bg-stone-600">
      <AppBar />
      <NavBar
        activeTab={(active) => {
          setActiveTab(active)
        }}
      />
      <div className="bg-stone-800 mx-40">
        {activeTab === "MATCHES" ? <MatchesData data={data} loading={loading} /> : "TABLE"}
      </div>
    </div>
  )
}

export default App
