import React from "react"
import { getTeamInitials } from "../helpers/helperFunctions"
import MatchCard from "./MatchCard"
const filterData = (data, filterTags) => {
  return data.filter((element) => {
    if (filterTags.length > 1) {
      return filterTags.length === 2
        ? filterTags.includes(getTeamInitials(element.team1)) &&
            filterTags.includes(getTeamInitials(element.team2))
        : []
    }
    return (
      filterTags.includes(getTeamInitials(element.team1)) ||
      filterTags.includes(getTeamInitials(element.team2))
    )
  })
}
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
        {filterData(data, filterTags).map((ele, index) => {
          return (
            <MatchCard
              data={ele}
              counter={index}
              key={ele.id}
              totalCount={filterData(data, filterTags).length}
            />
          )
        })}
      </div>
    )
  }
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      {data.map((ele, index) => {
        return <MatchCard data={ele} counter={index} key={ele.id} totalCount={data.length} />
      })}
    </div>
  )
}

export default MatchesData
