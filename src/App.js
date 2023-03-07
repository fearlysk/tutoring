import Home from "../src/pages/Home/Home";
import './App.scss';
import Modal from "../src/components/Modal/Modal";
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Home open={open} setOpen={setOpen}/>
      <Modal open={open} onClose={() => setOpen(false)} marker='modal__1'></Modal>
    </div>
  );
}

export default App;
