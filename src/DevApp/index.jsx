import React from "react"
import { render } from "react-dom"
import { MatchaAdvisor } from "../lib"
import Switch from "./SwitchButton"
import { clientId } from "../config"

const advisorConfig = {
  clientId,
  env: "preprod",
  newTab: true,
  onPurchase: () => {},
  userId: "G33K",
}

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <Switch initOpened={true}>
      <MatchaAdvisor {...advisorConfig} />
    </Switch>
  </div>
)

render(<App />, document.getElementById("root"))
