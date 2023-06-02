import React from 'react'
import { useState } from 'react'

const App = () => {

  const[dark,setdark]=useState(false)
  const[viteimg,reactimg]=useState(<img src='vite.svg'></img>)

  const[btn,btnset]=useState(false)
  const[btntwo,btnsettwo]=useState(false)



  const reactimgchange=()=>{
    reactimg(<img src='react.svg'></img>)
    btnset(!btn)
    btnsettwo(false)
  }

  const theme=()=>{
    setdark(!dark)
  }
  return (

    <>
    
    <div className={`flex justify-center items-center h-[45rem] w-full flex-col ${
      dark ? 'bg-black' :'bg-white border-red-500'
    }`}>

      <div className={`bg-purple-600 h-56 w-56 hidden= ${
        dark ? 'block' :'hidden'
      }`}>{dark ? 'dark mode applied' : 'not applied'}</div>

        <button onClick={theme} className={` border-2 border-blue-400 ${
          dark ?'bg-white text-black':'bg-black text-white'
        }`}>
            {dark ?"lightmode" :"darkmode"}
        </button>

        <button onClick={()=>{
          reactimg(<img src='vite.svg'></img>)
          btnsettwo(!btntwo)
          btnset(false)
        }} className={` ${dark ? 'text-white border-white' : 'text-black'} ${btntwo ? 'border-2 border-black' :''} `}>vite</button>

        <button onClick={reactimgchange}className={` ${dark ? 'text-white border-white' : 'text-black' } ${btn ? 'border-2 border-black' :''}`}>react</button>

        <div>
          {viteimg}
        </div>

        
      
    </div>
    </>
  )
}

export default App
