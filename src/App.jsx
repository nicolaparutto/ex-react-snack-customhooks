import useSwitch from "./hooks/useSwitch";
import useDate from "./hooks/useDate";

function App() {

  const [state, toggle] = useSwitch();
  const { date } = useDate();
  return (
    <>
      <div>
        <h1>Il valore è: {state ? "true" : "false"}</h1>
        <button onClick={toggle}>Cambia valore</button>
      </div>
      <div>
        <h1>Date e ora attuali:</h1>
        <p>{date.toLocaleString()}</p>
      </div>
    </>
  )
}

export default App
