import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [member, setMemeber] = useState('')
  useEffect(() => {
    Axios.post('/api/member').then((response) => {
      if (response.data) {
        console.log(response.data)
        setMemeber(response.data)
      } else {
        alert('failed to ')
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>{member.id}</h1>
        <h1>{member.userName}</h1>
        <h1>{member.passWord}</h1>
        <h1>{member.email}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

export default App
