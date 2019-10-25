import React from "react"
import { render } from "react-dom"
import { MatchaAdvisor } from "../lib"
import Switch from "./SwitchButton"

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Switch>
      <MatchaAdvisor />
    </Switch>
  </div>
)

render(<App />, document.getElementById("root"))
