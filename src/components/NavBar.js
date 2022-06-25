import React, { useState } from "react"

const navTabs = ["MATCHES", "TABLE"]

const NavBar = () => {
  const [active, setActive] = useState(navTabs[0])
  return (
    <div>
      {navTabs.map((ele, index) => {
        return <div onClick={() => setActive(ele)}>{ele}</div>
      })}
      {active} is active now
    </div>
  )
}

export default NavBar
