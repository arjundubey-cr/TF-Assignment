import React from "react"
import { ReactComponent as BackArrow } from "../static/arrow_back.svg"
import { ReactComponent as Cross } from "../static/cross.svg"
const AppBar = () => {
  return (
    <div
      style={{
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#008080",
        color: "white",
        paddingInline: "1em",
      }}>
      <div
        style={{
          display: "flex",
        }}>
        <BackArrow style={{ height: "25px", alignItems: "center", fill: "white" }} />
        IPL
      </div>
      <input type="search" name="" id="" />
      <Cross style={{ height: "25px", fill: "white" }} />
    </div>
  )
}

export default AppBar
