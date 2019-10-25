import React, { useEffect } from "react"
import PropTypes from "prop-types"
import AddScript from "../utils/add-script/AddScript"

const getGlobalPreferences = () => global.__MATCHA__PREFERENCES
const setGlobalPreferences = value => (global.__MATCHA__PREFERENCES = value)

const ScriptUrl = {
  prod: "https://webchat.matcha.wine/webchat.js",
  preprod: "https://preprod-webchat.matcha.wine/webchat.js",
}
const getScriptUrl = (env = "prod") =>
  ScriptUrl[env] || console.error(`Unknown env ${env}`)

const MatchaAdvisor = props => {
  const { onLoad, ...config } = props
  useEffect(() => {
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

MatchaAdvisor.propTypes = {
  clientId: PropTypes.string.isRequired,
  userId: PropTypes.string,
  env: PropTypes.string,
  newTab: PropTypes.bool,
  shopId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPurchase: PropTypes.func,
  onLoad: PropTypes.func,
}

export default MatchaAdvisor
