import React, { useEffect, useState } from "react"
import "./App.css"
import Word from "./components/Word"

function App() {
  //const [data, setData] = useState("")

  //const wordFecth = async () => {
  //  const response = await fetch("https://random-word-api.herokuapp.com/all")
  //  const data = await response.json()
  //  setData(data)
  //  console.log(data[2])
  //}
  //useEffect(() => {
  //  wordFecth()
  //}, [])

  //const randomGenerator = () => {
  //  //let word = Math.random() * data.length
  //  let word = Math.floor(Math.random() * data.length)
  //  setData(word)
  //  console.log(word)
  //}

  return (
    <>
      {/*<Word randomGenerator={randomGenerator} word={setData} />*/}
      <Word />
    </>
  )
}

export default App
