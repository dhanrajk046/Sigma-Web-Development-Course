import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Harry")
  const [form, setform] = useState({})

  const handleClick = ()=>{
    alert("Hey I am clicked")
  }

  const handleMouseOver = () =>{
    alert("Hey I am a mouse over")
  }

  const handleChange = (e) =>{
    // setName(e.target.value)
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <input  type="text" name="email" value={form.email?form.email:""} onChange={handleChange} />
      <input  type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
