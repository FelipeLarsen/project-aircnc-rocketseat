import React, { useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response =  await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
      const response = await api.post('/devs', data)
      setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

// COMPONENTE: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//import Header from './Header'
//function App() {
//  return (
//    <Header/>
//  );
//}

// PROPRIEDADE: Informações que o componente Pai passa para o componente Filho.
//function App() {
//  return (
//    <>
//      <Header title="Titulo 1" />
//      <Header title="Titulo 2" />
//      <Header title="Titulo 3" />
//      <Header title="Titulo 4" />
//    </>
//  );
//}


// ESTADO: Informações mantidas pelo componente (lembrar: imutabilidade)
//import React, { useState } from 'react';
//function App() {
//  const [counter, setCounter] = useState(0);
//  function incrementCounter() {
//    setCounter(counter + 5);
//  }
//  return (
//    <>
//      <h1>Contador: {counter}</h1>
//      <button onClick={incrementCounter}>Incrementar</button>
//    </>
//  );
//}
