import useSwitch from "./hooks/useSwitch"

function App() {

  const [state, toggle] = useSwitch();

  return (
    <>
      <div>
        <h1>Il valore è: {state ? "true" : "false"}</h1>
        <button onClick={toggle}>Cambia valore</button>
      </div>
    </>
  )
}

export default App
