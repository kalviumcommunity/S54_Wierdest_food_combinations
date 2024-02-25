import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Context from './components/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Context>
)
