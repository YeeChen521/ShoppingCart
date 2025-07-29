import { Outlet } from 'react-router-dom';
import NavBar from './component/NavBar.jsx';
import './App.css'

/**
 * App component serves as the main layout for the application.
 * It includes the NavBar and an Outlet for rendering child routes.
 * The Outlet component will render the matched child route components based on the current URL.
 * The NavBar component provides navigation links to different parts of the application.
 * The App component is wrapped in a CartProvider to provide cart context to the entire application.    
 * @returns {JSX.Element} The main application layout with navigation and child routes.
 * @example
 * <App />
 */ 

function App() {
    return(
        <>  
            <NavBar />
            <Outlet />{}
        </>
    )

}

export default App
