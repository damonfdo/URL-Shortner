import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Typography, Button, TextField } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        label="outlined"
        variant='outlined'
      >
        URL
      </TextField>
      <Button variant="contained">Shorten URL</Button>
    </div>
  )
}

export default App
