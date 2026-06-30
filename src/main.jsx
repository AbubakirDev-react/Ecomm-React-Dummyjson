import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import { WishList } from './context/wishlist.context.js'
import WishListProvider from './provider/wishlist.provider.jsx'
import SearchProvider from './provider/SearchProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SearchProvider>
    <AuthProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </AuthProvider>
    </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
