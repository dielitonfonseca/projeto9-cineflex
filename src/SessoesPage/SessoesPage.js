import { Link, useParams } from 'react-router-dom';
import Rodape from '../components/Rodape'
import './style.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function SessoesPage(){
    const {idFilme} = useParams();
    const filme= "https://mock-api.driven.com.br/api/v4/cineflex/movies/"+idFilme+"/showtimes"
    
    const [items, setItems] = useState(null);
    useEffect(() => {
        const requisicao = axios.get(filme);

        requisicao.then(resposta => {setItems(resposta.data);});
    }, []);

    
    if(items === null) {
		return ( <div className="voider"><img className="loading-image" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" /></div>
        )
        
	}
    return (
        <>
       <div className="content">
            <div className="title-section">
                <p>Selecione a sessão</p>
            </div>
            <div className="sessao-container">
                {items.days.map(item=> <Sessao weekday={item.weekday} date={item.date} showtimes={item.showtimes}/>)}
            </div>
       </div>
        
        <Rodape items={items}/>
        </>
    )
}

function Sessao({weekday,date, showtimes}){
    return(
        <>
        <p className="date">{weekday} {date}</p>
        <div className="time">
            {showtimes.map(item=><Link to={"/assentos/"+item.id}><div>{item.name}</div></Link>)} 
        </div>
        </>
    )
}
// function Rodape({items}){
//     return(
//         <>
//         <div className="rodape">
//             <div className="film-rodape">
//                 <img src = {items.posterURL}/>
//             </div>

//             <p className="titulo-filme">{items.title}</p>
//         </div>
//         </>
//     )
// }


