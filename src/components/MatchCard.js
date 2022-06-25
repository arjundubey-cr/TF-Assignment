import React, { useEffect } from "react"
import styles from "./MatchCard.module.css"

const getTeamInitials = (teamName) => {
  return teamName
    .split(" ")
    .map((ele) => ele[0])
    .join("")
}
const MatchCard = (props) => {
  const { data, counter } = props
  return (
    <div className={styles.card}>
      <div className={styles.matchInfo}>
        <span>T20 {counter + 1} of 70 </span>
        <span>{data.date}</span>
      </div>
      <div>
        <img
          alt=""
          className={`${getTeamInitials(data.team1) + "Logo"} teamLogo`}
          height="20px"
          width="20px"
        />
        {getTeamInitials(data.team1)}
        <br />
        {getTeamInitials(data.team2)}
        <br />
        {data.winner}
      </div>
    </div>
  )
}

export default MatchCard
