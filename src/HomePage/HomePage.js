import './style.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage(){
    const [items, setItems] = useState(null);
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        requisicao.then(resposta => {setItems(resposta.data);});
    }, []);

    // if(items === null) {
	// 	return ( 
        
	// }

    return(
        <>
            <div className="content">
                <div className="title-section">
                    <p>Selecione o filme</p>
                </div>
                <div className="films-container">
                    {items==null? <img className="loading-image" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />: items.map(item => <Link to={"/sessoes/"+item.id}><Film image = {item.posterURL}/></Link>)}
                </div>
            </div>
        </>
    )
}

function Film({image}){
    return (
        <>
            <div className="film">
                <img src={image}/>
            </div>
        </>
    )
}