import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async() =>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() =>{
    fetchData()
  }, [])

  return (
    <>
      <div className="container">
          {cards.map((card) => {
            return <div className="card">
              <h1>{card.title}</h1>
              <p>{card.title}</p>
              <span>{card.id}</span>
            </div>
          })}
      </div>
    </>
  )
}

export default App
