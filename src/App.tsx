import ListGroup from "./components/ListGroup";

function App() {
  let items = ['New York','Auckland','Tokyo','Melbourne','Sydney'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Cities" OnSelectItem={handleSelectItem} /></div>
}

export default App;