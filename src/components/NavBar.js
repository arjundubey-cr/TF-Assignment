import React, { useState } from "react"

const navTabs = ["MATCHES", "TABLE"]

const NavBar = ({ activeTab }) => {
  const [active, setActive] = useState(navTabs[0])
  return (
    <div className="flex flex-wrap -mb-px text-center text-gray-200">
      {navTabs.map((ele, index) => {
        return (
          <div
            class="mr-2"
            key={index}
            onClick={() => {
              setActive(ele)
              activeTab(ele)
            }}>
            <p
              className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-300 hover:border-gray-300 ${
                active === ele ? "border-pink-100" : ""
              }`}
              aria-current="page">
              {ele}
            </p>
          </div>
        )
      })}
      {active} is active now
    </div>
  )
}

export default NavBar
