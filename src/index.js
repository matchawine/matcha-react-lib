import React from "react"
import { render } from "react-dom"
import { MatchaAdvisor } from "./lib"

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <MatchaAdvisor />
  </div>
)

render(<App />, document.getElementById("root"))
