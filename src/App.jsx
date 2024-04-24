import React, { useEffect, useState } from 'react'
import { Load } from './componentes/load/Load'
import { Home } from './componentes/home/Home'

function App() {
 
    const [page, setpage] = useState(false)

    useEffect(()=> {
      setTimeout(()=>{
        setpage(true)
      },5000)
    })

  return (
    <>
      {page ? (
          <Home/>
        ) : (
          <Load/>
        ) 
      }
    </>
  )
}

export default App
