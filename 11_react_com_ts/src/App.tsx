import React, { createContext } from 'react';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import SecondeComponent from './Components/SecondeComponent';
import Destructuring, { Category } from './Components/Destructuring';
import State from './Components/State';
import Context from './Components/Context';

type textOrNull = string | null;

type fixed = "isso" | "aquilo" | "Ou";

//9- context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null)



function App() {

  // 1 - variaveis
  const name: string = "Nathan";
  const age: number = 23;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  //8 - Type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null;

  mySecondText = "opa"

  const testandoFixed: fixed = "Ou"


  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
        category={Category.JS}
      />
      <Destructuring
        title='Segundo post'
        content='Algum conteúdo'
        commentsQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <State />
      {myText && <p>Tem texto na variavel</p>}
      {mySecondText && <p>Tem texto na variavel</p>}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;

