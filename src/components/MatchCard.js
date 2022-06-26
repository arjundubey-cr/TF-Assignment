import React, { useEffect } from "react"
import { getTeamInitials } from "../helpers/helperFunctions"

const MatchCard = (props) => {
  const { data, counter } = props
  return (
    <div className="border border-gray-200 border-opacity-60 rounded-sm mt-5 p-5 md:mt-0 text-slate-200">
      <div className="flex justify-between">
        <span>T20 {counter + 1} of 70 </span>
        <span>{data.date}</span>
      </div>
      <div>
        <div className="flex">
          <img
            alt=""
            className={`${getTeamInitials(data.team1) + "Logo"} bg-center bg-contain p-2`}
            height="20px"
            width="20px"
          />
          {getTeamInitials(data.team1)}
        </div>
        <div className="flex">
          <img
            alt=""
            className={`${getTeamInitials(data.team2) + "Logo"} bg-center bg-contain p-2`}
            height="20px"
            width="20px"
          />
          {getTeamInitials(data.team2)}
        </div>
      </div>
      {data.winner ? getTeamInitials(data.winner) + " won the match" : ""}
    </div>
  )
}

export default MatchCard
