import "./App.css"

// imagem em assets
import night from './assets/nature.jpg'

// useStates
import Data from "./components/Data"

//renderização de lista
import ListRender from "./components/ListRender"

// renderização de condicional
import ConditionalRender from "./components/ConditionalRender"

//Props
import Props from "./components/Props"

//Desestruturando props
import Desestruturacao from "./components/Desestruturacao"

//renderização de listas com components
const cars = [
  { id: 1, brand: "Ferrari", km: 31 },
  { id: 2, brand: "KIA", km: 20 },
  { id: 3, brand: "Renault", km: 19 },
]

//React Fragments
import Fragments from "./components/Fragments"

// Children prop
import Container from "./components/Container"

// função em prop
import ExecuteFunction from "./components/ExecuteFunction"

//state lift
import Message from "./components/Message"
import { useState } from "react"
import ChangeMessage from "./components/ChangeMessage"

function App() {

  // função em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  //State lift
  const [message, setmessage] = useState("")

  const handleMessage = (msg) => {
    setmessage(msg)
  }

  return (
    <div style={{ paddingBottom: "500px" }}>
      <h1> Avançando em React</h1>
      {/* Imagem em public */}
      <img src="/nature.jpg" alt="" />
      {/* Imagem em assets */}
      <img src={night} alt="" />
      {/* useState */}
      <Data />
      {/* Renderização de lista */}
      <ListRender />
      {/* Renderização de condicional */}
      <ConditionalRender />
      {/* Props */}
      <Props name="Raí" />
      {/* Desestruturando props*/}
      <Desestruturacao brand="VW" km={999} color="Blue" />
      {/* Reutilização de Components */}
      <Desestruturacao brand="Fiat" km={123444} color="Vermelho" />
      <Desestruturacao km={9987} color="azul" brand="Audi" />
      {/* Renderização de listas com componentes */}
      {cars.map((car) => (
        <Desestruturacao
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/*React Fragments*/}
      <Fragments />
      {/*Children pop*/}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      {/* função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} /> {/* esse exibe*/}
      <ChangeMessage handleMessage={handleMessage} /> {/* esse altera*/}
    </div>
  )
}

export default App
