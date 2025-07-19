import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import { Toaster } from './components/Common/toaster.tsx'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducer/index.ts"
import { Provider } from 'react-redux'

const store = configureStore({
  reducer:rootReducer,
});


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <Toaster /> */}
      </BrowserRouter>
    </Provider> 
  </StrictMode>,
)
