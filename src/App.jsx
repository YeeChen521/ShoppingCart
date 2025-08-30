import { Outlet } from 'react-router-dom';
import NavBar from './component/NavBar.jsx';
import './App.css'

function App() {
    return(
        <>  
            <NavBar />
            <Outlet />{}
        </>
    )

}

export default App
