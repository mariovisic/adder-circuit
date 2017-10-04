import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = () => (
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
  </header>
)

const battery = true

const transistor = (source, gate) => (
  !!(source && gate)
)

const cTransistor = (source, gate) => (
  !!(source && !gate)
)

const andGate = (a, b) => {
  return transistor(transistor(battery, a), b)
}

const notGate = (a) => {
  const output = cTransistor(battery, a)

  transistor(output, a)

  return output
}

console.log(`andGate(0, 0): ${andGate(0, 0)}`)
console.log(`andGate(0, 1): ${andGate(0, 1)}`)
console.log(`andGate(1, 0): ${andGate(1, 0)}`)
console.log(`andGate(1, 1): ${andGate(1, 1)}`)

console.log(`notGate(0): ${notGate(0)}`)
console.log(`notGate(1): ${notGate(1)}`)

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
