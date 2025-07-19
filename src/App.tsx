import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from "./reducer"; // Import the RootState type

// Pages
import UserList from './pages/UserList'
import UserDetail from './pages/UserDetail'

// import for toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Update document title with the new brand name
  useEffect(() => {
    document.title = "Nexus Marketplace";
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<Navigate to="/users" replace />} />
      </Routes>

      <ToastContainer 
        stacked 
        position="bottom-right" 
        theme={darkMode ? "dark" : "light"}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
