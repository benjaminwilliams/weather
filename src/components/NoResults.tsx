import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  margin: '20px',
  border: '1px solid #2774ec;',
  backgroundColor: '#d1dae8',
  padding: '20px',
  fontWeight: 'bold'
})

const NoResults: React.FC = () => {
  return <Container>No results found for your location. Please try another location</Container>
}

export default NoResults
