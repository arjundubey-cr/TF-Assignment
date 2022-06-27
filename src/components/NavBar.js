import React, { useState } from "react"

const navTabs = ["MATCHES", "TABLE"]

const NavBar = ({ activeTab }) => {
  const [active, setActive] = useState(navTabs[0])
  return (
    <div className="bg-teal-600">
      <div className="flex flex-wrap -mb-px max-w-3xl m-auto text-center text-gray-200">
        {navTabs.map((ele, index) => {
          return (
            <div
              className={`flex-1 border-b-2 border-transparent cursor-pointer ${
                active === ele ? "border-pink-100" : ""
              }`}
              key={index}
              onClick={() => {
                setActive(ele)
                activeTab(ele)
              }}>
              <p
                className={`inline-block p-4 rounded-t-lg   hover:text-gray-300 hover:border-gray-300 `}
                aria-current="page">
                {ele}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar
