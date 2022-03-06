import React from 'react'
import Weather from './components/Weather'
import styled from '@emotion/styled'
import Attribution from './components/Attribution'

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
})
const Page = styled.div({
  backgroundColor: '#fff',
  maxWidth: '1100px',
  flexBasis: '100%'
})

function App() {
  return (
    <Container>
      <Page>
        <h1 style={{ margin: '20px' }}>Weather</h1>
        <Weather />
        <Attribution />
      </Page>
    </Container>
  )
}

export default App
