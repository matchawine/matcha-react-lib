import React, { useEffect } from "react"
import { addScript } from "./addScriptUtils"

const AddScript = props => {
  const { children, target, onAlreadyExist, ...attributes } = props

  useEffect(() => {
    const script = addScript(target, attributes, { ifNotExists: true })
    if (!script) onAlreadyExist()
  })

  return <>{children}</>
}
export default AddScript
