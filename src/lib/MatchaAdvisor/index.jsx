import React from "react"
import PropTypes from "prop-types"
import ErrorBoundary from "./ErrorBoundary"
import AddAdvisorScript from "./AddAdvisorScript"

const MatchaAdvisor = props => (
  <ErrorBoundary>
    <AddAdvisorScript {...props} />
  </ErrorBoundary>
)

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
