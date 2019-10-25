import React, { useState } from "react"

const Switch = ({ children }) => {
  const [opened, setOpened] = useState(false)
  return (
    <div>
      <button onClick={() => setOpened(!opened)}>{`Activé: ${opened}`}</button>
      {opened && children}
    </div>
  )
}

export default Switch
