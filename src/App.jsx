// Icons from > https://simpleicons.org
// Deploy to GitHub pages > https://www.youtube.com/watch?v=oPuaMcLRYdY

import { useState } from 'react'
import './App.css'
import ProfilePicture from './components/Photo'
import Title from './components/Title'
import About from './components/About'
import Interests from './components/Interests'
import Buttons from './components/Buttons'
import Icons from './components/Icons'

function App() {
  return (
    <>
      <div className='app'>
        < ProfilePicture />
        < Title />
        < Buttons />
        < About />
        < Interests />
        < Icons />
      </div>

    </>
  )
}

export default App

