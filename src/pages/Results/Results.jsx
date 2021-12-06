import './Results.css'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ResultCard } from '../../components/ResultCard/ResultCard'

export const Results = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [apiData, setApiData] = useState('')

  useEffect(() => {
    const verifyState = async () => {
      if (!location.state) {
        navigate('/')
        return null
      } else {
        const response = await fetch(`https://api.publicapis.org/entries?category=${location.state.category}`)
        const json = await response.json()
        setApiData(json.entries)
      }
    } 
    verifyState()
  }, [navigate, location.state])

  console.log(apiData)

  return (
    <>
      {apiData.length && apiData.map(element => {
        return <ResultCard data={element} key={element.Link}/>
      })}
    </>
    
  )
}