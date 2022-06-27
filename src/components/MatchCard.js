import React from "react"
import { getTeamInitials } from "../helpers/helperFunctions"
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const processDate = (date) => {
  const dt = new Date(date + "2022")
  const day = weekday[dt.getDay()]
  const val = [day, date].join(", ")
  return val
}
const MatchCard = (props) => {
  const { data, counter, totalCount } = props
  return (
    <div className="border border-gray-400/40 rounded-lg md:rounded-none mt-5 md:mt-0 p-5 mx-5 md:mx-0 text-[#bdc1c6] text-sm hover:bg-black">
      <div className="flex justify-between">
        <span>
          T20 {counter + 1} of {totalCount}{" "}
        </span>
        <span className="text-xs">{data.date.length > 6 ? data.date : processDate(data.date)}</span>
      </div>
      <div className="py-0.5">
        <div className="flex">
          <img
            alt=""
            className={`${getTeamInitials(data.team1) + "Logo"} bg-center bg-contain p-3 h-6 w-6`}
          />
          <span
            className={`pl-4 ${
              getTeamInitials(data.team1) !== getTeamInitials(data.winner) ? "text-[#9aa0a6]" : ""
            }`}>
            {getTeamInitials(data.team1)}
          </span>
        </div>
        <div className="flex">
          <img
            alt=""
            className={`${getTeamInitials(data.team2) + "Logo"} bg-center bg-contain p-2 h-6 w-6`}
          />

          <span
            className={`pl-4 ${
              getTeamInitials(data.team2) !== getTeamInitials(data.winner) ? "text-[#9aa0a6]" : ""
            }`}>
            {getTeamInitials(data.team2)}
          </span>
        </div>
      </div>
      {/* {data.winner ? getTeamInitials(data.winner) + " won the match" : ""} */}
    </div>
  )
}

export default MatchCard
