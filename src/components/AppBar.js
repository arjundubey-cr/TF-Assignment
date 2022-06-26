import React, { useEffect, useState } from "react"
import { ReactComponent as BackArrow } from "../static/arrow_back.svg"
import { ReactComponent as Cross } from "../static/cross.svg"
const AppBar = ({ filterTags }) => {
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
  }, [tags])
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
      <div className="rounded border-solid border flex max-w-full text-black w-1/2 bg-white">
        {tags.map((tag, index) => (
          <div className="flex items-center mr-2 pr-1 rounded bg-yellow-600 text-white whitespace-nowrap">
            {tag}
            <button onClick={() => deleteTag(index)} className="flex p-1 cursor-pointer text-white">
              x
            </button>
          </div>
        ))}
        <input
          value={input}
          placeholder="Enter search text"
          onKeyDown={onKeyDown}
          onChange={onChange}
          onKeyUp={onKeyUp}
          className="rounded p-3 w-full border-none"
        />
      </div>
      <Cross style={{ height: "25px", fill: "white" }} />
    </div>
  )
}

export default AppBar
