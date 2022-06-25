import React from "react"
import MatchCard from "./MatchCard"

const MatchesData = (props) => {
  const { data } = props
  return (
    <div className="md:flex flex-wrap block">
      {data.map((ele, index) => {
        return <MatchCard data={ele} counter={index} key={ele.id} />
      })}
    </div>
  )
}

export default MatchesData
