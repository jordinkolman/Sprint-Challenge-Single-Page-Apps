import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Header } from 'semantic-ui-react'
import CharacterCard from './CharacterCard'
import SearchForm from './SearchForm'

export default function CharacterList() {
  const [characterData, setCharacterData] = useState([])
  useEffect(() => {
    const getData = async () => {
      return await Axios
      .get(`https://rickandmortyapi.com/api/character/`)
    }
    getData()
    .then(response => {
      console.log(response)
      let characters = response.data.results
      setCharacterData(characters)
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }, [])

  return (
    <Container className='character-list grid-view' 
    style = {{
      display: 'flex', 
      flexFlow: 'column wrap', 
      alignItems: 'space-between', 
      justifyContent: 'space-evenly'}}>
      <Header>Characters</Header>
      <SearchForm/>
      {characterData.map(character => {
        return <CharacterCard charName = {character.name}
        charStatus = {character.status}
        charSpecies = {character.species}
        charType = {character.type}
        charGender = {character.gender}
        charOrigin = {character.origin.name}
        charLocation = {character.location.name}
        charImage = {character.image}
        />
      })}
    </Container>
  )
}
