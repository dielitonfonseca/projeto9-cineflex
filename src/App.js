import './assets/reset.css'
import './assets/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
export default function App(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>

        </BrowserRouter>
    )
}

function TopBar(){
    return(
        <div className="top-bar">
            <h1>CINEFLEX</h1>
        </div>

    )
}

