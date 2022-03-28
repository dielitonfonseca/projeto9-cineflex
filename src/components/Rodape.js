export default function Rodape({items}){
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