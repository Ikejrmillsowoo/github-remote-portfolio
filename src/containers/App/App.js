import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Profile from '../Profile/Profile'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle 
`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

const AppWrapper = styled.div 
`
tesxt-align: center;
`

class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Profile />
      </AppWrapper>
      </>
    );
    }
}

export default App;
