import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import TextInput from "./TextInput"

describe("Show webchat", () => {
  it("Shows webchat", () => {
    const { queryByText } = render(<TextInput label="vachier" />)

    expect(queryByText(/vachier/i)).toBeInTheDocument()
  })
})
