import React from "react"
import { getTeamInitials } from "../helpers/helperFunctions"

const MatchCard = (props) => {
  const { data, counter } = props
  return (
    <div className="border border-gray-200 border-opacity-10 rounded-sm mt-5 p-5 md:mt-0 text-[#bdc1c6] text-sm">
      <div className="flex justify-between">
        <span>T20 {counter + 1} of 70 </span>
        <span className="text-xs">{data.date}</span>
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
