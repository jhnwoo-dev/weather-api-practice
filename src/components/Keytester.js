import React, { useEffect } from 'react'

export const Keytester = () => {
  useEffect(() => {
    document.addEventListener('keydown', detectKeydown, true)
  }, [])

  const detectKeydown = (e) => {
    console.log("Clicked key: ", e.key)
    if (e.key === " ") {
      console.log("Key clicked: Spacebar")
    }
  }
  return (
    <main>tester</main>
  )
}

export default Keytester