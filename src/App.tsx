import { createContext } from "react";
import DestructuringComponent, { Category } from "./components/DestructuringComponent";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";
import Context from "./components/Context";

type textOrNull = string | null;

/**
 * Adicionando context na aplicação
 */
export const AppContext = createContext<IAppContext | null>(null);

interface IAppContext {
   language: string
   framework: string
   projects: number
}

const contextValue: IAppContext = {
   language: 'JavaScript',
   framework: 'Express',
   projects: 5
}

function App() {
  const name: string = 'Marcos';
  const age: number = 21;
  const isWorking: boolean = true;

  /**
   * Funções
   */

  const userGreeting = (name: string): string => {
   return `Olá ${name}`;
  }

  const myText: textOrNull = "Tem algum texto aqui!";
  let mySecondText: textOrNull = null;
  mySecondText = "Teste";

  return (
      <>
         <AppContext.Provider value={contextValue}>
            <h1>TypeScript com React</h1>
            <h2>Nome: {name}</h2>
            <h2>Idade: {age}</h2>
            {isWorking && <p>Está trabalhando!</p>}
            <h3>{userGreeting('Marcos')}</h3>
            <hr />
            <FirstComponent />
            <hr />
            <SecondComponent name="Segundo" />
            <hr />
            <DestructuringComponent title="Primeiro post" content="Algum conteúdo" comentsQty={10} tags={["BOM", "ÓTIMO"]} category={Category.P}/>
            <hr />
            <State />
            <hr />
            {
               myText &&
               <p>Tem texto na variável. Texto {myText}</p>
            }
            {
               mySecondText &&
               <p>Tem texto na variável 2. Texto 2 {mySecondText}</p>
            }
            <hr />
            <Context />
         </AppContext.Provider>
      </>
   )
}

export default App
