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

function App() {


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
    </div>
  )
}

export default App
