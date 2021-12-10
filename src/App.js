import React from "react"

import Data from "./components/Data"
import Form from "./components/Form"
import Header from "./components/Header"

export const App = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Data />
        <Form />
      </main>
    </>
  )
}
