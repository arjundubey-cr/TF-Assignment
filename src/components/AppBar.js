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

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
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
      style={{
        height: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        paddingInline: "1em",
        paddingTop: "40px",
        paddingBottom: "20px",
      }}
      className="bg-teal-600">
      <div
        style={{
          display: "flex",
        }}>
        <BackArrow style={{ height: "25px", alignItems: "center", fill: "white" }} />
        IPL
      </div>
      <div
        className={`rounded-full border-solid border flex max-w-full text-black w-1/2 bg-white ${
          activeTab === "TABLE" ? "hidden" : ""
        }`}>
        {tags.map((tag, index) => (
          <div className="flex items-center mr-2 px-1 rounded-full bg-gray-400 text-white whitespace-nowrap">
            {tag}
            <button onClick={() => deleteTag(index)} className="flex p-1 cursor-pointer text-white">
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
          className="rounded-full p-3 w-full border-none outline-0"
        />
      </div>
      <Cross style={{ height: "25px", fill: "white" }} />
    </div>
  )
}

export default AppBar
