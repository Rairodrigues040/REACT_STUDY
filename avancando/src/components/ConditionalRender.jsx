
const ConditionalRender = () => {

    const x = true

    const name = "João"


    return (
        <div>
            {/* render condicional*/}
            <h3>Isso será exibido?</h3>
            {x && <p>Se x for true, sim!</p>}
            {/* else */}
            {name === "João" ? (
                <div>
                    <p>Olá, João!</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender
