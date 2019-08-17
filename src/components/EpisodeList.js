import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { Container, Header } from 'semantic-ui-react'
import EpisodeCard from './EpisodeCard'
import SearchForm from './SearchForm'

export default function EpisodeList() {
    const [episodeData, setEpisodeData] = useState([])

    useEffect(() => {
        const getData = async () => {
          return await Axios
          .get(`https://rickandmortyapi.com/api/episode/`)
        }
        getData()
        .then(response => {
          console.log(response)
          let episodes = response.data.results
          setEpisodeData(episodes)
        })
        .catch(error => {
          console.log('ERROR: ', error)
        })
      }, [])

      return (
        <Container className='episode-list grid-view'
        style = {{
            display: 'flex', 
            flexFlow: 'column wrap', 
            alignItems: 'space-between', 
            justifyContent: 'space-evenly'}}>
          <Header>Episodes</Header>
          <SearchForm />
          {episodeData.map(episode => {
            return <EpisodeCard name = {episode.name}
            airDate = {episode.air_date}
            episode = {episode.episode}
             />
          })}
        </Container>
      )
}