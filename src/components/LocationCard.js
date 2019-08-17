import React from 'react'
import { Header, Container, Segment } from 'semantic-ui-react'

export default function LocationCard ({ name, type, dimension}) {
  return (
    <Container
    style = {{
      border: '1px solid grey', 
      width: '30%', 
      display: 'flex', 
      flexFlow: 'column',
      marginTop: '10px',
      marginLeft: '40px'}}>
    <Header style={{padding: '10px'}}>{name}</Header>
    <Segment>{type}</Segment>
    <Segment>{dimension}</Segment>
    </Container>
  )
}
