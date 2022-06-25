import React, { useEffect } from "react"
import MatchCard from "./MatchCard"

const MatchesData = (props) => {
  const { data, filterTags } = props
  useEffect(() => {
    console.log(filterTags)
    let newData = data.filter(
      (element) => filterTags.includes(element.team1) || filterTags.includes(element.team2)
    )
    console.log(newData)
  }, [filterTags])
  if (filterTags.length > 0) {
    return data
      .filter((element) => filterTags.includes(element.team1) || filterTags.includes(element.team2))
      .map((ele, index) => {
        return <MatchCard data={ele} counter={index} key={ele.id} />
      })
  }
  return (
    <div className="md:flex flex-wrap block">
      {data.map((ele, index) => {
        return <MatchCard data={ele} counter={index} key={ele.id} />
      })}
    </div>
  )
}

export default MatchesData
