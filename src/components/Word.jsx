import React, { useState } from "react"
import data from "./Data"

//const Word = (randomGenerator, word) => {
const Word = () => {
  const [index, setIndex] = useState(0)
  const { word } = data[index]

  const randomGenerator = () => {
    let randomWord = Math.floor(Math.random() * data.length)

    setIndex(randomWord)
    console.log(randomWord)
  }

  return (
    <>
      <section>
        <div className='title'>
          <h2>random word generator </h2>
        </div>
        <div className='word'>
          <div className='text'>{word}</div>
          <button onClick={randomGenerator}>Generator</button>
        </div>
      </section>
    </>
  )
}

export default Word
