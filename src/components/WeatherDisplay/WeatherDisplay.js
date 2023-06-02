import { useState, useEffect } from 'react'
import React from 'react'

function WeatherDisplay(props) {
  const [display, setDisplay] = useState(null)

  useEffect(() => {
    if (props.temp) {
      setDisplay(
        <section id="info">
          <h1> {props.temp}&deg;F </h1>
          <h2> {props.wind} mph </h2>
        </section>
      )
    }
  }, [props.temp, props.wind])

  return (
    display
  )
}

export default WeatherDisplay;