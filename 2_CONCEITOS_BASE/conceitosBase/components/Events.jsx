const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    }

    // função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

    return (
        <div>
            <button onClick={() => console.log("Testando")}>Clique aqui - sem função</button>
            <div>

            </div>
            {/* Eventos */}
            <div>
                <button onClick={handleClick}> Clique aqui - com função</button>
            </div>
            {/* Função com render */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events