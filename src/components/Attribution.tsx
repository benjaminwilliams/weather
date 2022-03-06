import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  marginTop: '100px',
  borderTop: '1px solid #bbb',
  color: '#777',
  padding: '20px'
})

const Attribution = () => (
  <Container>
    <div>
      icons by{' '}
      <a target="_blank" rel="noreferrer" href="https://icons8.com">
        Icons8
      </a>
    </div>
    <div>
      Weather data from{' '}
      <a target="_blank" rel="noreferrer" href="https://open-meteo.com">
        Open Metro
      </a>
    </div>
  </Container>
)

export default Attribution
