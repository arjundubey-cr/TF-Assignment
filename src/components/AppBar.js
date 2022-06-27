import React, { useEffect, useState } from "react"
import { ReactComponent as BackArrow } from "../static/arrow_back.svg"
import { ReactComponent as Cross } from "../static/cross.svg"
const AppBar = ({ filterTags, activeTab }) => {
  const [input, setInput] = useState("")
  const [tags, setTags] = useState([])
  const [isKeyReleased, setIsKeyReleased] = useState(false)
  const onChange = (event) => {
    console.log("input done")
    const { value } = event.target
    setInput(value)
  }
  const onKeyDown = (e) => {
    const { key } = e
    const trimmedInput = input.trim()
    if ((key === "," || key === "Enter") && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault()
      setTags((prevState) => [...prevState, trimmedInput])
      setInput("")
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags]
      const poppedTag = tagsCopy.pop()
      e.preventDefault()
      setTags(tagsCopy)
      setInput(poppedTag)
    }

    setIsKeyReleased(false)
  }

  const onKeyUp = () => {
    setIsKeyReleased(true)
  }
  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index))
  }
  useEffect(() => {
    filterTags(tags)
  }, [tags, filterTags])
  return (
    <div
      style={{}}
      className="bg-teal-600 text-white md:flex md:justify-between items-center md:p-2 ">
      <div
        style={{
          display: "flex",
        }}>
        <BackArrow
          style={{ height: "25px", alignItems: "center", fill: "white", marginRight: "5px" }}
        />
        IPL
      </div>
      <div
        className={`rounded-full border-solid border flex max-w-full text-black md:w-1/2 mx-1 my-2 md:my-0 md:mx-0 bg-white ${
          activeTab === "TABLE" ? "hidden" : ""
        }`}>
        {tags.map((tag, index) => (
          <div
            className="flex items-center mr-2 px-2 rounded-full bg-gray-400 text-white whitespace-nowrap"
            key={index}>
            {tag}
            <button
              onClick={() => deleteTag(index)}
              className="flex p-1 cursor-pointer text-white text-xs">
              x
            </button>
          </div>
        ))}
        <input
          value={input}
          placeholder="Enter team(s)"
          onKeyDown={onKeyDown}
          onChange={onChange}
          onKeyUp={onKeyUp}
          className="rounded-full p-3 w-full border-none outline-0 h-0.5"
        />
      </div>
      <Cross style={{ height: "25px", fill: "white" }} />
    </div>
  )
}

export default AppBar
