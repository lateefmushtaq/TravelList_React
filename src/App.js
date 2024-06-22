
import './App.css';
import { useState } from "react";
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

function App() {

  const [items, setItems] = useState([]);
  function handleNewItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleNewItems} />
      <List items={items} onDeleteItem={handleDelete} />
      <Footer items={items} />
    </div>
  );
}

export default App;
