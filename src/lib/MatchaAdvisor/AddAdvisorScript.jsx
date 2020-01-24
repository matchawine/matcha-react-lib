import React, { useEffect } from "react"
import AddScript from "../utils/add-script/AddScript"

const getGlobalPreferences = () => global.__MATCHA__PREFERENCES
const setGlobalPreferences = value => (global.__MATCHA__PREFERENCES = value)

const ScriptUrl = {
  prod: "https://webchat.matcha.wine/webchat.js",
  preprod: "https://preprod-webchat.matcha.wine/webchat.js",
}
const getScriptUrl = (env = "prod") =>
  ScriptUrl[env] || console.error(`Unknown env ${env}`)

const AddAdvisorScript = props => {
  const { onLoad, ...config } = props
  useEffect(() => {
    throw new Error("test error")
    if (!getGlobalPreferences())
      setGlobalPreferences({
        ...config,
        matchaAdvisorReact: {
          version: process.env.REACT_APP_VERSION,
        },
      })

    return () => {
      getGlobalPreferences().deactivate()
    }
  })

  return (
    <AddScript
      target={document.body}
      src={getScriptUrl(config.env)}
      onAlreadyExist={() => getGlobalPreferences().activate()}
      onLoad={onLoad}
    />
  )
}

export default AddAdvisorScript
