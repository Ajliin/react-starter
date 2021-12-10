import React, { useState } from "react"

const Data = () => {
  const [indata, setIndata] = useState([])
  const [textInput, setTextInput] = useState("")

  const fetchNetflixTitles = textInput => {
    fetch(`https://nameless-stream-30791.herokuapp.com/year/${textInput}`)
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
      <select
        type="text"
        placeholder="Search for Netflix title"
        value={textInput}
        onChange={onSetTextInputChange}
        className="input-field"
      >
        <option value="">From year</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>
      <button className="submit-btn" onClick={() => handleInput}>
        Search
      </button>

      {indata.length !== 0 && (
        <section className="output-section">
          {indata.map(item => (
            <div className="output-container">
              <h2 key={item.id}>{item.title}</h2>

              <p>{item.description}</p>
            </div>
          ))}
        </section>
      )}
    </form>
  )
}

export default Data
