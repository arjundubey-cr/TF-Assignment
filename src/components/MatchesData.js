import React from "react"
import MatchCard from "./MatchCard"

const MatchesData = (props) => {
  const { data } = props
  return (
    <div>
      {data.map((ele, index) => {
        return <MatchCard data={ele} counter={index} />
      })}
    </div>
  )
}

export default MatchesData
