import { useParams } from 'react-router-dom';
import './style.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function FilmePage(){
    const {idFilme} = useParams();
    const filme= "https://mock-api.driven.com.br/api/v4/cineflex/movies/"+idFilme+"/showtimes"
    
    const [items, setItems] = useState(null);
    useEffect(() => {
        const requisicao = axios.get(filme);

        requisicao.then(resposta => {setItems(resposta.data);});
    }, []);

    
    if(items === null) {
		return ( <div className="content"><img className="loading-image" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" /></div>
        )
        
	}
    return (
        <>
       <div className="content">
            <div className="title-section">
                <p>Selecione a sessão</p>
            </div>
            <div className="sessao-container">
                <p className="date">Quinta-feira - 24/06/2021</p>
                <div className="time">
                    <div>16:00</div>
                    <div>16:00</div>
                </div>
            </div>
            <div className="sessao-container">
                <p className="date">Quinta-feira - 24/06/2021</p>
                <div className="time">
                    <div>16:00</div>
                    <div>16:00</div>
                </div>
            </div>
       </div>
        
        <Rodape items={items}/>
        
        
        
        </>
    )
}

function Rodape({items}){
    return(
        <>

        <div className="rodape">
            <div className="film-rodape">
                <img src = {items.posterURL}/>
            </div>

            <p className="titulo-filme">{items.title}</p>
        </div>
        </>
    )
}