import { useState, useEffect } from 'react'
import React from 'react'

function WeatherDisplay(props) {
  const [display, setDisplay] = useState(null)

  useEffect(() => {
    if (props.temp) {
      setDisplay(
        <h1> {props.temp} </h1>
      )
    }
  }, [props.temp])

  return (
    display
  )
}

export default WeatherDisplay;