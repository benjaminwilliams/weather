import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  margin: '20px',
  border: '1px solid #b94024',
  backgroundColor: '#f8e0db',
  padding: '20px',
  fontWeight: 'bold'
})

const Loading: React.FC = () => {
  // Generic error for now, could be extended to display more information
  return <Container>Error, please try again</Container>
}

export default Loading
