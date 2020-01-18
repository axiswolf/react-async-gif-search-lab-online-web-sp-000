import React from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 
import GifListContainer from '../containers/GifListContainer'

const API_KEY = "dc6zaTOxFJmzC&";
const URL_BASE = "https://api.giphy.com/v1/gifs/";

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
    </div>
  )
}

export default App
