import ListGroup from "./components/ListGroup";

function App() {
  let items = ['New York','Auckland','Tokyo','Melbourne','Sydney'];

  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;