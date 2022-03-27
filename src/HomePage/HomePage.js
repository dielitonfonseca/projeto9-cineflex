import './style.css'
export default function HomePage(){
    return(
        <>
            <div className="content">
                <div className="title-section">
                    <p>Selecione o filme</p>
                </div>

                <div className="films-container">
                    <Film/>
                    <Film/>
                    <Film/>
                    <Film/>
                    <Film/>
                    <Film/>
                    <Film/>
                    <Film/>
                </div>
            </div>
        </>
    )
}

function Film(){
    return (
        <>
            <div className="film">
                <img src="https://fotopaulo.com.br/public/getProductImage/14013/600/600/85074?v=1.2020-10-06%2018:35:07"/>
            </div>
        </>
    )
}