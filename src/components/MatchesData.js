import React, { useEffect } from "react"
import MatchCard from "./MatchCard"

const MatchesData = (props) => {
  const { data, filterTags } = props
  // useEffect(() => {
  //   console.log(filterTags)
  //   let newData = data.filter(
  //     (element) => filterTags.includes(element.team1) || filterTags.includes(element.team2)
  //   )
  //   console.log(newData)
  // }, [filterTags])
  if (filterTags.length > 0) {
    return (
      <div className="grid md:grid-cols-2 grid-cols-1">
        {data
          .filter((element) => {
            if (filterTags.length > 1) {
              return filterTags.length === 2
                ? filterTags.includes(element.team1) && filterTags.includes(element.team2)
                : []
            }
            return filterTags.includes(element.team1) || filterTags.includes(element.team2)
          })
          .map((ele, index) => {
            return <MatchCard data={ele} counter={index} key={ele.id} />
          })}
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      {data.map((ele, index) => {
        return <MatchCard data={ele} counter={index} key={ele.id} />
      })}
    </div>
  )
}

export default MatchesData
