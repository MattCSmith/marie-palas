import React from "react"
import Container from "../../components/container/container.component"
import Navigation from "../../components/navigation/navigation.component"

import "./base.css"

class PageLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default PageLayout
