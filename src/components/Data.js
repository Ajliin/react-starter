import React, { useState } from "react"

const fetchNetflixTitles = () => {
  fetch("https://nameless-stream-30791.herokuapp.com/titles/")
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
}

const Data = () => {
  const [data, setData] = useState([])

  return (
    <div>
      <p>Hello</p>
      <button onClick={() => fetchNetflixTitles()}>Get movies</button>
    </div>
  )
}

export default Data
