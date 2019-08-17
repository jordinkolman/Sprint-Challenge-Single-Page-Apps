import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { Container, Header } from 'semantic-ui-react'
import LocationCard from './LocationCard'
import SearchForm from './SearchForm'

export default function LocationsList() {
    const [locationData, setLocationData] = useState([])

    useEffect(() => {
        const getData = async () => {
          return await Axios
          .get(`https://rickandmortyapi.com/api/location/`)
        }
        getData()
        .then(response => {
          console.log(response)
          let locations = response.data.results
          setLocationData(locations)
        })
        .catch(error => {
          console.log('ERROR: ', error)
        })
      }, [])

      return (
        <Container className='location-list grid-view'
        style = {{
            display: 'flex', 
            flexFlow: 'column wrap', 
            alignItems: 'space-between', 
            justifyContent: 'space-evenly'}}>
          <Header>Locations</Header>
          <SearchForm />
          {locationData.map(location => {
            return <LocationCard name = {location.name}
            type = {location.type}
            dimension = {location.dimension}
             />
          })}
        </Container>
      )
}
