import "./App.css"
import MyComponents from "./components/MyComponents"
import Title from "./components/Title"

// css de componente
const App = () => {

  //inline style dinâmico
  const n = 15

  //classes dinâmicas
  const redTitle = true


  return (
    <div>
      {/* 1 - css global */}
      <h1>CSS no React </h1>
      {/* 1 - css de componente*/}
      <MyComponents />
      <p>pegou css de componente</p>
      {/* inline style */}
      <p style={{ color: "blue" }}>Este elemento tem estilos inline</p>
      {/* inline style dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "green" }}>
        CSS dinâmico
      </h2>
      {/* classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}> Este título vai ter uma classe</h2>
      {/* css modules*/}
      <Title />
    </div>
  )
}

export default App
