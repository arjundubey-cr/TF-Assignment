import React, { useCallback, useEffect, useState } from "react"
import { getMatchesData, getTeamInitials } from "../helpers/helperFunctions"

const PointsTable = (props) => {
  const { data } = props
  const [matchData, setMatchData] = useState(null)
  const [pointsTable, setPointsTable] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const getData = useCallback(() => {
    return getMatchesData(data)
  }, [data])

  useEffect(() => {
    const [matchData, pointTable] = getData()
    console.log(matchData, pointTable)
    setMatchData(matchData)
    setPointsTable(pointTable)
    setIsLoading(false)
  }, [getData])

  if (isLoading) {
    return "Loading..."
  }
  return (
    <div>
      {pointsTable.map((ele, index) => {
        return (
          <div key={index} className="text-gray-200 flex">
            <div className="flex basis-3/4 items-center">
              <img
                alt=""
                className={`${getTeamInitials(ele[0]) + "Logo"} bg-center bg-contain p-2`}
                height="20px"
                width="20px"
              />
              {ele[0]}
            </div>
            <div>{matchData[ele[0]].matchesPlayed}</div>
            <div>{matchData[ele[0]].won}</div>
            <div>{matchData[ele[0]].matchesPlayed - matchData[ele[0]].won}</div>
            <div>{matchData[ele[0]].won * 2}</div>
            <div className="flex flex-wrap">
              {matchData[ele[0]].matchResults.map((ele, index) => {
                return <div>{ele ? "true" : "false"}</div>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PointsTable
