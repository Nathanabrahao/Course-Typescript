import React from 'react';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import SecondeComponent from './Components/SecondeComponent';
import Destructuring from './Components/Destructuring';
import State from './Components/State';

function App() {

  // 1 - variaveis
  const name: string = "Nathan";
  const age: number = 23;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }


  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (<p>Está trabalhando!</p>)}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondeComponent name="Segundo" />
      <Destructuring
        title='Primeiro post'
        content='Algum conteúdo'
        commentsQty={10}
        tags={["ts", "js"]}
      />
      <State />
    </div>
  );
}

export default App;

