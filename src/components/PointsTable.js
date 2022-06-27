import React, { useCallback, useEffect, useState } from "react"
import { getMatchesData, getTeamInitials } from "../helpers/helperFunctions"
import { ReactComponent as Won } from "../static/yes.svg"
import { ReactComponent as Lost } from "../static/no.svg"
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
    setMatchData(matchData)
    setPointsTable(pointTable)
    setIsLoading(false)
  }, [getData])

  if (isLoading) {
    return <div className="h-screen w-screen">Loading..</div>
  }
  return (
    <div className="overflow-x-auto p-1 pr-4 h-screen overflow-y-hidden mt-5">
      <table className="w-full h-100">
        <thead className="sticky top-0">
          <tr>
            <th
              scope="col"
              className="sticky left-0 py-3 px-4 pr-32 bg-stone-800 text-left font-normal text-xs tracking-wider bg-stone-800 text-gray-400">
              Team
            </th>
            <th
              scope="col"
              className="text-left px-2 text-xs font-normal tracking-wider text-gray-500">
              M
            </th>
            <th
              scope="col"
              className="text-left px-2  text-xs font-normal tracking-wider text-gray-500">
              W
            </th>
            <th
              scope="col"
              className="text-left px-2  text-xs font-normal tracking-wider text-gray-500">
              L
            </th>
            <th
              scope="col"
              className="text-left px-2 text-xs font-normal tracking-wider text-gray-500">
              Pts
            </th>
            <th
              scope="col"
              className="text-leftpx-2 text-xs font-normal tracking-wider text-gray-500">
              Last 5
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-200">
          {pointsTable.map((ele, index) => {
            return (
              <tr key={index} className="border-t border-gray-400/40">
                <td className="sticky left-0 whitespace-nowrap px-4 pr-32 py-3 bg-stone-800 text-sm w-3/5 md:w-full">
                  <div className="flex items-center">
                    <div className="">{index + 1}</div>
                    <img
                      alt=""
                      className={`${
                        getTeamInitials(ele[0]) + "Logo"
                      } bg-center bg-contain p-3 mx-2`}
                      height="24px"
                      width="24px"
                    />
                    <div>{getTeamInitials(ele[0])}</div>
                  </div>
                </td>
                <td className="whitespace-nowrap text-sm px-2">
                  {matchData[ele[0]].matchesPlayed}
                </td>
                <td className="whitespace-nowrap text-sm px-2">{matchData[ele[0]].won}</td>
                <td className="whitespace-nowrap text-sm px-2">
                  {matchData[ele[0]].matchesPlayed - matchData[ele[0]].won}
                </td>
                <td className="whitespace-nowrap text-sm px-2">{matchData[ele[0]].won * 2}</td>
                <td className="whitespace-nowrap text-sm px-2">
                  <div className="flex">
                    {matchData[ele[0]].matchResults.slice(-5).map((ele, index) => {
                      return (
                        <div key={index}>
                          {ele === true ? <Won className="w-5" /> : <Lost className="w-5" />}
                        </div>
                      )
                    })}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PointsTable
