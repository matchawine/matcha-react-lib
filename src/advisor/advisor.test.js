import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import MatchaAdvisor from "./index"

describe("Show webchat", () => {
  it("Shows webchat", () => {
    const { queryByText } = render(<MatchaAdvisor />)

    expect(queryByText(/vachier/i)).toBeInTheDocument()
  })
})
