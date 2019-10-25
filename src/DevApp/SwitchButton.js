import React, { useState } from "react"

const Switch = ({ children, initOpened = false }) => {
  const [opened, setOpened] = useState(initOpened)
  return (
    <div>
      <button onClick={() => setOpened(!opened)}>{`Activé: ${opened}`}</button>
      {opened && children}
    </div>
  )
}

export default Switch
