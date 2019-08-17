import React from 'react'
import { Container, Header, Segment, Image } from 'semantic-ui-react'

export default function CharacterCard ({ charName, charStatus, charSpecies, charType, charGender, charOrigin, charLocation, charImage}) {
  return (
    <Container className = 'character-card' 
    style = {{
      border: '1px solid grey', 
      width: '30%', 
      display: 'flex', 
      flexFlow: 'column',
      marginTop: '10px',
      marginLeft: '40px'}}>
      <Image src={charImage} />
      <Header>{charName}</Header>
      <Segment style={{margin: 0, border: 'none', padding: '2px'}}>Status: {charStatus}</Segment>
      <Segment style={{margin: 0, border: 'none', padding: '2px'}}>charSpecies: {charSpecies}</Segment>
      <Segment style={{margin: 0, border: 'none', padding: '2px'}}>Type: {charType}</Segment>
      <Segment style={{margin: 0, border: 'none', padding: '2px'}}>Gender: {charGender}</Segment>
      <Segment style={{margin: 0, border: 'none', padding: '2px'}}>Origin: {charOrigin}</Segment>
      <Segment style={{margin: 0, border: 'none', padding: '2px'}}>Location: {charLocation}</Segment>
    </Container>
  )
}
