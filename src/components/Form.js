import React, { useState } from "react"

const Form = () => {
  const [indata, setIndata] = useState([])
  const [textInput, setTextInput] = useState("")

  const fetchNetflixTitles = textInput => {
    fetch(
      `https://nameless-stream-30791.herokuapp.com/titles/?title=${textInput}`
    )
      .then(res => res.json())
      .then(json => {
        setIndata(json)
        console.log("from json", json)
      })
  }

  const onSetTextInputChange = e => {
    setTextInput(e.target.value)
  }

  const handleInput = e => {
    fetchNetflixTitles(textInput)
    setTextInput("")
    setIndata([])
    console.log("setIndata", indata)
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleInput}>
      {console.log("indata in return", indata)}
      <input
        type="text"
        placeholder="Search for Netflix title"
        value={textInput}
        onChange={onSetTextInputChange}
        className="input-field"
      ></input>
      <button className="submit-btn" onClick={() => handleInput}>
        Search
      </button>

      {indata.length !== 0 && (
        <section className="output-container">
          {indata.map(item => (
            <div className="output-container">
              <h2 key={item}>{item}</h2>
            </div>
          ))}
        </section>
      )}
    </form>
  )
}

export default Form
