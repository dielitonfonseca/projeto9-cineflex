import './assets/reset.css'
import './assets/style.css'
import TopBar from './components/TopBar';
import HomePage from './HomePage/HomePage';
import SessaoPage from './FilmePage/FilmePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/filme/:idFilme" element={<SessaoPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

// function TopBar(){
//     return(
//         <div className="top-bar">
//             <h1>CINEFLEX</h1>
//         </div>

//     )
// }

