import React, { useState } from "react"

const Form = () => {
  const [indata, setIndata] = useState([])
  const [isData, setIsData] = useState(false)

  const fetchNetflixTitles = indata => {
    fetch(`https://nameless-stream-30791.herokuapp.com/titles/?title=${indata}`)
      .then(res => res.json())
      .then(json => {
        setIndata(json)
        console.log("from json", json)
      })
  }

  const onSetIndataChange = e => {
    setIndata(e.target.value)
  }

  const handleInput = e => {
    fetchNetflixTitles(indata)
    setIsData(true)

    console.log("setIndata", indata)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleInput}>
      {console.log("indata in return", indata)}
      <input
        type="text"
        placeholder="search for movie"
        value={indata}
        onChange={onSetIndataChange}
      ></input>

      <button onClick={() => handleInput}>Search for a netflix title</button>
      {indata.length !== 0 && isData && (
        <>
          {indata.map(item => {
            console.log(item)
            return <p key={item}>{item}</p>
          })}
        </>
      )}
    </form>
  )
}

export default Form
