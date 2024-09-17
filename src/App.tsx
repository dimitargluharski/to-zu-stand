import useCounter from "./store/countStore"

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
