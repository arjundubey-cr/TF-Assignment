export const getTeamInitials = (teamName) => {
  if (teamName === null) return ""
  let initials = teamName
    .split(" ")
    .map((ele) => ele[0])
    .join("")
  return initials === "PK" ? "PBKS" : initials === "SH" ? "SRH" : initials
}
export const getMatchesData = (data) => {
  const dataObject = {}
  let pointMap = []
  for (let i = 0; i < data.length; i++) {
    const team1 = data[i].team1,
      team2 = data[i].team2,
      winner = data[i].winner
    if (!dataObject.hasOwnProperty(team1)) {
      dataObject[team1] = { matchesPlayed: 0, won: 0, matchResults: [] }
    }
    if (!dataObject.hasOwnProperty(team2)) {
      dataObject[team2] = { matchesPlayed: 0, won: 0, matchResults: [] }
    }
    if (data[i].winner) {
      //Check if the match has been played and increment matches played counter wrt that
      dataObject[team1].matchesPlayed = dataObject[team1].matchesPlayed + 1
      dataObject[team2].matchesPlayed = dataObject[team2].matchesPlayed + 1

      dataObject[winner].won = dataObject[winner].won + 1

      if (team1 === winner) {
        dataObject[team1].matchResults.push(true)
        dataObject[team2].matchResults.push(false)
      } else {
        dataObject[team1].matchResults.push(false)
        dataObject[team2].matchResults.push(true)
      }
    }
  }
  const teamNames = Object.keys(dataObject)
  for (let i = 0; i < teamNames.length; i++) {
    pointMap.push([teamNames[i], dataObject[teamNames[i]].won * 2])
  }
  pointMap = pointMap.sort((a, b) => b[1] - a[1])
  //console.log(pointMap)
  return [dataObject, pointMap]
}
