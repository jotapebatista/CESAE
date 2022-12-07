import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/25'

function FetchPoke() {

  const [data, setData] = useState(null)
  const [id, setID] = useState(null)
  const [name, setName] = useState(null)
  const [type, setType] = useState(null)
  const [image, setImage] = useState(null)

  const getData = async () => {
    const { data } = await axios.get(baseUrl)
    setData(data)
    setID(data.id)
    setName(data.name)
    setType(data.types[0].type.name)
    setImage(data.sprites.front_default)
  
  }
  // useEffect(() => {
  //   getData()
  // }, [])


  return (

    <div>
      <input type="text" placeholder='Search pokemon' />
      <button onClick={getData}>fecth</button>
      <div className='searched-pokemon'>
        <article>
        <img src={image} alt="" />
        <p>{id}</p>
        <p>{name}</p>
        <p>{type}</p>
        </article>
        
      </div>
    </div>

  )
}

export default FetchPoke
