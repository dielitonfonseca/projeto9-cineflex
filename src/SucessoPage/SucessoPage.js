import './style.css'
import { useLocation,Link } from 'react-router-dom'
export default function SucessoPage({}){
    const location = useLocation()
    const { filme,ingressos,nome,cpf,data,hora } = location.state
    console.log(filme)
    return(
        <>
        <div className="title-sucess">Pedido feito com sucesso!</div>
        <div className="content">
        <div className="section">
            <p className="title">Filme e Sessão</p>
            <p>{filme}</p>
            <p>{data} {hora}</p>
        </div>
        <div className="section">
            <p className="title">Ingressos</p>
            {ingressos.map((item)=><p >Assento {item}</p>)}
        </div>
        <div className="section">
            <p className="title" >Comprador</p>
            <p>Nome: {nome}</p>
            <p>CPF: {cpf}</p>            
        </div>

        <Link to="/"><button>Voltar pra Home</button></Link>
        </div>

        </>
    )
}