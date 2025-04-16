import useSwitch from "./hooks/useSwitch";
import useDate from "./hooks/useDate";
import useCustomPointer from "./hooks/useCustomPointer";

function App() {

  const [state, toggle] = useSwitch();
  const { date } = useDate();
  const customPointer = useCustomPointer("🔥");

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
      <div>
        <h1>Il puntatore del mouse ora è: {customPointer}</h1>
      </div>
    </>
  )
}

export default App
